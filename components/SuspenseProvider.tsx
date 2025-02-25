'use client'
import React, { Suspense } from 'react'

export function SuspenseProvider({ children }: { children: React.ReactNode }) {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            {children}
        </Suspense>
    )
}