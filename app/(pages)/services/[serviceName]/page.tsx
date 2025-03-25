import React from 'react'
import { services } from '@/templates'
import CallToAction from '@/components/templates/CallToAction';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default async function page({ params }: { params: Promise<{ serviceName: string }> }) {
    const { serviceName } = await params;
    const service = services.find(service => service.name === serviceName)

    return (
        <>
            <section>
                <div className="inner py-12">
                    <div className="stack space-y-4">
                        <h1>{service?.headline}</h1>
                        <p className='max-w-[60ch]'>{service?.description}</p>

                        <Link href={`#contact-us`}>
                            <Button asChild>Learn More</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    )
}
