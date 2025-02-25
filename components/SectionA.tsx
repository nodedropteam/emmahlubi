import React from 'react'
import { Button } from './ui/button'

export default function SectionA({ headline, subheadline, link, imageUrl, scrollSection }: any) {
    return (
        <section id={scrollSection} className="full full-width-split-screen min-h-[500px]">
            <div className="content space-y-4 grid content-center justify-items-start max-w-lg max-sm:py-12">
                <h2>{headline}</h2>
                <p>{subheadline}</p>
                <a href={link}>
                    <Button variant={`outline`}>Learn more</Button>
                </a>
            </div>
            <div className="img-box relative h-96 md:h-full">
                <img
                    src={imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
            </div>
        </section>
    )
}
