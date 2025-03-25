import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface props {
    headline: string,
    subheadline: string,
    link: string,
    imageUrl: string,
    scrollSection: string
}

export default function SectionB({ headline, subheadline, link, imageUrl, scrollSection }: props) {
    return (
        <section id={scrollSection} className="min-h-[500px] flex py-20">
            <div className="stack flex flex-wrap w-full lg:max-w-[80%] mx-auto">
                <div className="content w-full md:w-[35%] grow">
                    <div className="stack space-y-4 grid justify-items-start max-w-sm py-12">
                        <h2>{headline}</h2>
                        <p>{subheadline}</p>
                        <a href={link}>
                            <Button variant={`outline`}>Learn more</Button>
                        </a>
                    </div>
                </div>
                <div className="content w-full md:w-[35%] grow">
                    <div className='relative w-auto h-auto'>
                        <div className="content absolute inset-0 flex items-center justify-center space-y-4">
                            <div className="div space-y-4">
                                <div className="card bg-white/80 text-foreground py-2.5 px-3 rounded-[3px] w-fit text-sm font-medium translate-x-1/2">
                                    Testing this card pill out
                                </div>
                                <div className="card bg-white/80 text-foreground py-2.5 px-3 rounded-[3px] w-fit text-sm font-medium translate-x-0">
                                    Testing this card pill out
                                </div>
                                <div className="card bg-white/80 text-foreground py-2.5 px-3 rounded-[3px] w-fit text-sm font-medium translate-x-3/4">
                                    Testing this card pill out
                                </div>
                            </div>
                        </div>
                        <Image
                            src={imageUrl}
                            alt=""
                            width={350}
                            height={350}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
