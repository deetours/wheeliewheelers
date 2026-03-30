'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TripHorizontalCarouselProps {
    children: React.ReactNode
}

export function TripHorizontalCarousel({ children }: TripHorizontalCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!containerRef.current || !trackRef.current) return

        // We get the total width of the track minus the viewport width to know how far to scroll
        const updateScrollWidth = () => {
            const trackWidth = trackRef.current ? trackRef.current.scrollWidth : 0
            const amountToScroll = trackWidth - window.innerWidth

            return amountToScroll
        }

        const ctx = gsap.context(() => {
            // Create the pinning logic for horizontal scrolling
            gsap.to(trackRef.current, {
                x: () => -updateScrollWidth(),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                    end: () => `+=${updateScrollWidth()}`, // The scroll duration matches the width
                    invalidateOnRefresh: true, // Recalculates on resize
                }
            })
        }, containerRef)

        return () => ctx.revert() // Cleanup on unmount
    }, [])

    return (
        <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-background void-gap">
            <div
                ref={trackRef}
                className="flex h-full w-[max-content] gap-16 px-[10vw] items-center"
            >
                {children}
            </div>
        </section>
    )
}
