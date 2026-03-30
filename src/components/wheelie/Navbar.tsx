'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/trips', label: 'TRIPS' },
    { href: '/stories', label: 'STORIES' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/10' : 'bg-transparent'
          }`}
      >
        <div className="container-wide px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo - Deliberate and brutalist */}
            <Link href="/" className="flex items-center group">
              <span className="font-display text-2xl tracking-widest text-foreground transition-colors group-hover:text-accent">
                WHEELIE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-muted-foreground hover:text-foreground transition-colors relative"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="magnetic-button text-xs ml-4"
              >
                [ IGNITE ]
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-5xl text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-display text-5xl text-accent mt-8"
            >
              [ IGNITE ]
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
