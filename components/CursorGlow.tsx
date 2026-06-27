'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const mx = useMotionValue(-600)
  const my = useMotionValue(-600)
  const x = useSpring(mx, { stiffness: 75, damping: 22 })
  const y = useSpring(my, { stiffness: 75, damping: 22 })

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
      aria-hidden
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x, y,
          width: 480, height: 480,
          background:
            'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(37,99,235,0.03) 45%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
