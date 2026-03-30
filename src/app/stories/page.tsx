'use client'

import Navbar from '@/components/wheelie/Navbar'
import Footer from '@/components/wheelie/Footer'
import { CinematicHero } from '@/components/core/CinematicHero'
import { TextFade } from '@/components/core/TextFade'
import { stories, getFeaturedStories } from '@/lib/data/stories'
import Image from 'next/image'

export default function StoriesPage() {
  const featuredStories = getFeaturedStories()
  // Just use the first one for the cinematic feature
  const displayedStory = featuredStories[0] || stories[0]

  return (
    <main className="w-full bg-background selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Scene - The Evidence */}
      <CinematicHero
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" /* Placeholder */
        headline="THE EVIDENCE."
      />

      {/* The Silent Section (30vh gap) */}
      <div className="w-full h-[30vh] bg-background" />

      {/* Featured Story Showcase (Intimate Journal) */}
      {displayedStory && (
        <section className="section-pad bg-background">
          <div className="container-wide px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

              {/* Left - Story Image (Massive, filmic) */}
              <div className="lg:col-span-7 relative h-[70vh] w-full overflow-hidden border border-border/10">
                <Image
                  src={displayedStory.journeyImage}
                  alt={displayedStory.travelerName}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                />
              </div>

              {/* Right - Story Content */}
              <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-12">
                <TextFade delay={0.1}>
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-tight mb-2">
                      {displayedStory.travelerName}
                    </h2>
                    <p className="font-sans text-muted-foreground text-xs uppercase tracking-[0.2em]">
                      {displayedStory.location}, {displayedStory.homeCountry} // {displayedStory.tripTaken}
                    </p>
                  </div>
                </TextFade>

                <TextFade delay={0.3}>
                  <p className="font-quote text-2xl md:text-4xl italic font-light text-foreground/90 leading-[1.4] text-pretty border-l border-accent/50 pl-6 py-2">
                    {displayedStory.quote}
                  </p>
                </TextFade>

                <TextFade delay={0.5}>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-md">
                    {displayedStory.fullStory}
                  </p>
                </TextFade>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Stories Grid Section */}
      <section className="section-pad bg-[#0a0a0a] border-t border-border/10">
        <div className="container-wide px-6">
          <TextFade>
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <h2 className="font-display text-5xl md:text-7xl text-foreground uppercase tracking-tight">
                ARCHIVE
              </h2>
              <p className="font-sans text-muted-foreground text-xs uppercase tracking-[0.2em] max-w-sm text-right">
                Filter out the noise. Read the journals of those who came back forever changed.
              </p>
            </div>
          </TextFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {stories.map((story, idx) => (
              <TextFade key={story.id} delay={0.1 * (idx % 3)}>
                <div className="group cursor-default">
                  <div className="relative h-96 w-full mb-8 overflow-hidden border border-border/10">
                    <Image
                      src={story.journeyImage}
                      alt={story.travelerName}
                      fill
                      className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-2">
                    {story.travelerName}
                  </h3>
                  <p className="font-sans text-accent text-xs uppercase tracking-[0.1em] mb-6">
                    {story.tripTaken}
                  </p>
                  <p className="font-quote text-xl italic text-muted-foreground/80 leading-relaxed max-w-sm">
                    "{story.quote}"
                  </p>
                </div>
              </TextFade>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
