import Image from 'next/image'
import { Story } from '@/lib/data/stories'

interface StoryCardProps {
  story: Story
  featured?: boolean
}

export default function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <div className={`group cursor-pointer transition-all ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative h-96 md:h-full overflow-hidden rounded bg-primary border border-border">
        {/* Story Image */}
        <Image
          src={story.image}
          alt={story.travelerName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs text-accent mb-2 font-bold uppercase">{story.experience === 'experienced' ? `${story.rideCount} rides` : 'First Timer'}</p>
            <h3 className="text-2xl font-bold mb-2">{story.travelerName}</h3>
            <p className="text-sm mb-4 line-clamp-2">{story.quote}</p>
            <p className="text-xs text-gray-300">{story.location}, {story.homeCountry}</p>
          </div>

          {/* Bottom info always visible */}
          <div className="opacity-100">
            <p className="text-xs text-gray-400 font-mono">{story.tripTaken}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
