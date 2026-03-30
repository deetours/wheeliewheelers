'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Trigger hover state on interactive elements
            if (
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button'
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="custom-cursor"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                width: isHovered ? 48 : 8,
                height: isHovered ? 48 : 8,
                backgroundColor: isHovered ? 'var(--color-foreground)' : 'var(--color-accent)',
            }}
            initial={{ width: 8, height: 8 }}
            transition={{ type: 'spring', ...springConfig }}
        />
    )
}
