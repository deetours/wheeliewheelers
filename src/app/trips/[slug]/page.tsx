'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import { getTripBySlug, getAllTripSlugs } from '@/lib/data/trips'
import { getStoriesByTrip } from '@/lib/data/stories'
import { TextFade } from '@/components/core/TextFade'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown, Clock, MapPin, Gauge, ShieldCheck, Zap } from 'lucide-react'

interface TripDetailsPageProps {
  params: Promise<{ slug: string }>
}

export default function TripDetailsPage({ params }: TripDetailsPageProps) {
  const unwrapParams = React.use(params)
  const trip = getTripBySlug(unwrapParams.slug)
  const stories = getStoriesByTrip(unwrapParams.slug)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  if (!trip) {
    return (
      <main className="w-full">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-muted-foreground">Trip not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden pt-20">
        <Image
          src={trip.heroImage}
          alt={trip.title}
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-white text-6xl md:text-7xl font-display font-bold mb-4">
              {trip.title}
            </h1>
            <p className="text-gray-200 text-2xl font-light">
              {trip.heroTitle}
            </p>
          </div>
        </div>
      </div>

      {/* THE BRIEF (Stats) */}
      <section className="bg-background py-32 border-t border-border/10">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <TextFade delay={0.1}>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                  <Clock size={16} />
                  <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">TIMELINE</span>
                </div>
                <p className="text-3xl font-display uppercase">{trip.duration} DAYS</p>
              </div>
            </TextFade>
            <TextFade delay={0.2}>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                  <Gauge size={16} />
                  <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">INTENSITY</span>
                </div>
                <p className="text-3xl font-display uppercase">{trip.difficulty}</p>
              </div>
            </TextFade>
            <TextFade delay={0.3}>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                  <Zap size={16} />
                  <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">PRICING</span>
                </div>
                <p className="text-3xl font-display uppercase">₹{trip.price.min.toLocaleString()}</p>
              </div>
            </TextFade>
            <TextFade delay={0.4}>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-accent">
                  <MapPin size={16} />
                  <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">TERRAIN</span>
                </div>
                <p className="text-3xl font-display uppercase">HIMALAYAN</p>
              </div>
            </TextFade>
          </div>

          <div className="mt-32 max-w-4xl">
            <TextFade delay={0.5}>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-8 italic text-foreground/80">
                The Objective.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-sans">
                {trip.overview}
              </p>
            </TextFade>
          </div>
        </div>
      </section>

      {/* THE MACHINES (Arsenal) */}
      <section className="py-32 px-6 bg-primary border-t border-border/10">
        <div className="container-wide">
          <TextFade>
            <div className="mb-24">
              <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">01 / THE ARSENAL</p>
              <h2 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Your Machine.</h2>
            </div>
          </TextFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trip.bikes.map((bike, idx) => (
              <TextFade key={idx} delay={0.1 * idx}>
                <div className="group relative border border-border/10 p-12 bg-background overflow-hidden aspect-square flex flex-col justify-end">
                  <div className="absolute top-8 left-8 font-display text-6xl text-foreground/5 select-none uppercase">0{idx + 1}</div>
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-3xl font-display uppercase text-foreground group-hover:text-accent transition-colors">{bike.name}</h3>
                    <div className="space-y-3 text-[0.7rem] text-muted-foreground font-mono uppercase tracking-[0.2em] border-l border-accent/20 pl-6">
                      <p><span className="text-foreground/30 mr-4">TYPE</span> {bike.type}</p>
                      <p><span className="text-foreground/30 mr-4">HEART</span> {bike.engine}</p>
                      <p><span className="text-foreground/30 mr-4">DISP</span> {bike.cc}CC</p>
                    </div>
                  </div>
                </div>
              </TextFade>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNEY (Itinerary Reconstruction) */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="container-wide">
          <TextFade>
            <div className="mb-32">
              <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">02 / THE DESCENT</p>
              <h2 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Day by Day.</h2>
            </div>
          </TextFade>
          
          <div className="space-y-32 md:space-y-64 relative">
            {/* The Vertical Line Connecting Days */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/20 -translate-x-1/2 hidden md:block" />

            {trip.days.map((day, idx) => (
              <div key={day.day} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Watermark Number */}
                <div className={`absolute top-1/2 -translate-y-1/2 font-display text-[15rem] md:text-[25rem] text-foreground/[0.03] select-none pointer-events-none z-0 ${idx % 2 === 0 ? '-left-12 md:left-0' : '-right-12 md:right-0'}`}>
                  {String(day.day).padStart(2, '0')}
                </div>

                <div className={`relative z-10 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <TextFade delay={0.1}>
                    <div className="space-y-6">
                      <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="w-12 h-[1px] bg-accent" />
                        <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase">DAY {day.day}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-display text-foreground uppercase tracking-tight">{day.title}</h3>
                      <p className={`text-muted-foreground text-lg leading-relaxed font-sans max-w-lg ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        {day.description}
                      </p>
                      <div className={`flex items-center gap-3 text-foreground font-mono text-[0.6rem] tracking-widest uppercase ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <MapPin size={12} className="text-accent" />
                        <span>STAY: {day.highlight}</span>
                      </div>
                    </div>
                  </TextFade>
                </div>
                
                {/* Visual Anchor for the line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border border-accent rounded-full z-20 hidden md:block" />
                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARDIAN PROTOCOL (Trust Section) */}
      <section className="py-48 px-6 bg-primary border-t border-border/10">
        <div className="container-tight grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <TextFade>
            <div className="space-y-8">
              <p className="text-accent font-display text-sm tracking-[0.3em] uppercase">03 / THE GUARDIAN PROTOCOL</p>
              <h2 className="text-4xl md:text-6xl font-display text-foreground uppercase tracking-tighter">Your Shadow.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                You never ride alone. Our convoy includes a lead navigator, high-altitude medical kits, satellite comms, and a mechanical support vehicle chasing the group. We manage the risk so you can experience the reward.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <ShieldCheck className="text-accent" size={32} />
                  <p className="font-display uppercase text-sm tracking-widest leading-tight">Medical Command</p>
                </div>
                <div className="space-y-2">
                  <Zap className="text-accent" size={32} />
                  <p className="font-display uppercase text-sm tracking-widest leading-tight">Master Mechanics</p>
                </div>
              </div>
            </div>
          </TextFade>
          <div className="relative aspect-[4/5] bg-background border border-border/10 overflow-hidden">
            <Image
              src="/images/heroes/ladakh-hero.jpg" /* Placeholder for guardian photography */
              alt="Elite Support"
              fill
              className="object-cover grayscale opacity-50 contrast-[1.2]"
            />
          </div>
        </div>
      </section>



      {/* LOGISTICS UI (Inclusions/Exclusions) */}
      <section className="py-32 px-6 bg-background border-t border-border/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <TextFade>
              <div>
                <h2 className="text-4xl font-display uppercase tracking-tighter mb-12">The Inclusions.</h2>
                <ul className="space-y-6">
                  {trip.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-6 group">
                      <span className="w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all duration-500" />
                      <span className="text-muted-foreground font-sans text-sm tracking-widest uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TextFade>
            <TextFade delay={0.2}>
              <div>
                <h2 className="text-4xl font-display uppercase tracking-tighter mb-12 opacity-40">The Exclusions.</h2>
                <ul className="space-y-6">
                  {trip.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-6 group opacity-50">
                      <span className="w-8 h-[1px] bg-border group-hover:w-12 transition-all duration-500" />
                      <span className="text-muted-foreground font-sans text-sm tracking-widest uppercase line-through decoration-accent/30">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TextFade>
          </div>
        </div>
      </section>

      {/* FAQ (Protocol Briefing) */}
      <section className="py-32 px-6 bg-primary border-t border-border/10">
        <div className="container-tight">
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-16 text-center">Protocol Briefing.</h2>
          <div className="space-y-4">
            {trip.faq.map((item, idx) => (
              <div key={idx} className="border-b border-border/10">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 group"
                >
                  <p className={`text-xl md:text-2xl font-display uppercase transition-colors ${expandedFAQ === idx ? 'text-accent' : 'text-foreground group-hover:text-accent/70'}`}>
                    {item.question}
                  </p>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform duration-500 ${expandedFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedFAQ === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-muted-foreground text-lg leading-relaxed font-sans pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (The Terminal Application) */}
      <section className="py-48 px-4 bg-background border-t border-border/10 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10 font-display text-[20vw] leading-none select-none pointer-events-none text-foreground flex items-center justify-center">
          {trip.slug.split('-')[0].toUpperCase()}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <TextFade>
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-12">
              INITIATE YOUR<br />EXPEDITION.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-sans italic">
              Limited slots. Absolute commitment required. No payment required today.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link
                href={`/contact?trip=${trip.slug}`}
                className="magnetic-button text-2xl"
              >
                [ APPLY FOR BRIEFING ]
              </Link>
              <p className="text-xs text-muted-foreground/50 font-mono tracking-[0.2em] uppercase">
                Dispatch will verify eligibility within 24 hours
              </p>
            </div>
          </TextFade>
        </div>
      </section>

      <Footer />
    </main>
  )
}
