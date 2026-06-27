'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Facebook, Instagram, YouTube } from '@/components/ui/Brand'
import { navLinks, institute } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-900 text-blue-100 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <a
            href={`tel:${institute.phone}`}
            className="flex items-center gap-2 hover:text-white transition"
          >
            <Phone className="h-3.5 w-3.5 text-blue-300" />
            {institute.phoneDisplay}
          </a>
          <div className="flex items-center gap-5">
            <span className="text-blue-300/80">{institute.hours}</span>
            <span className="h-4 w-px bg-brand-700" />
            <div className="flex items-center gap-3">
              <a href={institute.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={institute.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={institute.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition">
                <YouTube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-blue-sm">
              <span className="text-xl font-extrabold leading-none">P</span>
            </div>
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-brand-900">Prime Life Skills</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500">Lonar, Maharashtra</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-brand-700 after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-0 after:bg-brand-500 after:transition-all hover:after:w-[calc(100%-2rem)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-2.5 text-sm font-semibold text-white shadow-blue-sm transition-all hover:-translate-y-0.5 hover:shadow-blue"
            >
              Book Free Demo
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-brand-950/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] h-full w-[82%] max-w-sm bg-white shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.38 }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                    <span className="text-base font-extrabold">P</span>
                  </div>
                  <span className="font-extrabold text-brand-900">Prime Life Skills</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col p-3">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 + i * 0.05 }}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="px-5 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Book Free Demo
                </a>
                <div className="mt-6 space-y-2 text-sm text-slate-700">
                  <a href={`tel:${institute.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-600" />
                    {institute.phoneDisplay}
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <SocialCircle href={institute.social.facebook} label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </SocialCircle>
                  <SocialCircle href={institute.social.instagram} label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </SocialCircle>
                  <SocialCircle href={institute.social.youtube} label="YouTube">
                    <YouTube className="h-4 w-4" />
                  </SocialCircle>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function SocialCircle({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-700 transition hover:bg-brand-600 hover:text-white"
    >
      {children}
    </a>
  )
}
