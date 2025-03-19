import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { services, footer, company } from '@/config/menu'

export default function Footer() {
    return (
        <footer id="footer" className="full content-grid wrapper relative bg-secondary text-secondary-foreground snap-start">
            <div className="min-h-[80vh] py-20 flex flex-col justify-center">
                <div className="row flex flex-wrap gap-20">
                    <div className="stack space-y-4">
                        <div className="stack">
                            <h3>Stay Connected</h3>
                            <p>
                                Drop us your email to receive monthly updates from us!
                            </p>
                        </div>
                        <form action="">
                            <div className="row flex flex-col gap-1 flex-wrap items-start">
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border-background"
                                    placeholder="email"
                                />
                                <Button type="submit" variant={`default`}>Submit</Button>
                            </div>
                        </form>
                    </div>
                    <div className="row grow flex flex-wrap justify-end gap-8">
                        <div className="wrapper w-[35%] md:w-[30%] grow">
                            <div id="services-menu" className='space-y-4'>
                                <h4 className="title">{services.title}</h4>
                                <ul className="space-y-2">
                                    {
                                        services.links.map((link, index) => (
                                            <li key={index}>
                                                <Link href={link.url}>{link.text}</Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="wrapper w-[35%] md:w-[30%] grow space-y-8">
                            {
                                (company.links.length > 0) && (
                                    <div id="company-menu" className='space-y-4'>
                                        <h4 className="title">{company.title}</h4>
                                        <ul className="space-y-2">
                                            {
                                                company.links.map((link, index) => (
                                                    <li key={index}>
                                                        {/* <Link href={link.url}>{link.text}</Link> */}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            <div id="legal-menu" className='space-y-4'>
                                <h5 className="title">{footer.title}</h5>
                                <ul className="text-sm space-y-2">
                                    {
                                        footer.links.map((link, index) => (
                                            <li key={index}>
                                                <Link href={link.url}>{link.text}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
