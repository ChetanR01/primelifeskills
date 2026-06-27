'use client'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { YouTube } from '@/components/ui/Brand'
import { founder } from '@/lib/data'

const socials = [
  { icon: YouTube, label: 'Dear Feroz Sir',    href: founder.youtubePersonal,  color: 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' },
  { icon: YouTube, label: 'Prime Life Skills', href: founder.youtubeInstitute, color: 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' },
]

const highlights = [
  { num: '5+',   lbl: 'Years Experience' },
  { num: '500+', lbl: 'Students Trained' },
  { num: '6+',   lbl: 'Programs Taught' },
]

export default function Founder() {
  return (
    <section id="mentor" className="section-pad bg-brand-50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Meet Your Mentor
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold tracking-tight text-slate-900">
            Learn From the{' '}
            <span className="text-gradient">Best</span>
          </h2>
        </Reveal>

        <div className="overflow-hidden rounded-3xl bg-white shadow-card-hover ring-1 ring-slate-200/80">
          <div className="grid lg:grid-cols-[380px_1fr]">

            {/* Left: photo panel */}
            <Reveal direction="left" className="relative flex flex-col items-center justify-center bg-gradient-to-br from-brand-800 to-brand-950 p-10 lg:p-12">
              {/* Decorative rings */}
              <div className="absolute inset-0 bg-grid-blue opacity-20" aria-hidden />

              {/* Photo */}
              <div className="relative z-10">
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-white/20 shadow-blue">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="relative z-10 mt-6 text-center">
                <p className="text-2xl font-extrabold text-white">{founder.name}</p>
                <p className="mt-1 text-sm font-medium text-brand-200">{founder.role}</p>
              </div>

              {/* Stats strip */}
              <div className="relative z-10 mt-8 grid grid-cols-3 gap-4 w-full">
                {highlights.map((h) => (
                  <div key={h.lbl} className="text-center">
                    <p className="text-xl font-extrabold text-white">{h.num}</p>
                    <p className="text-[10px] font-medium text-brand-200">{h.lbl}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: bio */}
            <Reveal direction="right" className="flex flex-col justify-center p-10 lg:p-14">
              <Quote className="mb-6 h-10 w-10 text-brand-200" />
              <blockquote className="mb-8 text-xl font-semibold italic text-slate-700 leading-relaxed">
                &ldquo;My mission is simple — to help every young person in Lonar speak with confidence, lead with character, and succeed in every area of life.&rdquo;
              </blockquote>

              <p className="mb-4 text-slate-600 leading-relaxed text-[0.97rem]">
                {founder.bio}
              </p>

              <p className="text-slate-600 leading-relaxed text-[0.97rem]">
                His dynamic teaching style blends practical techniques with genuine mentorship, creating transformations that go far beyond the classroom. Under his guidance, students have cracked competitive exams, landed corporate jobs, and become confident leaders.
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${color}`}
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-7 py-3 text-sm font-bold text-white shadow-blue-sm transition hover:-translate-y-0.5 hover:shadow-blue"
              >
                Book a Session with Feroz Sir
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
