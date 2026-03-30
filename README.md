# Wheelie Wheelers - Enterprise Adventure Travel Website

## Overview
A cinematic, enterprise-grade web application for Wheelie Wheelers, a Ladakh motorcycle expedition company founded by Gonbo Dorjey. The site is designed to showcase authentic adventure experiences through compelling storytelling and immersive design.

## Key Features Implemented

### 1. Design System
- **Typography**: Custom fonts (Bebas Neue for display, Cinzel for headings, Inter for body, JetBrains Mono for code)
- **Color Palette**: Dark cinematic aesthetic with accent red (#E63946) for CTAs only
- **Animations**: Smooth fade-in/slide-up transitions for immersive feel
- **Film Grain Overlay**: Subtle texture for authentic, raw aesthetic

### 2. Pages Built

#### Home Page (`/`)
- Hero section with cinematic imagery
- "The Wound" section highlighting middleman problem
- Founder story (Gonbo Dorjey)
- Feature grid showcasing offerings
- Trip previews with CTAs

#### Stories Page (`/stories`) - PRIMARY FOCUS
- Full-screen hero with "Stories from the Road"
- Featured story showcase with interactive display
- Dynamic story grid with hover effects
- Multiple filter options (by trip, experience level)
- Statistics dashboard
- Story profile cards with quotes and journey images
- CTA to book trips or submit stories

#### About Page (`/about`)
- Company manifesto
- Founder's vision and history
- Team introduction
- Company values (Authenticity, Integrity, Community, Excellence)

#### Trips Listing Page (`/trips`)
- Grid layout showcasing all expeditions
- Difficulty badges (Beginner, Intermediate, Advanced)
- Price ranges and duration
- Trip matcher section helping users find their perfect journey
- Individual trip cards with imagery

#### Trip Details Pages (`/trips/[slug]`)
- Dynamic routing for each trip
- Complete itinerary with day-by-day breakdown
- Bike specifications
- FAQ accordion
- Inclusions/Exclusions
- Related stories from that trip
- Booking CTA

#### Contact Page (`/contact`)
- Contact information and social links
- Contact form with trip interest selector
- FAQ addressing common questions
- Operating hours and location

### 3. Components Created

**Core Components:**
- `Navbar.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Multi-column footer with links and social
- `HeroSection.tsx` - Reusable full-screen hero pattern
- `StoryCard.tsx` - Individual story card with hover effects
- `StoryGrid.tsx` - Filterable story grid layout

### 4. Data Structure

**Trips Data (`lib/data/trips.ts`):**
- 3 main expeditions (Ladakh Circuit, Zanskar Expedition, Kashmir Road)
- Complete itineraries with 6-8 days each
- Bike specifications, FAQs, inclusions/exclusions
- Price ranges and difficulty levels

**Stories Data (`lib/data/stories.ts`):**
- 6 traveler stories with diverse backgrounds
- Featured story flag for homepage/stories page
- Experience level classification
- Full narratives and journey quotes
- Trip associations

### 5. Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- Responsive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

## Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom theme
- **Typography**: Google Fonts (Bebas Neue, Cinzel, Inter, JetBrains Mono)
- **Images**: Next.js Image optimization
- **Form Handling**: React hooks with client-side validation
- **Icons**: Lucide React

## File Structure
```
app/
├── page.tsx (Home)
├── about/page.tsx
├── stories/page.tsx (Primary)
├── trips/page.tsx
├── trips/[slug]/page.tsx (Dynamic)
├── contact/page.tsx
├── layout.tsx (Root layout with fonts)
└── globals.css (Design system)

components/wheelie/
├── Navbar.tsx
├── Footer.tsx
├── HeroSection.tsx
├── StoryCard.tsx
└── StoryGrid.tsx

lib/data/
├── trips.ts
└── stories.ts

public/images/
├── heroes/ (Ladakh, Zanskar, Kashmir hero images)
└── stories/ (Profile and journey images for 6 travelers)
```

## Key Design Principles
1. **Authenticity First** - No filters, no pretense. Raw Ladakh, real stories
2. **Cinematic Aesthetic** - Film grain, generous whitespace, minimal UI
3. **Community Focused** - Every element supports local guides and families
4. **Story-Driven** - Travelers' journeys are the core narrative
5. **Dark Theme** - Mountain night aesthetic with selective use of color
6. **Red Accent Only** - Brake light red used exclusively for CTAs

## Brand Voice
- Direct and honest
- Poetic but not flowery
- Respectful of mountains and culture
- Action-oriented in CTAs
- Minimalist in copy

## Future Enhancements
- Booking system integration
- Payment gateway (Stripe/Razorpay)
- Email notifications
- Admin dashboard for trip/story management
- Video testimonials
- Real-time availability calendar
- Multi-language support

## Getting Started
1. Install dependencies: `pnpm install`
2. Run dev server: `pnpm dev`
3. Open browser: `http://localhost:3000`

## Deployment
- Deploy to Vercel for optimal performance
- Environment variables in `.env.local`
- Static site generation for fast loads
