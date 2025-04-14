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
            from: `admin@nodedropp.com`,
            to: `admin@emmahlubi.co.za`,
            subject: `Contact from: ${email}`,
            html: `
            <p>Please send information to ${email} about the services of Emmahlubi!</p>
            `,
        })
        return {
            success: true,
            msg: "Thank you for reaching out. We will get back to you shortly!"
        }
    } catch (error) {
        console.log('Email send error: ', error)
        return {
            success: false,
            msg: "Something went wrong. Try again in a few minutes!"
        }
    }
}