'use client'
import { Smartphone, Star, Download } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { GooglePlay } from '@/components/ui/Brand'
import { institute } from '@/lib/data'

export default function PlayStore() {
  return (
    <section className="section-pad bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 relative overflow-hidden">
      {/* Background pattern */}
      <div aria-hidden className="absolute inset-0 bg-grid-blue opacity-20" />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              Now Available on Android
            </span>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="mt-5 text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold tracking-tight text-white">
              Learn on the Go with Our App
            </h2>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mx-auto mt-4 max-w-xl text-base text-blue-200/80 leading-relaxed">
              Access video lessons, speaking exercises, progress tracking and live session links — all in one app. Your transformation journey, wherever you are.
            </p>
          </Reveal>

          {/* App features */}
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                4.8 Rating
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-2">
                <Download className="h-4 w-4 text-brand-300" />
                500+ Downloads
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Free to Download</span>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10">
              <a
                href={institute.social.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-bold text-brand-800 shadow-blue-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <GooglePlay className="h-7 w-7" />
                <span>
                  <span className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest">Get it on</span>
                  <span className="block text-lg font-extrabold text-slate-900 leading-tight">Google Play</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
