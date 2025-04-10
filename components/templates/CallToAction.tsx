import React from 'react'
import Image from 'next/image'
import Form from 'next/form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactForm from '../ContactForm';

export default function CallToAction() {
    return (
        <section id="call-to-action" className="feature py-28 relative">
            <div className="relative h-[400px] lg:h-[600px] w-full">
                <Image
                    className="object-cover"
                    src="/media/9.jpg"
                    alt=""
                    fill />
            </div>

            <div id='contact-us'
                className='absolute top-1/2 -translate-y-1/2'
                aria-roledescription='label'>
            </div>

            <div className="content text-center max-w-[768px] mx-auto space-y-4">
                <h2>Let us keep you compliant, while you focus on growth.</h2>
                <p>Leave us your email and we’ll contact you about our services.</p>
                <ContactForm />
            </div>
        </section>
    )
}
