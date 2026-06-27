import Navbar      from '@/components/Navbar'
import Hero        from '@/components/sections/Hero'
import About       from '@/components/sections/About'
import Courses     from '@/components/sections/Courses'
import Stats       from '@/components/sections/Stats'
import WhyUs       from '@/components/sections/WhyUs'
import Founder     from '@/components/sections/Founder'
import Testimonials from '@/components/sections/Testimonials'
import PlayStore   from '@/components/sections/PlayStore'
import Contact     from '@/components/sections/Contact'
import Footer      from '@/components/Footer'
import { WhatsApp } from '@/components/ui/Brand'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Stats />
      <WhyUs />
      <Founder />
      <Testimonials />
      <PlayStore />
      <Contact />
      <Footer />

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/919518971012"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
        style={{
          background: 'linear-gradient(135deg,#25D366,#128C7E)',
          animation: 'waPulse 2.4s ease-in-out infinite',
        }}
      >
        <WhatsApp className="h-7 w-7" />
      </a>
    </main>
  )
}
