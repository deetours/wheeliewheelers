export interface Story {
  id: string
  travelerName: string
  location: string
  homeCountry: string
  tripTaken: string
  quote: string
  fullStory: string
  image: string
  journeyImage: string
  experience: 'first-time' | 'experienced'
  tripSlug: string
  featured: boolean
  date: string
  rideCount?: number
}

export const stories: Story[] = [
  {
    id: '1',
    travelerName: 'Alex Chen',
    location: 'Singapore',
    homeCountry: 'Singapore',
    tripTaken: 'Ladakh Circuit',
    quote: 'I didn\'t come for a bike ride. I came home.',
    fullStory: 'Alex, a corporate professional from Singapore, stepped off his bike at Pangong Tso with tears in his eyes. "I didn\'t think 7 days could change everything," he said. The Ladakh Circuit did more than test his riding skills—it rewired his soul. From the chaos of the city to the silence of 5000m passes, every kilometer stripped away layers of unnecessary complexity. He returned not just with photos, but with clarity.',
    image: '/images/stories/alex-profile.jpg',
    journeyImage: '/images/stories/alex-journey.jpg',
    experience: 'first-time',
    tripSlug: 'ladakh-circuit',
    featured: true,
    date: '2024-06-15',
  },
  {
    id: '2',
    travelerName: 'Priya Sharma',
    location: 'Delhi, India',
    homeCountry: 'India',
    tripTaken: 'Kashmir Road Journey',
    quote: 'The mountains don\'t test your bike. They test your spirit.',
    fullStory: 'Priya rode alone across Kashmir, defying expectations. A solo female rider on a Royal Enfield, she pushed past self-doubt on every climb. The guides from Wheelie Wheelers weren\'t just navigation—they were believers in her journey. By day 5, she wasn\'t just riding; she was flying. Her story isn\'t about conquering mountains. It\'s about conquering the voice that said she couldn\'t.',
    image: '/images/stories/priya-profile.jpg',
    journeyImage: '/images/stories/priya-journey.jpg',
    experience: 'experienced',
    tripSlug: 'kashmir-road-journey',
    featured: true,
    date: '2024-07-20',
    rideCount: 12,
  },
  {
    id: '3',
    travelerName: 'Marcus Thompson',
    location: 'USA',
    homeCountry: 'United States',
    tripTaken: 'Zanskar Expedition',
    quote: 'Tanglang La broke me and remade me.',
    fullStory: 'Marcus arrived from Colorado thinking 5000m was just numbers. At Tanglang La, those numbers became reality. Gasping for air at 5328m, he discovered something the gym couldn\'t teach: resilience. Gonbo, his guide, sat with him for 20 minutes without speaking. Sometimes wisdom is silence. By day 8, Marcus understood why men ride these mountains. Not to conquer them. To understand themselves.',
    image: '/images/stories/marcus-profile.jpg',
    journeyImage: '/images/stories/marcus-journey.jpg',
    experience: 'experienced',
    tripSlug: 'zanskar-expedition',
    featured: true,
    date: '2024-08-10',
    rideCount: 25,
  },
  {
    id: '4',
    travelerName: 'Maya Kapoor',
    location: 'Mumbai, India',
    homeCountry: 'India',
    tripTaken: 'Ladakh Circuit',
    quote: 'Home is where the passes are.',
    fullStory: 'A lawyer from Mumbai, Maya traded boardrooms for Khardung La. What started as an escape became a calling. She came back changed, literally selling her apartment to fund another expedition next year. Not all stories have fairytale endings—some have horizons.',
    image: '/images/stories/maya-profile.jpg',
    journeyImage: '/images/stories/maya-journey.jpg',
    experience: 'first-time',
    tripSlug: 'ladakh-circuit',
    featured: false,
    date: '2024-06-30',
  },
  {
    id: '5',
    travelerName: 'Oliver Hans',
    location: 'Germany',
    homeCountry: 'Germany',
    tripTaken: 'Kashmir Road Journey',
    quote: 'The road teaches what books never can.',
    fullStory: 'Oliver rode 80 motorcycles across 40 countries before Ladakh. He says none of them compared to a week on a Royal Enfield in Kashmir. Why? Because it wasn\'t about the bike. It was about the guides who shared stories, the villages that welcomed him, and the mountains that humbled him.',
    image: '/images/stories/oliver-profile.jpg',
    journeyImage: '/images/stories/oliver-journey.jpg',
    experience: 'experienced',
    tripSlug: 'kashmir-road-journey',
    featured: false,
    date: '2024-07-05',
    rideCount: 40,
  },
  {
    id: '6',
    travelerName: 'Sofia Moretti',
    location: 'Italy',
    homeCountry: 'Italy',
    tripTaken: 'Zanskar Expedition',
    quote: 'I went to find the world. I found myself instead.',
    fullStory: 'Sofia came to Ladakh searching for adventure. She found purpose. At 23, she was the youngest in the group. By the final night, she was the strongest. Not physically—spiritually. The mountains don\'t discriminate by age. They judge by determination. Sofia passed the test.',
    image: '/images/stories/sofia-profile.jpg',
    journeyImage: '/images/stories/sofia-journey.jpg',
    experience: 'first-time',
    tripSlug: 'zanskar-expedition',
    featured: false,
    date: '2024-08-25',
  },
]

export function getStoriesByTrip(tripSlug: string): Story[] {
  return stories.filter((story) => story.tripSlug === tripSlug)
}

export function getFeaturedStories(): Story[] {
  return stories.filter((story) => story.featured)
}

export function getStoryById(id: string): Story | undefined {
  return stories.find((story) => story.id === id)
}

export function getExperiencedRiders(): Story[] {
  return stories.filter((story) => story.experience === 'experienced').sort((a, b) => (b.rideCount || 0) - (a.rideCount || 0))
}
