'use client'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Success Stories
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold tracking-tight text-slate-900">
            What Our Students{' '}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-slate-500 leading-relaxed">
            Real transformations. Real results. Hear from students who changed their lives with Prime Life Skills.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:border-brand-200 hover:shadow-card-hover"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 text-sm text-slate-600 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-extrabold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
