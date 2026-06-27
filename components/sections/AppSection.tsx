'use client'
import { motion } from 'framer-motion'

export default function AppSection() {
  return (
    <section id="app" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          className="relative rounded-[30px] overflow-hidden grid lg:grid-cols-[1fr_auto] gap-10 items-center p-12 lg:p-16"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 55%, #06B6D4 100%)' }}
        >
          {/* Orb decorations */}
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="absolute -bottom-16 left-[20%] w-[240px] h-[240px] rounded-full pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.04)' }} />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
              📱 Mobile App
            </div>

            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white leading-tight mb-4">
              Learn Anytime,<br />Anywhere
            </h2>
            <p className="text-white/80 text-[1rem] leading-[1.85] mb-8 max-w-[480px]">
              Download the Prime Life Skills app and continue your learning journey on the go. Access lessons, recorded sessions, practice exercises, and connect with your batch from anywhere.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=co.diy4.fjuzc&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-semibold hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.32)' }}
              >
                <span className="text-2xl">▶</span>
                <div className="leading-tight">
                  <div className="text-[0.68rem] opacity-80">Download on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone emoji visual */}
          <div
            className="hidden lg:block text-[9rem] relative z-10 select-none"
            style={{ animation: 'appPhoneFloat 4.5s ease-in-out infinite', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.35))' }}
          >
            📱
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes appPhoneFloat {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50%      { transform: translateY(-22px) rotate(5deg); }
        }
      `}</style>
    </section>
  )
}
