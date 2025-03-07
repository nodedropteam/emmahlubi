import FadeLeft from "@/components/animations/fade-left";
import FadeIn from "@/components/animations/fadein";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from 'next/form';
import Image from "next/image";
import { ourValues, services } from "@/content";

export default function Home() {
    return (
        <>
            <section className="full full-width-split-screen min-h-screen">
                <div className="content grid content-center justify-items-start py-12 max-md:pt-[140px]">
                    <FadeIn>
                        <div className="stack space-y-4">
                            <h1 className="font-semibold">Your partners for finance and accounting solutions</h1>
                            <p>
                                Whether you're planning for growth, navigating compliance, or
                                managing financial complexities, we are here to support you
                                every step of the way.
                            </p>

                            <a href="#cta-form">
                                <Button>Meet an advisor</Button>
                            </a>
                        </div>
                    </FadeIn>
                </div>
                <FadeLeft className="img-box relative h-96 md:h-full bg-primary">
                    <Image
                        src="/media/4.jpg"
                        alt=""
                        fill
                        className="object-cover object-center opacity-90"
                    />
                </FadeLeft>
            </section>
            {
                services.map((item, index) => (
                    <section id={item.scrollSection} key={index} className="service-card min-h-[500px] flex py-20">
                        <div className={`stack flex flex-wrap w-full lg:max-w-[80%] mx-auto ${index / 2 === 0}`}>
                            <div className="content w-full md:w-[35%] grow">
                                <div className="stack space-y-4 grid justify-items-start max-w-sm py-12">
                                    <h2>{item.headline}</h2>
                                    <p>{item.description}</p>
                                    <a href={`/#contact`}>
                                        <Button variant={`outline`}>Learn more</Button>
                                    </a>
                                </div>
                            </div>
                            <div className="content w-full md:w-[35%] grow relative">
                                <div className='relative w-auto h-auto'>
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={350}
                                        height={350}
                                        className=""
                                    />
                                    {/* <div className="absolute top-4 left-4 grid gap-4 p-4 bg-white rounded-2xl shadow-lg">
                                        {item.insights.map((insight, i) => (
                                            <div key={i} className="bg-primary text-white p-4 rounded-xl shadow-md">
                                                {insight}
                                            </div>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }

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
                    <h1>Let us keep you compliant, while you focus on growth.</h1>
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
