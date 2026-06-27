import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Facebook, Instagram, YouTube, GooglePlay, WhatsApp } from '@/components/ui/Brand'
import { institute, navLinks, courses } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-blue-100">
      <div className="absolute inset-0 bg-grid-blue opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <span className="text-xl font-extrabold">P</span>
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">Prime Life Skills</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Lonar, Maharashtra
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-200/70">
              {institute.tagline}. Lonar&apos;s most trusted institute for English speaking, public speaking, personality development and life skills training.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialCircle href={institute.social.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialCircle>
              <SocialCircle href={institute.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialCircle>
              <SocialCircle href={institute.social.youtube} label="YouTube">
                <YouTube className="h-4 w-4" />
              </SocialCircle>
              <SocialCircle href={`https://wa.me/${institute.whatsapp}`} label="WhatsApp">
                <WhatsApp className="h-4 w-4" />
              </SocialCircle>
              <SocialCircle href={institute.social.playStore} label="Play Store">
                <GooglePlay className="h-4 w-4" />
              </SocialCircle>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex items-center gap-1.5 text-blue-200/70 transition hover:text-brand-300">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white">Programs</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {courses.slice(0, 5).map((c) => (
                <li key={c.title}>
                  <a href="#programs" className="inline-flex items-center gap-1.5 text-blue-200/70 transition hover:text-brand-300">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-400" />
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-white">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-400" />
                <span className="text-blue-200/70">{institute.address}</span>
              </li>
              <li>
                <a href={`tel:${institute.phone}`} className="flex items-center gap-3 text-blue-200/70 transition hover:text-brand-300">
                  <Phone className="h-5 w-5 flex-shrink-0 text-brand-400" />
                  {institute.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${institute.email}`} className="flex items-center gap-3 text-blue-200/70 transition hover:text-brand-300">
                  <Mail className="h-5 w-5 flex-shrink-0 text-brand-400" />
                  {institute.email}
                </a>
              </li>
            </ul>

            <a
              href={institute.social.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-brand-700 bg-brand-900/50 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-800"
            >
              <GooglePlay className="h-5 w-5 text-brand-300" />
              Download Our App
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-blue-300/60 sm:flex-row sm:text-left">
          <p>© {year} Prime Life Skills, Lonar. All rights reserved.</p>
          <p>English Speaking · Public Speaking · Personality Development · Life Skills</p>
        </div>
      </div>
    </footer>
  )
}

function SocialCircle({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-blue-100 transition hover:bg-brand-600 hover:text-white"
    >
      {children}
    </a>
  )
}
