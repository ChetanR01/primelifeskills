'use client'
import { useEffect, ReactNode } from 'react'

/* Wraps children and initialises Lenis smooth scroll */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: any
    let rafId: number

    const init = async () => {
      try {
        const { default: Lenis } = await import('lenis')
        lenis = new Lenis({ duration: 1.25, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        function raf(time: number) { lenis.raf(time); rafId = requestAnimationFrame(raf) }
        rafId = requestAnimationFrame(raf)
      } catch {
        /* Graceful fallback — CSS scroll-behavior:smooth still works */
      }
    }

    init()
    return () => { lenis?.destroy(); cancelAnimationFrame(rafId) }
  }, [])

  return <>{children}</>
}
