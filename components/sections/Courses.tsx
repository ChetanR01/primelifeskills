'use client'
import { useRef, type MouseEvent } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  MessageCircle, Mic, Sparkles, Heart, Briefcase, Users, ArrowUpRight, Clock,
} from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { courses } from '@/lib/data'

const Icons: Record<string, React.ElementType> = {
  MessageCircle, Mic, Sparkles, Heart, Briefcase, Users,
}

function TiltCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rxS = useSpring(rx, { stiffness: 180, damping: 22 })
  const ryS = useSpring(ry, { stiffness: 180, damping: 22 })
  const rotateX = useTransform(rxS, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(ryS, [-0.5, 0.5], ['-8deg', '8deg'])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    rx.set((e.clientY - r.top)  / r.height - 0.5)
    ry.set((e.clientX - r.left) / r.width  - 0.5)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }

  const Icon = Icons[course.icon] ?? MessageCircle

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '900px' }}
      className="group cursor-default"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-card-hover hover:ring-brand-200">
        {/* Top gradient accent */}
        <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${course.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

        {/* Badge */}
        {course.badge && (
          <span className="absolute top-4 right-4 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700">
            {course.badge}
          </span>
        )}

        {/* Icon */}
        <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-md`}>
          <Icon className="h-7 w-7" />
        </div>

        {/* Duration */}
        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-brand-600">
          <Clock className="h-3.5 w-3.5" />
          {course.duration}
        </div>

        <h3 className="mb-3 text-lg font-extrabold text-slate-900">{course.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500">{course.description}</p>

        {/* Highlights */}
        <ul className="mb-6 space-y-1.5">
          {course.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="group/btn flex items-center justify-between rounded-xl bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
        >
          Enquire Now
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  return (
    <section id="programs" className="section-pad bg-brand-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Our Programs
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold tracking-tight text-slate-900">
            Programs That{' '}
            <span className="text-gradient">Shape Futures</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base text-slate-500 leading-relaxed">
            Comprehensive, hands-on programs for students, freshers and professionals ready to level up their communication and confidence.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <TiltCard key={c.title} course={c} index={i} />
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-8 py-3.5 text-sm font-bold text-white shadow-blue transition-all hover:-translate-y-0.5 hover:shadow-blue-lg"
          >
            Book a Free Demo Session
          </a>
        </Reveal>
      </div>
    </section>
  )
}
