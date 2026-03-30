'use client'

import { Story } from '@/lib/data/stories'
import StoryCard from './StoryCard'
import { useState } from 'react'

interface StoryGridProps {
  stories: Story[]
  featuredFirst?: boolean
}

type FilterType = 'all' | 'ladakh-circuit' | 'zanskar-expedition' | 'kashmir-road-journey' | 'experienced' | 'first-time'

export default function StoryGrid({ stories, featuredFirst = true }: StoryGridProps) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredStories = stories.filter((story) => {
    if (filter === 'all') return true
    if (filter === 'experienced') return story.experience === 'experienced'
    if (filter === 'first-time') return story.experience === 'first-time'
    return story.tripSlug === filter
  })

  // Sort to put featured stories first if needed
  const sortedStories = featuredFirst
    ? [...filteredStories].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    : filteredStories

  const filters: { label: string; value: FilterType }[] = [
    { label: 'ALL STORIES', value: 'all' },
    { label: 'LADAKH CIRCUIT', value: 'ladakh-circuit' },
    { label: 'ZANSKAR EXPEDITION', value: 'zanskar-expedition' },
    { label: 'KASHMIR ROAD', value: 'kashmir-road-journey' },
    { label: 'EXPERIENCED RIDERS', value: 'experienced' },
    { label: 'FIRST TIME', value: 'first-time' },
  ]

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 text-sm font-bold rounded transition-all ${
              filter === f.value
                ? 'bg-accent text-accent-foreground'
                : 'bg-primary border border-border text-muted-foreground hover:border-accent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
        {sortedStories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            featured={story.featured}
          />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No stories found for this filter.</p>
        </div>
      )}
    </div>
  )
}
