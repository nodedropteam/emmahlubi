import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
        }

        await resend.emails.send({
            from: 'Website Contact <onboarding@resend.dev>',
            to: process.env.EMAIL_RECEIVER!,
            subject: `Contact form message from ${name}`,
            html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        });

        return new Response(JSON.stringify({ message: 'Message sent!' }), { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
    }
}
