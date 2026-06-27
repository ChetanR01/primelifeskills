'use client'
import {
  GraduationCap, Users, Smartphone, Trophy, Award, Zap,
} from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { whyUs } from '@/lib/data'
import { motion } from 'framer-motion'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Users, Smartphone, Trophy, Award, Zap,
}

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold tracking-tight text-slate-900">
            The{' '}
            <span className="text-gradient">Prime Advantage</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base text-slate-500 leading-relaxed">
            We go beyond teaching — we create an environment where transformation happens naturally and results speak for themselves.
          </p>
        </Reveal>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Zap
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-card-hover"
              >
                {/* Hover gradient top */}
                <div className="absolute top-0 inset-x-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-700 transition-transform duration-400 group-hover:scale-x-100" />

                {/* Hover bg tint */}
                <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-brand-50/60 to-transparent transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2.5 text-base font-extrabold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
