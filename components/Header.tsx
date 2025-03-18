"use client";

import React, { useState } from 'react'
import { Button } from './ui/button'
import useScrollThreshold from '@/hooks/use-scroll';
import { LuAlignRight } from "react-icons/lu";
import Image from 'next/image';
import Link from 'next/link';
import { mainMenu } from '@/config/menu';

export default function Header() {
    const hasScrolledPast = useScrollThreshold(100);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`full content-grid fixed top-0 w-full h-[120px] 2xl:h-[200px] items-center z-[99] transition-colors duration-150 ${hasScrolledPast ? "text-secondary-foreground bg-secondary" : "bg-transparent"}`}>
            <div className="wrapper">
                <div className="content flex flex-wrap justify-between items-center">
                    <Link href="/" className="logo block z-[100]">
                        <Image src="/media/logo.png" alt="Emmahlubi Logo" width={200} height={40} />
                    </Link>
                    <nav className="nav flex items-center">
                        <ul className="hidden md:flex flex-wrap gap-6">
                            {
                                mainMenu.links.map((link, index) =>
                                    <li key={index}>
                                        <Link href={link.url}>
                                            <Button
                                                variant={`ghost`}
                                                size={`sm`}>{link.text}</Button>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        {
                            isOpen && (
                                <div id='mobile-menu' className='mobile-menu fixed sm:hidden top-0 left-0 w-full h-full bg-background text-foreground pt-[100px]'>
                                    <ul className='w-full'>
                                        {
                                            mainMenu.links.map((link, index) =>
                                                <li key={index}>
                                                    <a href={link.url}>
                                                        <Button variant={`ghost`} size={`lg`} className='w-full'>{link.url}</Button>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>

                            )
                        }
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            size={`sm`}
                            variant={`secondary`}
                            className='block md:hidden z-[100]'>
                            <LuAlignRight className='size-6' />
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
