'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import { CinematicHero } from '@/components/core/CinematicHero'
import { TextFade } from '@/components/core/TextFade'
import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

function ContactForm() {
  const searchParams = useSearchParams()
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  useEffect(() => {
    const trip = searchParams.get('trip')
    if (trip) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in the ${trip.replace(/-/g, ' ').toUpperCase()} expedition. Please provide details on availability.`
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  if (status === 'success') {
    return (
      <section className="section-pad bg-background border-t border-border/10 min-h-[60vh] flex items-center justify-center">
        <TextFade>
          <div className="text-center space-y-8">
            <div className="font-display text-5xl md:text-7xl text-accent uppercase tracking-tighter">
              YOUR FREQUENCY IS LOGGED.
            </div>
            <p className="font-sans text-muted-foreground text-lg md:text-xl tracking-widest uppercase opacity-70">
              DISPATCH WILL DROP A DOSSIER WITHIN 24 HOURS.
            </p>
          </div>
        </TextFade>
      </section>
    )
  }

  return (
    <section className="section-pad bg-background border-t border-border/10">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* Left - Context & Trust Anchor */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[80vh] w-full bg-[#0a0a0a]">
              <Image
                src="/images/heroes/ladakh-hero.jpg" /* Trust Anchor: Grayscale image of dispatch/guides */
                alt="Wheelie Wheelers Dispatch"
                fill
                className="object-cover grayscale opacity-30 group-hover:opacity-40 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
              
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <TextFade delay={0.1}>
                  <h2 className="font-display text-4xl text-foreground uppercase tracking-tight mb-8">
                    BEGIN THE DESCENT.
                  </h2>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-sm mb-12">
                    Every expedition requires vetting. Tell us your intent, and our dispatch will outline your route.
                  </p>
                  
                  <div className="space-y-6 font-sans text-muted-foreground text-xs uppercase tracking-[0.2em] border-l border-accent/30 pl-6">
                    <div>
                      <p className="text-foreground/30 mb-1 font-mono">COORDINATES</p>
                      <p className="text-foreground">LEH, LADAKH [ 34.1526° N ]</p>
                    </div>
                    <div>
                      <p className="text-foreground/30 mb-1 font-mono">COMMS</p>
                      <a href="mailto:dispatch@wheeliewheelers.com" className="text-foreground hover:text-accent transition-colors block">
                        DISPATCH@WHEELIEWHEELERS.COM
                      </a>
                    </div>
                  </div>
                </TextFade>
              </div>
            </div>
          </div>

          {/* Right - Form (The Terminal) */}
          <div className="space-y-12 py-12">
            <TextFade delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="space-y-12">
                  
                  {/* Field 01 */}
                  <div 
                    className={`space-y-4 transition-all duration-500 ${focusedField && focusedField !== 'name' ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}
                  >
                    <label className="font-mono text-[0.6rem] text-accent tracking-[0.4em] uppercase">01 // CALLSIGN</label>
                    <div className="relative border-b border-border/40 focus-within:border-accent transition-colors">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        required
                        className="w-full bg-transparent border-none py-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-foreground/10 focus:outline-none focus:ring-0 peer"
                        placeholder="IDENTIFICATION"
                      />
                    </div>
                  </div>

                  {/* Field 02 */}
                  <div 
                    className={`space-y-4 transition-all duration-500 ${focusedField && focusedField !== 'email' ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}
                  >
                    <label className="font-mono text-[0.6rem] text-accent tracking-[0.4em] uppercase">02 // FREQUENCY</label>
                    <div className="relative border-b border-border/40 focus-within:border-accent transition-colors">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        required
                        className="w-full bg-transparent border-none py-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-foreground/10 focus:outline-none focus:ring-0 peer"
                        placeholder="COMMUNICATION"
                      />
                    </div>
                  </div>

                  {/* Field 03 */}
                  <div 
                    className={`space-y-4 transition-all duration-500 ${focusedField && focusedField !== 'message' ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}
                  >
                    <label className="font-mono text-[0.6rem] text-accent tracking-[0.4em] uppercase">03 // THE BRIEF</label>
                    <div className="relative border-b border-border/40 focus-within:border-accent transition-colors">
                      <textarea
                        id="message"
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                        required
                        rows={5}
                        className="w-full bg-transparent border-none py-4 text-2xl font-display uppercase tracking-widest text-foreground placeholder:text-foreground/10 focus:outline-none focus:ring-0 peer resize-none"
                        placeholder="YOUR INTENT / YOUR ROUTE"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-8">
                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className="group"
                  >
                    <div className="relative flex flex-col items-end gap-2 text-foreground hover:text-accent transition-colors disabled:opacity-50">
                      <div className="flex items-center gap-6">
                        <span className="font-display text-3xl md:text-4xl uppercase tracking-tighter">
                          {status === 'loading' ? 'TRANSMITTING...' : '[ INITIATE TRANSMISSION ]'}
                        </span>
                        {status === 'idle' && (
                          <div className="w-12 h-[1px] bg-accent group-hover:w-16 transition-all duration-500" />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              </form>
            </TextFade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="w-full bg-background selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Scene - The Door */}
      <CinematicHero
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" /* Placeholder */
        headline="IGNITE."
      />

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <Footer />
    </main>
  )
}

