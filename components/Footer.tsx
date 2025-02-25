import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

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
                                    className=""
                                    placeholder="email"
                                />
                                <Button type="submit" variant={`default`}>Submit</Button>
                            </div>
                        </form>
                    </div>
                    <div className="row grow flex flex-wrap gap-8">
                        <div className="wrapper w-[35%] md:w-[30%] grow">
                            <div id="services-menu" className='space-y-4'>
                                <h4 className="title">Services</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/#accounting"
                                        >Accounting & Bookkeeping</Link>
                                    </li>
                                    <li>
                                        <Link href="/#payroll">Payroll</Link>
                                    </li>
                                    <li>
                                        <Link href="/#tax-prep">Tax Preparation</Link>
                                    </li>
                                    <li>
                                        <Link href="/#finance-advice">Consultation</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper w-[35%] md:w-[30%] grow">
                            <div id="resources-menu" className='space-y-4'>
                                <h4 className="title">Resources</h4>
                                <ul className="space-y-2">
                                    <li>Reports</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper w-[35%] md:w-[30%] grow space-y-8">
                            <div id="company-menu" className='space-y-4'>
                                <h4 className="title">Company</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">Careers</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="/client-portal">Client Portal</Link>
                                    </li>
                                </ul>
                            </div>
                            <div id="legal-menu" className='space-y-4'>
                                <div className="title"></div>
                                <ul className="text-sm">
                                    <li>
                                        <Link href="/terms-and-conditions"
                                        >Terms and Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/security">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
