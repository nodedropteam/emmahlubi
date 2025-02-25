"use client";

import React from 'react'
import { Button } from './ui/button'
import useScrollThreshold from '@/hooks/use-scroll';
import { LuAlignRight } from "react-icons/lu";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const hasScrolledPast = useScrollThreshold(100);

    return (
        <header className={`full content-grid fixed top-0 w-full h-[120px] 2xl:h-[200px] items-center z-[99] transition-colors duration-150 ${hasScrolledPast ? "text-foreground bg-background" : "text-background bg-transparent"}`}>
            <div className="wrapper">
                <div className="content flex flex-wrap justify-between items-center">
                    <Link href="/" className="logo">
                        <Image src="/media/logo.png" alt="Emmahlubi Logo" width={200} height={40} />
                    </Link>
                    <nav className="nav flex items-center">
                        <ul className="hidden md:flex flex-wrap gap-6">
                            <li>
                                <a href="#advisory">
                                    <Button variant={`ghost`} size={`sm`}>Advisory</Button>
                                </a>
                            </li>
                            <li>
                                <a href="#about-us">
                                    <Button variant={`ghost`} size={`sm`}>About us</Button>
                                </a>
                            </li>
                            <li>
                                <a href="#contact-us">
                                    <Button variant={`ghost`} size={`sm`}>Contact us</Button>
                                </a>
                            </li>
                        </ul>
                        <Button size={`sm`} variant={`secondary`} className='block md:hidden'>
                            <LuAlignRight className='size-6' />
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
