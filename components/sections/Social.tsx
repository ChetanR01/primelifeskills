'use client'
import { motion } from 'framer-motion'

const platforms = [
  {
    icon: '📸', name: 'Instagram', handle: '@prime_life_skills_',
    href: 'https://www.instagram.com/prime_life_skills_/',
    hover: 'rgba(225,48,108,0.1)', hoverBorder: 'rgba(225,48,108,0.35)',
  },
  {
    icon: '▶️', name: 'YouTube', handle: '@primelifeskills',
    href: 'https://www.youtube.com/@primelifeskills',
    hover: 'rgba(255,0,0,0.1)', hoverBorder: 'rgba(255,0,0,0.35)',
  },
  {
    icon: '🎬', name: 'Dear Feroz Sir', handle: '@dearferozsir1219',
    href: 'https://www.youtube.com/@dearferozsir1219',
    hover: 'rgba(255,50,50,0.1)', hoverBorder: 'rgba(255,50,50,0.3)',
  },
  {
    icon: '📘', name: 'Facebook', handle: '/primelifeskills',
    href: 'https://www.facebook.com/primelifeskills/',
    hover: 'rgba(24,119,242,0.1)', hoverBorder: 'rgba(24,119,242,0.35)',
  },
  {
    icon: '📱', name: 'Mobile App', handle: 'Google Play Store',
    href: 'https://play.google.com/store/apps/details?id=co.diy4.fjuzc&hl=en_IN',
    hover: 'rgba(0,180,50,0.1)', hoverBorder: 'rgba(0,180,50,0.35)',
  },
]

export default function Social() {
  return (
    <section id="social" className="section-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        >
          <div className="chip mx-auto mb-4">Follow Us</div>
          <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-black tracking-tight">
            Connect With <span className="grad-text">Us Online</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {platforms.map((p, i) => (
            <motion.a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="flex flex-col items-center text-center py-8 px-4 rounded-[20px] group transition-all duration-400"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.065)',
              }}
              /* dynamic hover via CSS vars trick — inline onMouseEnter/Leave in next.js better */
            >
              <div className="text-[2.6rem] mb-3 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <div className="font-bold text-[0.92rem] text-white mb-1">{p.name}</div>
              <div className="text-white/35 text-[0.73rem]">{p.handle}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
