"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Use the Next.js hook
import Image from "next/image";
import { sendEmail } from "@/actions/Email/sendEmail";

export default function ThankyouPage() {
    const searchParams = useSearchParams(); // Extract searchParams dynamically
    const email = searchParams.get("email"); // Get email safely
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        if (!email) return; // Avoid running if no email is provided

        const sentEmails = JSON.parse(localStorage.getItem("sentEmails") || "[]");

        if (!sentEmails.includes(email)) {
            sendEmail(email)
                .then(() => {
                    sentEmails.push(email);
                    localStorage.setItem("sentEmails", JSON.stringify(sentEmails));
                    setEmailSent(true);
                })
                .catch((error) => console.error("Email sending failed:", error));
        } else {
            setEmailSent(true);
        }
    }, [email]);

    return (
        <section className="full full-width-split-screen min-h-screen">
            <div className="content space-y-4 grid content-center justify-items-start py-12 max-md:pt-[100px]">
                <h1>We got you!</h1>
                <p>Thanks for reaching out, we will be in touch with a response
                    within 48 hours.</p>
                {emailSent && <p className="text-(length:--text--1) text-gray-500">Confirmation email sent.</p>}
            </div>
            <div className="img-box relative h-96 md:h-full bg-primary">
                <Image
                    src="/media/4.jpg"
                    alt=""
                    fill
                    className="object-cover object-center opacity-90"
                />
            </div>
        </section>
    );
}
