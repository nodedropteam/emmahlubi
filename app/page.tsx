import FadeIn from "@/components/animations/fadein";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from 'next/form';
import Image from "next/image";
import { ourValues, services } from "@/content";
import PatternBackground from "@/components/pattern-background";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="full px-4 relative">
                <PatternBackground />
                <div className="relative inner min-h-screen grid place-content-center z-[99]">
                    <FadeIn>
                        <div className="stack space-y-4 text-center w-full mx-auto container">
                            <h1 className="font-semibold text-10xl">Your partners for finance and accounting solutions</h1>
                            <p className="text-xl max-w-[60ch] mx-auto">
                                Whether you're planning for growth, navigating compliance, or
                                managing financial complexities, we are here to support you
                                every step of the way.
                            </p>

                            <div className="cta-row">
                                <Link href="/#contact-us" className="block">
                                    <Button>Meet an advisor today</Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <div id="our-services" aria-hidden className="div"></div>
            {
                services.map((item, index) => (
                    <section id={item.scrollSection} key={index} className="service-card min-h-[500px] flex py-20">
                        <div className={`stack flex flex-wrap w-full lg:max-w-[80%] mx-auto ${index / 2 === 0}`}>
                            <div className="content w-full md:w-[35%] grow">
                                <div className="stack space-y-4 grid justify-items-start max-w-sm py-12">
                                    <h2>{item.headline}</h2>
                                    <p>{item.description}</p>
                                    <Link href={`/#contact-us`}>
                                        <Button variant={`outline`}>Learn more</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="content w-full md:w-[35%] grow relative flex">
                                <div className='relative w-auto h-auto'>
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={350}
                                        height={350}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }

            <section id="our-values" className="py-28">
                <div className="inner space-y-12">
                    <div className="content max-w-[400px] space-y-2">
                        <h2>Empowering your success.</h2>
                        <p>
                            We help SMMEs overcome unique challenges with tailored
                            solutions for growth, profitability, and long-term security.
                        </p>
                    </div>
                    <div className="content flex flex-wrap gap-8">
                        {
                            ourValues.map((item, index) => (
                                <div key={index} className="card w-full sm:w-[35%] lg:w-1/4 grow">
                                    <div className="content max-w-sm">
                                        <h4 className="mb-2">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section id="contact-us" className="feature py-28">
                <div className="relative h-[400px] lg:h-[600px] w-full">
                    <Image
                        className="object-cover"
                        src="/media/9.jpg"
                        alt=""
                        fill />
                </div>
                <div className="content text-center max-w-[768px] mx-auto space-y-4">
                    <h2>Let us keep you compliant, while you focus on growth.</h2>
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
