'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import HeroSection from '@/components/wheelie/HeroSection'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <HeroSection
        title="ADVENTURE SHOULDN'T BE EXPORTED"
        subtitle="It should be lived."
        image="/images/heroes/ladakh-hero.jpg"
      />

      {/* Manifesto */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-pretty">Our Manifesto</h2>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              We believe adventure is sacred. Not something to be packaged, marketed, and delivered like a commodity. Adventure is a conversation between you, the mountains, and the people who call them home.
            </p>
            <p className="text-pretty">
              Most travel companies view Ladakh as a product. We view it as a community. When you ride with us, every rupee directly supports the families who've lived here for generations. Not shareholders in Mumbai. Not corporate offices in Delhi. Real people. Real families.
            </p>
            <p className="text-pretty">
              We ride without ego. Our guides aren't tour operators—they're Ladakhis sharing their home. Our bikes aren't luxury rentals—they're proven machines built for these mountains. Our food isn't fusion cuisine—it's what locals eat.
            </p>
            <p className="text-pretty">
              This isn't a company. It's a belief system. And we're inviting you to join it.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-primary border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 text-pretty">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Gonbo Dorjey was born in Leh, Ladakh. His family has lived in these mountains for generations. He's a mechanic, a storyteller, and a dreamer.
                </p>
                <p className="text-pretty">
                  In 2018, Gonbo watched tour companies extract wealth from Ladakh while locals received scraps. He saw guides rushing through sacred monasteries to meet quotas. He saw ancient routes commodified and souls left behind.
                </p>
                <p className="text-pretty">
                  He decided to do it differently. Wheelie Wheelers was born not as a business, but as a rebellion against mediocrity.
                </p>
                <p className="text-pretty">
                  Today, every trip funds local education, supports the community, and preserves the raw authenticity that makes Ladakh sacred.
                </p>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden card-elevated">
              <Image
                src="/images/heroes/ladakh-hero.jpg"
                alt="Gonbo Dorjey"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-max">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-pretty">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Founder & Head Guide',
                name: 'Gonbo Dorjey',
                bio: 'Ladakh native. Mechanic. Dreamer. 25+ years mountain experience.',
              },
              {
                role: 'Chief Mechanic',
                name: 'Tenzin Namgyal',
                bio: 'Keeps our bikes alive. From carburetors to clutches, nothing escapes his expertise.',
              },
              {
                role: 'Senior Guide',
                name: 'Dorje Tsering',
                bio: 'Zanskar valley explorer. Knows every hidden route and sacred story.',
              },
            ].map((member, idx) => (
              <div key={idx} className="card-subtle p-8 hover-glow">
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-3">{member.role}</p>
                <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary border-t border-border">
        <div className="container-max">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-pretty">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">No filters. No pretense. Just real Ladakh, real guides, real stories.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">Every bike is maintained perfectly. Every promise is kept. No shortcuts.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Community</h3>
              <p className="text-muted-foreground leading-relaxed">We're not extracting from Ladakh. We're investing in it.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">Safety first. Comfort second. Adventure always.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
