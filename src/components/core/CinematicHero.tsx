'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CinematicHeroProps {
    videoSrc: string
    headline: ReactNode
    className?: string
}

export function CinematicHero({ videoSrc, headline, className = '' }: CinematicHeroProps) {
    return (
        <section className={`relative h-screen w-full overflow-hidden bg-background ${className}`}>
            {/* Background Video (Plays immediately) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background/40 z-10" /> {/* Dark overlay for raw contrast */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full scale-105"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full w-full flex items-center justify-center text-center px-6">
                {/* 
          VIBE RULE: The headline text fades in strictly via opacity over 3 seconds. 
          Uncomfortably slow. 
        */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: 'easeOut', delay: 0.5 }}
                    className="container-wide"
                >
                    <h1 className="font-display text-[15vw] md:text-[8rem] leading-[0.85] tracking-tighter text-foreground uppercase whitespace-pre-wrap">
                        {headline}
                    </h1>
                </motion.div>
            </div>

            {/* 
        Scroll Indicator Hairline
        A single vertical hairline on the right edge that fills with white
      */}
            <div className="absolute bottom-12 right-12 z-30 hidden md:block w-[1px] h-24 bg-border overflow-hidden">
                <motion.div
                    className="w-full bg-foreground"
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 2, delay: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                />
            </div>
        </section>
    )
}
