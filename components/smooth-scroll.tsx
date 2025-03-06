"use client"
import React from 'react'
import { ReactLenis, useLenis } from "lenis/react"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const lenis = useLenis(({ scroll }) => {
        // lenis instance
    })
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}