'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextFadeProps {
    children: ReactNode
    className?: string
    delay?: number
}

// Default Enter Rule from Vibe Doc: 
// Fade-in and move up exactly `20px` over `1.2s` with an ease-out curve (`cubic-bezier(0.22, 1, 0.36, 1)`).

export function TextFade({ children, className = '', delay = 0 }: TextFadeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
