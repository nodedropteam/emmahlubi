import React from 'react'
import * as motion from "motion/react-client"

export default function FadeIn({ children, delay = 0, whileInView = false }:
    { children: React.ReactNode, delay?: number, whileInView?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={whileInView ? {} : { opacity: 1, scale: 1 }}
            whileInView={whileInView ? { opacity: 1, scale: 1 } : {}}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: delay,
                // scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >{children}</motion.div>
    )
}