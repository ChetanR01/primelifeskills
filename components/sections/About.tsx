'use client'
import { CheckCircle2, Target, Award, Lightbulb } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { institute } from '@/lib/data'
import { motion } from 'framer-motion'

const features = [
  { Icon: Target,    title: 'Expert-Led Training',    desc: 'Learn directly from Feroz Sir — a seasoned trainer who has transformed 500+ students across Maharashtra.' },
  { Icon: Award,     title: 'Proven Track Record',    desc: 'Our graduates consistently excel in interviews, presentations and professional environments.' },
  { Icon: Lightbulb, title: '100% Practical Approach', desc: 'Live role-plays, debates, group sessions and real-world practice — not just theory.' },
]

const points = [
  'Fluent English communication skills',
  'Fearless public speaking & stage presence',
  'Magnetic personality & professional presence',
  'Interview confidence & leadership skills',
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <Reveal direction="left">
            <div className="relative">
              {/* Main visual card */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 to-brand-900 shadow-card-hover flex flex-col items-center justify-center">
                {/* Grid overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid-blue opacity-30"
                />
                {/* Content */}
                <div className="relative z-10 text-center px-8">
                  <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                    <span className="text-5xl">🎯</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white">Prime Life Skills</p>
                  <p className="mt-2 text-sm text-blue-200/70">Empowering Lives Since {institute.established}</p>
                </div>
                {/* Shine */}
                <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-8 rounded-2xl bg-white p-4 shadow-card"
              >
                <p className="text-2xl font-extrabold text-brand-800">500+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Students Trained</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -left-4 top-10 rounded-2xl bg-white p-4 shadow-card"
              >
                <p className="text-2xl font-extrabold text-brand-800">95%</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Success Rate</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
                About Us
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.15] tracking-tight text-slate-900">
                We Don&apos;t Just Teach —{' '}
                <span className="text-gradient">We Transform Lives</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Prime Life Skills is Lonar&apos;s premier institute dedicated to building essential life skills that shape careers and personalities. Founded with a vision to bridge the gap between education and real-world success, we empower students and professionals to communicate with clarity, confidence and impact.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Through interactive sessions, live practice and personalised mentorship, we bring out the leader hidden in every individual — helping them succeed not just in careers but in every aspect of life.
              </p>
            </Reveal>

            {/* Checkpoints */}
            <Reveal delay={0.3}>
              <ul className="mt-6 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Feature grid */}
            <Reveal delay={0.38}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features.map(({ Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">{title}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.44}>
              <a
                href="#programs"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-7 py-3 text-sm font-bold text-white shadow-blue-sm transition-all hover:-translate-y-0.5 hover:shadow-blue"
              >
                View Our Programs
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
