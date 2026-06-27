import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CursorGlow  from '@/components/CursorGlow'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prime Life Skills | Speak. Lead. Succeed.',
  description:
    "Lonar's premier institute for English Speaking, Public Speaking, Personality Development & Life Skills. Transform your confidence with Feroz Sir.",
  keywords: [
    'Prime Life Skills',
    'English Speaking Lonar',
    'Public Speaking Maharashtra',
    'Personality Development Lonar',
    'Life Skills Institute',
    'Feroz Sir',
    'Communication Training Lonar',
  ],
  openGraph: {
    title: 'Prime Life Skills | Speak. Lead. Succeed.',
    description:
      "Transform your life with expert English & Public Speaking training in Lonar, Maharashtra.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-white antialiased">
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
