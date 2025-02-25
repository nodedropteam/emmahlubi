import SectionA from "@/components/SectionA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from 'next/form';
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="full full-width-split-screen min-h-screen">
                <div className="content space-y-4 grid content-center justify-items-start py-12 max-md:pt-[100px]">
                    <h1>Your partners for finance and accounting solutions</h1>
                    <p>
                        Whether you're planning for growth, navigating compliance, or
                        managing financial complexities, we are here to support you
                        every step of the way.
                    </p>

                    <a href="#cta-form">
                        <Button>Meet an advisor</Button>
                    </a>
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
            <SectionA
                headline="Accounting and Bookkeping"
                subheadline="Accurate and timely financial management to keep your business operations smooth and compliant."
                imageUrl="/media/5.jpg"
                scrollSection="accounting"
                link="/#cta-form"
            />

            <SectionA
                headline="Payroll solutions"
                subheadline="Reliable payroll services that ensure your employees are paid on time, every time."
                imageUrl="/media/6.jpg"
                scrollSection="payroll"
                link="/#cta-form"
            />
            <SectionA
                headline="Tax prep and compliance"
                subheadline="Expert guidance to navigate tax regulations, optimize deductions, and remain compliant."
                imageUrl="/media/2.jpg"
                scrollSection="tax"
                link="/#cta-form"
            />
            <SectionA
                headline="Financial advisory for SMEs"
                subheadline="Strategic insihts to drive growth, profitability and financial stability."
                imageUrl="/media/3.jpg"
                scrollSection="advisory"
                link="/#cta-form"
            />

            <section className="py-28">
                <div className="inner space-y-12">
                    <div className="content max-w-[400px] space-y-2">
                        <h2>Empowering your success.</h2>
                        <p>
                            We help SMMEs overcome unique challenges with tailored
                            solutions for growth, profitability, and long-term security.
                        </p>
                    </div>
                    <div className="content flex flex-wrap gap-8">
                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Excellence & Accuracy</h4>
                            <p>
                                We deliver precise, high-quality results that you can
                                rely on.
                            </p>
                        </div>

                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Collboration & Accountability</h4>
                            <p>
                                We work hand-in-hand with clients to achieve shared
                                goals.
                            </p>
                        </div>

                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Integrity & Transparency</h4>
                            <p>
                                We operate with honesty and clarity in all that we do.
                            </p>
                        </div>

                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Trusted Advisors</h4>
                            <p>
                                We believe your accountant should be your most trusted
                                advisor. We take pride in offering personalized support
                                tailored to your business goals.
                            </p>
                        </div>

                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Client-Centric Approach</h4>
                            <p>
                                Your vision matters to us. We invite you to sit with us,
                                have a coffee, and plan your future while we handle your
                                financial needs.
                            </p>
                        </div>

                        <div className="card sm:pr-[10%] w-full sm:w-[35%] lg:w-1/4 grow">
                            <h4>Commitment to Excellence</h4>
                            <p>
                                Our team upholds the highest standards of accuracy,
                                transparency, and accountability to help your business
                                thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta-form" className="feature py-28">
                <div className="relative h-[400px] lg:h-[600px] w-full">
                    <Image
                        src="/media/9.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="content text-center max-w-[768px] mx-auto space-y-4">
                    <h1>Have us secure your future, while you grow.</h1>
                    <p>Leave us your email and we’ll contact you about our services.</p>
                    <Form action="/thank-you">
                        <div
                            className="stack flex gap-1 sm:justify-center flex-wrap sm:flex-nowrap max-w-lg mx-auto"
                        >
                            <Input type="text" name="email" placeholder="jdoe@email.com" />
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}