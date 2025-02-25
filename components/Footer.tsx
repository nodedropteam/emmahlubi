import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

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
                                        <a href="/#accounting"
                                        >Accounting & Bookkeeping</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/#payroll">Payroll</a>
                                    </li>
                                    <li>
                                        <a href="/#tax-prep">Tax Preparation</a>
                                    </li>
                                    <li>
                                        <a href="/#finance-advice">Consultation</a>
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
                                        <a href="/">Home</a>
                                    </li>

                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/careers">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/client-portal">Client Portal</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="legal-menu" className='space-y-4'>
                                <div className="title"></div>
                                <ul className="text-sm">
                                    <li>
                                        <a href="/terms-and-conditions"
                                        >Terms and Conditions</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/security">Security</a>
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
