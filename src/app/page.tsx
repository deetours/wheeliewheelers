'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import { CinematicHero } from '@/components/core/CinematicHero'
import { TextFade } from '@/components/core/TextFade'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full bg-background selection:bg-accent selection:text-white">
      <Navbar />

      {/* BEAT 1 — THE OPENING SHOT */}
      <CinematicHero
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" /* Placeholder */
        headline="THE MOUNTAINS DO NOT CARE ABOUT YOU."
      />

      {/* The Silent Section (40vh gap with scroll indicator) */}
      <div className="w-full h-[40vh] bg-background relative flex items-center justify-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-pulse" />
      </div>

      {/* BEAT 2 — THE WOUND */}
      <section className="bg-background">
        <div className="container-tight text-left">
          <TextFade delay={0.2}>
            <p className="font-sans text-muted-foreground text-xl md:text-3xl leading-[1.8] max-w-2xl mb-12">
              Most Ladakh trips are sold by people who don't live here. They trap you in buses. They exhaust the locals. You get a brochure. They get a margin.
            </p>
          </TextFade>
        </div>
      </section>

      {/* BEAT 3 — THE REVELATION (Meet Gonbo) */}
      <section className="section-pad bg-[#111111]">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            {/* Visual: Portrait */}
            <div className="relative h-[80vh] w-full overflow-hidden border border-border/10">
              <Image
                src="/images/heroes/ladakh-hero.jpg" /* Placeholder */
                alt="Gonbo Dorjey staring into the lens"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
              />
            </div>

            {/* Context */}
            <div className="space-y-12">
              <TextFade delay={0.1}>
                <h2 className="font-display text-5xl md:text-7xl text-foreground uppercase tracking-tight">
                  THIS IS GONBO.
                </h2>
              </TextFade>

              <TextFade delay={0.3}>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-md">
                  He knows every stone on the Zanskar trail. Wheelie Wheelers isn't a tour company. It is his vision to share his absolute truth—the raw, unforgiving beauty of the high Himalayas.
                </p>
              </TextFade>

              <TextFade delay={0.5}>
                <blockquote className="font-quote text-2xl text-foreground/80 border-l border-accent pl-6 py-2 my-8">
                  "Adventure shouldn't be exported. It must be lived where it breathes."
                </blockquote>
              </TextFade>
            </div>
          </div>
        </div>
      </section>
      
      {/* BEAT 3.5 — THE CONVOY (The Protocol) */}
      <section className="bg-background border-t border-border/10 py-32 overflow-hidden">
        <div className="container-wide px-6 space-y-32 md:space-y-64">
          
          {/* 01 — THE MACHINES */}
          <div className="relative flex flex-col md:flex-row items-center justify-start min-h-[40vh] group">
            <div className="absolute -left-12 md:-left-24 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] text-foreground/[0.03] select-none pointer-events-none z-0">
              01
            </div>
            <div className="relative z-10 max-w-xl">
              <TextFade delay={0.1}>
                <div className="space-y-6">
                  <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">01 / ARSENAL</p>
                  <h3 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Precision Fleet</h3>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans max-w-md">
                    Every engine is stripped and rebuilt after each crossing. We do not rent. We own a meticulously maintained arsenal of high-altitude machines. When the air thins, precision is survival.
                  </p>
                </div>
              </TextFade>
            </div>
          </div>

          {/* 02 — THE PROTOCOL */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-start min-h-[40vh] group">
            <div className="absolute -right-12 md:-right-24 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] text-foreground/[0.03] select-none pointer-events-none z-0">
              02
            </div>
            <div className="relative z-10 max-w-xl">
              <TextFade delay={0.2}>
                <div className="space-y-6 text-left md:text-right">
                  <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">02 / MEDICAL COMMAND</p>
                  <h3 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Systemized Control</h3>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans max-w-md ml-auto">
                    Satellite comms. High-altitude oxygen kits. Dedicated backup 4x4s. We respect the risk; we engineer the response. The mountain is unpredictable; our convoy is not.
                  </p>
                </div>
              </TextFade>
            </div>
          </div>

          {/* 03 — THE EXPERTISE */}
          <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[40vh] group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[20rem] text-foreground/[0.03] select-none pointer-events-none z-0">
              03
            </div>
            <div className="relative z-10 text-center">
              <TextFade delay={0.3}>
                <div className="space-y-6">
                  <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">03 / NATIVE BLOOD</p>
                  <h3 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Native Wisdom</h3>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans max-w-2xl mx-auto">
                    Our guides didn't learn Ladakh from a map. They were born in its shadows. They know how to read the clouds, when to push the throttle, and when the mountain demands silence.
                  </p>
                </div>
              </TextFade>
            </div>
          </div>

        </div>
      </section>

      {/* BEAT 4 — THE INVENTORY (Bridge to Trips) */}
      <section className="section-pad bg-background border-t border-border/20">
        <div className="container-tight text-center">
          <TextFade>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              CHOOSE YOUR EXPEDITION.
            </h2>
            <Link
              href="/trips"
              className="magnetic-button border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              [ VIEW EXPEDITIONS ]
            </Link>
          </TextFade>
        </div>
      </section>

      {/* BEAT 5 — THE QUIET CLOSE */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-background border-t border-border/20 relative">
        <TextFade className="text-center">
          <p className="font-sans text-muted-foreground text-sm tracking-[0.3em] uppercase mb-12">
            The engine is warm.
          </p>
          <Link
            href="/contact"
            className="magnetic-button border-accent text-accent hover:bg-accent hover:text-background text-lg py-4 px-12"
          >
            [ IGNITE ]
          </Link>
        </TextFade>
      </section>

      {/* The Breath (30vh bottom padding added to Footer component directly) */}
      <Footer />
    </main>
  )
}
