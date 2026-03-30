import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary'
  id?: string
}

export function Section({
  children,
  className = '',
  variant = 'default',
  id,
}: SectionProps) {
  const variantStyles = {
    default: 'bg-background',
    primary: 'bg-primary border-t border-border',
    secondary: 'bg-surface',
  }

  return (
    <section
      id={id}
      className={`section-padding ${variantStyles[variant]} ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: React.ReactNode
}

export function SectionTitle({ children, className = '', subtitle }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-5xl md:text-6xl font-bold text-pretty mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface SectionContentProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export function SectionContent({
  children,
  className = '',
  centered = false,
}: SectionContentProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {children}
    </div>
  )
}
