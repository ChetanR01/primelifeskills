'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Users, BookOpen, TrendingUp } from 'lucide-react'
import { institute, heroHighlights } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  MessageCircle: BookOpen,
  Mic:           TrendingUp,
  Sparkles:      Star,
  Heart:         Users,
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(99,179,237,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glows */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)', animation: 'blob 16s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)', animation: 'blob 20s ease-in-out 5s infinite' }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-8 pb-24 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left content */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-white/8 px-4 py-1.5 text-sm font-medium text-brand-200 backdrop-blur"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400" style={{ animation: 'float 2s ease-in-out infinite' }} />
              #1 Skill Development Institute in Lonar
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.06] tracking-tight text-white"
            >
              Unlock Your{' '}
              <span className="text-gradient">True Potential</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-blue-200/80"
            >
              Transform your communication, build unshakeable confidence and fast-track your career with expert-led programs in English Speaking, Public Speaking & Personality Development — right here in Lonar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-base font-bold text-white shadow-blue transition-all hover:-translate-y-0.5 hover:shadow-blue-lg"
              >
                Explore Programs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                Book Free Demo
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex gap-8 border-t border-white/10 pt-8"
            >
              {[
                { num: '500+', lbl: 'Students Trained' },
                { num: '6+',   lbl: 'Expert Programs' },
                { num: '95%',  lbl: 'Success Rate' },
              ].map((s) => (
                <div key={s.num}>
                  <div className="text-2xl font-extrabold text-white">{s.num}</div>
                  <div className="mt-0.5 text-xs font-medium text-blue-300/70">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating 3D card stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center h-[480px] perspective-1000"
          >
            {/* Back card */}
            <div
              className="absolute glass-blue rounded-2xl p-6 w-[280px] shadow-card"
              style={{
                transform: 'rotateY(-10deg) rotateZ(-3deg) translateX(-30px) translateY(30px)',
                animation: 'float 9s ease-in-out 2s infinite',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Star className="h-5 w-5 text-yellow-300" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">4.9 / 5 Rating</p>
                  <p className="text-xs text-blue-200/60">By 200+ Students</p>
                </div>
              </div>
            </div>

            {/* Main card */}
            <div
              className="relative z-10 rounded-2xl bg-white p-8 shadow-card-hover w-[300px]"
              style={{ animation: 'float 7s ease-in-out infinite' }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <p className="text-2xl font-extrabold text-brand-900">500+</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Lives Transformed</p>
              <div className="mt-4 h-2 rounded-full bg-brand-100">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
              </div>
              <p className="mt-2 text-xs text-slate-400">95% Student Success Rate</p>
            </div>

            {/* Front floating card */}
            <div
              className="absolute glass-blue rounded-2xl p-5 w-[240px] shadow-card"
              style={{
                transform: 'rotateY(8deg) rotateZ(4deg) translateX(60px) translateY(-80px)',
                animation: 'float 8s ease-in-out 1s infinite',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Users className="h-5 w-5 text-brand-200" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Next Batch</p>
                  <p className="text-xs text-blue-200/60">Enrolling Now</p>
                </div>
              </div>
            </div>

            {/* Bottom card */}
            <div
              className="absolute rounded-2xl bg-gradient-to-r from-brand-600 to-brand-800 px-5 py-4 shadow-blue w-[220px]"
              style={{
                transform: 'translateX(40px) translateY(120px)',
                animation: 'float 10s ease-in-out 3s infinite',
              }}
            >
              <p className="text-xs font-semibold text-blue-200">🏆 Certified Programs</p>
              <p className="mt-1 text-sm font-bold text-white">Get Industry-Recognized Certificate</p>
            </div>
          </motion.div>
        </div>

        {/* Highlight chips — mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {heroHighlights.map((h) => {
            const Icon = iconMap[h.icon] ?? Star
            return (
              <div
                key={h.title}
                className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm transition hover:bg-white/14"
              >
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/25 text-brand-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-white">{h.title}</p>
                <p className="text-xs text-blue-200/60 mt-0.5">{h.text}</p>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white animate-bounce-slow"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  )
}
