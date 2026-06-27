'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Clock, TrendingUp } from 'lucide-react'
import { stats } from '@/lib/data'

const iconMap = [GraduationCap, BookOpen, Clock, TrendingUp]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    let startTs: number | null = null
    const dur = 2000
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)

    function step(ts: number) {
      if (!startTs) startTs = ts
      const pct = Math.min((ts - startTs) / dur, 1)
      setCount(Math.floor(ease(pct) * target))
      if (pct < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <div ref={ref} className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-none text-white">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="section-pad bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur ring-1 ring-white/10"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4 divide-y lg:divide-y-0">
            {stats.map((s, i) => {
              const Icon = iconMap[i]
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center justify-center gap-4 px-6 py-14 text-center"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-200 transition group-hover:bg-white/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <Counter target={s.value} suffix={s.suffix} />
                  <p className="text-sm font-semibold text-blue-200/70">{s.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
