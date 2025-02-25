"use server"
import { Resend } from "resend"

export const sendEmail = async (email: string) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { error: "invalid email address" }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: 'admin@nodedropp.com',
            subject: `Hello World, contact from: ${email}`,
            html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
        })
        return { msg: "email sent!" }
    } catch (error) {
        return { msg: "error sending email" }
    }
}