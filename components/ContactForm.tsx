"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { sendEmail } from "@/actions/emailAction"
import { useEffect, useRef, useState, useTransition } from "react"

type FormInputs = {
    emailContact: string
}

export default function ContactForm() {
    const { register, handleSubmit, formState } = useForm<FormInputs>()
    const [status, setStatus] = useState('')
    const [isPending, startTransition] = useTransition();

    // Store timeout ID
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        startTransition(async () => {
            const res = await sendEmail(data.emailContact)

            if (res.success) {
                setStatus('Email sent. We will get back to you shortly!')

                // Clear any existing timeout
                // if (timeoutRef.current) {
                //     clearTimeout(timeoutRef.current)
                // }

                // // Set a new timeout
                // timeoutRef.current = setTimeout(() => {
                //     setStatus('')
                // }, 2000) // <-- 2 seconds, not 2 ms
            } else {
                setStatus(res.error || 'Failed to send. Try again later.')
            }
        });
    }

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="stack flex gap-1 sm:justify-center flex-wrap sm:flex-nowrap max-w-lg mx-auto">
                    <Input
                        {...register("emailContact")}
                        placeholder="jdoe@email.com"
                    />
                    <Button type="submit">
                        {isPending ? `Sending...` : `Submit`}
                    </Button>
                    <p className="text-sm text-gray-600">{status}</p>
                </div>
            </form>
        </div>
    )
}
