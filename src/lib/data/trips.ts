export interface DayItinerary {
  day: number
  title: string
  description: string
  distance?: string
  highlight: string
  image?: string
}

export interface Bike {
  name: string
  engine: string
  cc: number
  type: string
}

export interface Guide {
  name: string
  role: string
  experience: string
  bio: string
  image?: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Trip {
  id: string
  slug: string
  title: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  price: { min: number; max: number }
  heroImage: string
  heroTitle: string
  overview: string
  days: DayItinerary[]
  bikes: Bike[]
  gallery: GalleryImage[]
  faq: FAQ[]
  guides: Guide[]
  inclusions: string[]
  exclusions: string[]
}

export const trips: Trip[] = [
  {
    id: '1',
    slug: 'ladakh-circuit',
    title: 'LADAKH CIRCUIT',
    description: 'The complete Ladakh experience through legendary passes and remote monasteries.',
    duration: 7,
    difficulty: 'intermediate',
    price: { min: 45000, max: 65000 },
    heroImage: '/images/heroes/ladakh-hero.jpg',
    heroTitle: 'THE MOUNTAINS ARE NOT A DESTINATION. THEY ARE A HOME.',
    overview: 'Experience the raw beauty of Ladakh across 7 days of pure mountain riding. From Leh to the highest motorable passes, this journey covers over 1200 km through terrain that defines adventure.',
    days: [
      {
        day: 1,
        title: 'The Welcome Ritual',
        description: 'Traditional khataks at the airport, proper rest, and an evening visit to a local monastery. Your bike arrives by evening.',
        highlight: 'Skiltang Heritage Stay, Phyang',
      },
      {
        day: 2,
        title: 'The Local Shakeout',
        description: 'Local sightseeing on bike: Hall of Fame, Pathar Sahib Gurudwara, Magnetic Hill, Sangam, and Alchi—the oldest monastery in Ladakh.',
        highlight: 'Skiltang Heritage Stay, Phyang',
      },
      {
        day: 3,
        title: 'The High Pass (Khardung La)',
        description: 'Ride toward Nubra Valley via Khardung La. Visit Diskit Monastery and explore the Hunder sand dunes by evening.',
        highlight: 'Riverside Resort, Hunder',
      },
      {
        day: 4,
        title: 'The Blue Desert (Pangong)',
        description: 'Head toward Pangong Lake via Shayok Valley. A journey through stark, beautiful isolation.',
        highlight: 'Merak Rangjon Resort',
      },
      {
        day: 5,
        title: 'The War Memorial (Hanle)',
        description: 'Ride toward Hanle via Loma Bridge, with a stop at the Rezang La War Memorial. A day of respect and beauty.',
        highlight: 'Sangrak Resort, Hanle',
      },
      {
        day: 6,
        title: 'The World\'s Roof (Umling La)',
        description: 'Visit Umling La, the highest motorable road in the world, then return to Hanle for rest.',
        highlight: 'Sangrak Resort, Hanle',
      },
      {
        day: 7,
        title: 'The Chumur Route (Tso Moriri)',
        description: 'Ride to Tso Moriri Lake (Korzok) via the remote Chumur route. High-altitude serenity.',
        highlight: 'Lake View Hotel',
      },
      {
        day: 8,
        title: 'The Valley of Steam (Puga)',
        description: 'Head back to Leh, visiting Puga Valley and Chumathang hot springs on the way.',
        highlight: 'Hotel Yak Tail',
      },
      {
        day: 9,
        title: 'The Return Flight',
        description: 'Return home with a soul full of memories and dust from the world\'s highest roads.',
        highlight: 'Departure from Leh',
      },
    ],
    bikes: [
      { name: 'Royal Enfield Himalayan', engine: 'Single Cylinder', cc: 411, type: 'Adventure' },
      { name: 'Royal Enfield Bullet 500', engine: 'Single Cylinder', cc: 499, type: 'Cruiser' },
      { name: 'Bajaj Dominar', engine: 'Single Cylinder', cc: 400, type: 'Sports Tourer' },
    ],
    gallery: [],
    faq: [
      {
        question: 'Is this trip suitable for beginners?',
        answer: 'Yes, but you need basic riding experience. We provide full support and can adjust pace.',
      },
      {
        question: 'What\'s the best season?',
        answer: 'June to September. Roads are open and weather is stable.',
      },
      {
        question: 'Do I need an international driving permit?',
        answer: 'Your valid Indian license is sufficient. We handle all documentation.',
      },
    ],
    guides: [],
    inclusions: [
      'Bike rental (fuel, maintenance, insurance)',
      'Accommodation (budget to mid-range hotels)',
      'Expert local guides',
      'Breakfast and dinner',
      'Emergency support 24/7',
    ],
    exclusions: [
      'Flights to Leh',
      'Personal travel insurance',
      'Meals not mentioned',
      'Activities not in itinerary',
    ],
  },
  {
    id: '2',
    slug: 'zanskar-expedition',
    title: 'ZANSKAR EXPEDITION',
    description: 'Challenge yourself on one of the world\'s most demanding mountain passes.',
    duration: 8,
    difficulty: 'advanced',
    price: { min: 65000, max: 85000 },
    heroImage: '/images/heroes/zanskar-hero.jpg',
    heroTitle: 'WHERE LEGENDS ARE FORGED',
    overview: 'The Zanskar Expedition is for riders who crave the extraordinary. Traverse Rohtang La, Sarchu, and Khardung La with remote Zanskar Valley trekking included.',
    days: [
      {
        day: 1,
        title: 'Manali to Rohtang La',
        description: 'Start at 2050m and climb to 3978m. First taste of altitude.',
        distance: '50 km',
        highlight: 'Rohtang La pass',
      },
      {
        day: 2,
        title: 'Rohtang to Sarchu',
        description: 'Legendary Leh-Manali highway. Endless curves and mountain vistas.',
        distance: '310 km',
        highlight: 'Tanglang La at 5328m',
      },
      {
        day: 3,
        title: 'Sarchu to Leh',
        description: 'Continue on the world\'s highest road. Every turn is a postcard.',
        distance: '240 km',
        highlight: 'Baralacha La',
      },
      {
        day: 4,
        title: 'Leh Acclimatization',
        description: 'Rest and prepare for remote valleys ahead.',
        highlight: 'City exploration',
      },
      {
        day: 5,
        title: 'Leh to Zanskar',
        description: 'Enter the remote Zanskar Valley. Civilization fades away.',
        distance: '200 km',
        highlight: 'Penzi La pass',
      },
      {
        day: 6,
        title: 'Zanskar Valley Trek',
        description: 'Day trek to Chadar route and frozen river monasteries.',
        highlight: 'Icha monastery',
      },
      {
        day: 7,
        title: 'Zanskar to Leh',
        description: 'Ride back with stories of another world.',
        distance: '200 km',
        highlight: 'Sunset at Penzi',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'End of the expedition.',
        highlight: 'Final celebration',
      },
    ],
    bikes: [
      { name: 'Royal Enfield Himalayan', engine: 'Single Cylinder', cc: 411, type: 'Adventure' },
      { name: 'RE 650 Interceptor', engine: 'Twin Cylinder', cc: 648, type: 'Cruiser' },
    ],
    gallery: [],
    faq: [
      {
        question: 'How challenging is this?',
        answer: 'Very. Expect extreme altitudes, remote terrain, and physical demands.',
      },
      {
        question: 'What about altitude sickness?',
        answer: 'We have experienced doctors in team. Proper acclimatization is built into itinerary.',
      },
    ],
    guides: [],
    inclusions: [
      'Premium bike rental',
      'All accommodations',
      'Three meals daily',
      'Expert guides and mechanics',
      'Trekking to Zanskar Valley',
      'Medical support',
    ],
    exclusions: [
      'Flights',
      'Personal insurance',
      'Alcoholic beverages',
    ],
  },
  {
    id: '3',
    slug: 'kashmir-road-journey',
    title: 'KASHMIR ROAD JOURNEY',
    description: 'Discover the pristine beauty of Kashmir through winding mountain roads.',
    duration: 6,
    difficulty: 'beginner',
    price: { min: 35000, max: 50000 },
    heroImage: '/images/heroes/kashmir-hero.jpg',
    heroTitle: 'PARADISE ON TWO WHEELS',
    overview: 'A perfect introduction to Himalayan motorcycle touring. Ride through iconic Kashmir routes with stunning vistas and warm hospitality.',
    days: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive in Kashmir\'s capital. Houseboat experience and bike preparation.',
        highlight: 'Dal Lake sunset',
      },
      {
        day: 2,
        title: 'Srinagar to Sonamarg',
        description: 'Ride through pine forests to the meadows of Sonamarg.',
        distance: '80 km',
        highlight: 'Sonamarg landscapes',
      },
      {
        day: 3,
        title: 'Sonamarg Exploration',
        description: 'Local rides and glacier trekking.',
        distance: '60 km',
        highlight: 'Thajiwas Glacier',
      },
      {
        day: 4,
        title: 'Srinagar to Gulmarg',
        description: 'Classic Kashmir ride to the meadows of Gulmarg.',
        distance: '70 km',
        highlight: 'Gulmarg hill station',
      },
      {
        day: 5,
        title: 'Gulmarg and Local Rides',
        description: 'Ride through Baba Reshi and Alpather Lake routes.',
        distance: '100 km',
        highlight: 'Alpine meadows',
      },
      {
        day: 6,
        title: 'Return to Srinagar',
        description: 'Final ride back with farewell celebrations.',
        distance: '70 km',
        highlight: 'Victory dinner',
      },
    ],
    bikes: [
      { name: 'Royal Enfield Himalayan', engine: 'Single Cylinder', cc: 411, type: 'Adventure' },
      { name: 'Hero XPulse 200', engine: 'Single Cylinder', cc: 200, type: 'Adventure' },
    ],
    gallery: [],
    faq: [
      {
        question: 'Is it safe to ride in Kashmir?',
        answer: 'Yes. Tourist routes are well-maintained and safe. We coordinate with local authorities.',
      },
      {
        question: 'What\'s the weather like?',
        answer: 'Perfect spring/autumn weather. Summer temperatures 15-25°C at higher altitudes.',
      },
    ],
    guides: [],
    inclusions: [
      'Bike rental',
      'Houseboat and hotel stays',
      'Daily meals',
      'Local guides',
      'Trekking activities',
    ],
    exclusions: [
      'Flights',
      'Personal equipment',
    ],
  },
  {
    id: '4',
    slug: 'zanskar-valley',
    title: 'ZANSKAR VALLEY RITUAL',
    description: 'A raw exploration of India’s most isolated valley, crossing high passes and sacred peaks.',
    duration: 7,
    difficulty: 'advanced',
    price: { min: 75000, max: 95000 },
    heroImage: '/images/heroes/zanskar-hero.jpg',
    heroTitle: 'RAW. REMOTE. REWARDING.',
    overview: 'This high-altitude expedition is a thrilling ride through the majestic landscapes of Ladakh and Zanskar. Starting from Leh, this journey blends adventure, culture, and breathtaking scenery as you explore one of India’s most isolated valleys. Ride along pristine rivers, remote villages, and the iconic Gonbo Rangjon Peak—a sight that captures the essence of spiritual Zanskar.',
    days: [
      {
        day: 1,
        title: 'The First Breath',
        description: 'Arrive at Leh Airport (11,500 ft). Transfer to hotel for mandatory acclimatization. Rest and take short walks around the local market to prepare your heart for the high road.',
        highlight: 'Acclimatization in Leh',
      },
      {
        day: 2,
        title: 'The Moonland Run (180 km)',
        description: 'Ride through Magnetic Hill, Gurudwara Pathar Sahib, and the spectacular confluence of Indus and Zanskar. Face the surreal Moonland landscapes at Lamayuru and cross the scenic passes of Fotu La (13,479 ft) and Namika La (12,198 ft).',
        highlight: 'Wakha (near Kargil)',
      },
      {
        day: 3,
        title: 'Into the Heart (260 km)',
        description: 'See the ancient Maitreya Buddha at Mulbekh. Ride through Suru Valley, offering breathtaking views of Nun-Kun peaks. Cross Penzi La Pass for a view of the magnificent Drang Drung Glacier as you enter Padum.',
        highlight: 'Padum, Zanskar Valley',
      },
      {
        day: 4,
        title: 'The Sacred Peak (90 km)',
        description: 'Deep dive into Zanskar’s core. Visit Stongde Monastery and Purney—the base for Phugtal Monastery (a cave marvel). Reach the sacred site of Gonbo Rangjon for an unforgettable night under the stars.',
        highlight: 'Gonbo Rangjon Campsite',
      },
      {
        day: 5,
        title: 'The Shinku La Descent (180 km)',
        description: 'Ride along the Kargyak River and conquer the challenging Shinku La Pass. Reconnect with the Leh-Manali highway at Darcha and ride to the border plains of Sarchu.',
        highlight: 'Sarchu Plains',
      },
      {
        day: 6,
        title: 'The Gata Loops (250 km)',
        description: 'Cross the iconic Gata Loops and several high passes: Nakee La, Lachung La, and the mighty Tanglang La. Traverse the surreal Morey Plains before re-entering Leh by evening.',
        highlight: 'Return to Leh',
      },
      {
        day: 7,
        title: 'The Departure',
        description: 'A final breakfast before check-out and transfer to Leh Airport. Your Zanskar ritual concludes here, carrying memories of the road less traveled.',
        highlight: 'Leh Airport Departure',
      },
    ],
    bikes: [
      { name: 'Royal Enfield Himalayan (411/450)', engine: 'Single Cylinder', cc: 450, type: 'Adventure' },
    ],
    gallery: [],
    faq: [],
    guides: [],
    inclusions: [
      'Royal Enfield Himalayan Bikes (411/450)',
      'Fuel as per the itinerary',
      'Backup support vehicle',
      'Expert Road Marshall and Mechanic',
      'Airport pick-up and drop',
      'Accommodation in hotels and campsites',
      'Breakfast and Dinner throughout',
      'All necessary high-altitude permits',
      'Daily maintenance and spare parts',
      'Oxygen cylinder and First Aid support',
      'Riding gears (Helmet, Jacket, Knee guards)',
    ],
    exclusions: [
      'Airfare and 5% GST',
      'Travel Insurance',
      'Personal expenses (Laundry, Telephone, Shopping)',
      'Lunch and extra meals outside the group menu',
      'Optional activity costs',
      'Cost incurred due to natural calamities or political issues',
    ],
  },
  {
    id: '5',
    slug: 'spiti-sky-high',
    title: 'SPITI SKY-HIGH',
    description: 'The Middle Land. Between India and Tibet lies a desert in the sky.',
    duration: 10,
    difficulty: 'intermediate',
    price: { min: 55000, max: 75000 },
    heroImage: '/images/heroes/ladakh-hero.jpg',
    heroTitle: 'THE MIDDLE LAND',
    overview: 'Traverse the Spiti Valley, visit the world\'s highest post office in Hikkim, and the thousand-year-old Key Monastery.',
    days: [],
    bikes: [
      { name: 'Royal Enfield Himalayan', engine: 'Single Cylinder', cc: 411, type: 'Adventure' },
    ],
    gallery: [],
    faq: [],
    guides: [],
    inclusions: ['All meals', 'Support vehicle'],
    exclusions: ['Flights'],
  },
]

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((trip) => trip.slug === slug)
}

export function getAllTripSlugs(): string[] {
  return trips.map((trip) => trip.slug)
}
