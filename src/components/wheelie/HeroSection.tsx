import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle?: string
  image: string
  cta?: {
    text: string
    href: string
  }
  overlay?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  image,
  cta,
  overlay = true,
}: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href={cta.href}
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded hover:opacity-90 transition-opacity"
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
