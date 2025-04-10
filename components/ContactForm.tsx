"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { sendEmail } from "@/actions/emailAction"
import { useEffect, useRef, useState, useTransition } from "react"

type FormInputs = {
    emailContact: string
    company?: string // Honeypot field
}

export default function ContactForm() {
    const { register, handleSubmit } = useForm<FormInputs>()
    const [status, setStatus] = useState('')
    const [isPending, startTransition] = useTransition();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        // 👇 Honeypot check
        if (data.company?.trim()) {
            setStatus('Spam detected. Message not sent.')
            return
        }

        startTransition(async () => {
            const res = await sendEmail(data.emailContact)

            if (res.success) {
                setStatus('Email sent. We will get back to you shortly!')

                // Optional timeout to clear message
                // if (timeoutRef.current) clearTimeout(timeoutRef.current)
                // timeoutRef.current = setTimeout(() => setStatus(''), 2000)
            } else {
                setStatus(res.error || 'Failed to send. Try again later.')
            }
        })
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
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

                    {/* 👇 Honeypot Field - Hidden via CSS */}
                    <input
                        type="text"
                        {...register("company")}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
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
