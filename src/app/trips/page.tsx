'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import { CinematicHero } from '@/components/core/CinematicHero'
import { TripHorizontalCarousel } from '@/components/sections/TripHorizontalCarousel'
import { TextFade } from '@/components/core/TextFade'
import { trips } from '@/lib/data/trips'
import Link from 'next/link'
import Image from 'next/image'

export default function TripsPage() {
  const heroTrips = trips.slice(0, 3)
  const additionalTrips = trips.slice(3)

  return (
    <main className="w-full bg-background selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Scene - The Choice */}
      <CinematicHero
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" /* Placeholder */
        headline="CHOOSE YOUR EXPEDITION."
      />

      {/* The Horizontal Journey (Hero 3) */}
      <TripHorizontalCarousel>
        {heroTrips.map((trip, idx) => (
          <div
            key={trip.id}
            className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 relative group border border-border/20 overflow-hidden"
          >
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-700 z-10" />
              <Image
                src={trip.heroImage}
                alt={trip.title}
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Brutalist Content Overlay */}
            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
              <TextFade delay={0.2 * idx}>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-display text-5xl md:text-7xl text-foreground uppercase tracking-tight mb-2">
                      {trip.title}
                    </h2>
                    <p className="font-sans text-muted-foreground text-sm tracking-[0.2em] uppercase">
                      {trip.difficulty} // {trip.duration} DAYS
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-foreground text-2xl font-light">
                      ₹{trip.price.min.toLocaleString()}
                    </p>
                    <p className="font-sans text-muted-foreground text-xs tracking-[0.2em] uppercase">
                      Starting Baseline
                    </p>
                  </div>
                </div>
              </TextFade>

              <TextFade delay={(0.2 * idx) + 0.3} className="max-w-md">
                <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                  {trip.description}
                </p>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="magnetic-button"
                >
                  [ EXAMINE ROUTE ]
                </Link>
              </TextFade>
            </div>
          </div>
        ))}
        {/* End Spacer for GSAP feeling */}
        <div className="w-[10vw] shrink-0" />
      </TripHorizontalCarousel>

      {/* The Additional Range (Quieter Archive) */}
      {additionalTrips.length > 0 && (
        <section className="bg-background pt-32 pb-64">
          <div className="container-wide px-6">
            <TextFade>
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
                <div className="space-y-4">
                  <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">THE CATALOG</p>
                  <h2 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter max-w-xl">
                    Additional Archives.
                  </h2>
                </div>
                <p className="text-muted-foreground font-sans max-w-sm mb-2">
                  Deeper routes, shorter shakeouts, and the forbidden kingdoms of the high plateau.
                </p>
              </div>
            </TextFade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {additionalTrips.map((trip, idx) => (
                <TextFade key={trip.id} delay={0.1 * idx}>
                  <Link href={`/trips/${trip.slug}`} className="group block space-y-8">
                    <div className="relative aspect-[16/9] overflow-hidden border border-border/10">
                      <Image
                        src={trip.heroImage}
                        alt={trip.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="flex justify-between items-start pt-4 border-t border-border/10">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-display text-foreground uppercase group-hover:text-accent transition-colors">
                          {trip.title}
                        </h3>
                        <p className="text-muted-foreground text-xs font-sans tracking-[0.2em] uppercase">
                          {trip.difficulty} // {trip.duration} DAYS
                        </p>
                      </div>
                      <span className="font-display text-xl text-foreground/50 group-hover:text-foreground transition-colors mt-2">
                        [ VIEW ]
                      </span>
                    </div>
                  </Link>
                </TextFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Resolution */}
      <section className="section-pad bg-background border-t border-border/20">
        <div className="container-tight text-center">
          <TextFade>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              NOT SURE WHICH ROAD?
            </h2>
            <p className="font-sans text-muted-foreground text-lg mb-12">
              Tell us what you ride and what you are running from. We will route you.
            </p>
            <Link
              href="/contact"
              className="magnetic-button border-accent text-accent hover:bg-accent hover:text-background"
            >
              [ CONNECT ]
            </Link>
          </TextFade>
        </div>
      </section>

      <Footer />
    </main>
  )
}
