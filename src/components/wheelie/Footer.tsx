import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground border-t border-border/20 pt-32 pb-[30vh]">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <span className="font-display text-4xl tracking-widest text-foreground transition-colors group-hover:text-accent">
                WHEELIE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Raw, unpolished motorcycle expeditions in Ladakh. Not a vacation. An awakening.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold text-foreground uppercase tracking-[0.2em]">The Journey</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/trips" className="text-muted-foreground font-sans hover:text-foreground transition-colors">Expeditions</Link></li>
              <li><Link href="/stories" className="text-muted-foreground font-sans hover:text-foreground transition-colors">The Evidence</Link></li>
              <li><Link href="/contact" className="text-muted-foreground font-sans hover:text-foreground transition-colors">Ignite</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-semibold text-foreground uppercase tracking-[0.2em]">Transmission</h4>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} className="stroke-1" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} className="stroke-1" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} className="stroke-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-6 font-sans">
          <p className="tracking-widest uppercase">© {currentYear} THE MOUNTAINS DO NOT CARE ABOUT YOU.</p>
          <div className="flex gap-8 tracking-wider uppercase">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
