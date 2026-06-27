'use client'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { institute } from '@/lib/data'

const courseOptions = [
  'English Speaking',
  'Public Speaking',
  'Personality Development',
  'Life Skills Training',
  'Interview Preparation',
  'Communication Excellence',
  'Not Sure — Tell Me More',
]

export default function Contact() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
    setTimeout(() => { setSent(false); (e.target as HTMLFormElement).reset() }, 5500)
  }

  return (
    <section id="contact" className="section-pad bg-brand-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Get In Touch
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold tracking-tight text-slate-900">
            Start Your{' '}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-slate-500 leading-relaxed">
            Take the first step toward your best self. Book a free demo session and experience the Prime Life Skills difference.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] items-start">

          {/* Contact info */}
          <Reveal direction="left" className="space-y-5">
            {[
              { Icon: MapPin,          label: 'Location',      value: institute.address,          href: undefined },
              { Icon: Phone,           label: 'Phone',         value: institute.phoneDisplay,     href: `tel:${institute.phone}` },
              { Icon: Mail,            label: 'Email',         value: institute.email,            href: `mailto:${institute.email}` },
              { Icon: Clock,           label: 'Batch Timings', value: institute.hours,            href: undefined },
              { Icon: MessageCircle,   label: 'WhatsApp',      value: 'Chat with us on WhatsApp', href: `https://wa.me/${institute.whatsapp}` },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="group flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 transition hover:shadow-card-hover hover:ring-brand-200">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm font-semibold text-slate-800 hover:text-brand-700 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-slate-800">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80 shadow-card">
              <iframe
                src={`https://maps.google.com/maps?q=${institute.mapQuery}&output=embed&z=14`}
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Life Skills — Lonar, Maharashtra"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right">
            <div className="rounded-3xl bg-white p-8 shadow-card-hover ring-1 ring-slate-200/80 sm:p-10">
              <h3 className="mb-7 text-xl font-extrabold text-slate-900">
                Book Your Free Demo Session
              </h3>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name *"    type="text"  placeholder="Your full name"    required />
                  <Field label="Phone Number *" type="tel"   placeholder="+91 XXXXX XXXXX"   required />
                </div>
                <Field label="Email Address" type="email" placeholder="your@email.com" />

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Course Interested In *
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  >
                    <option value="" disabled>Select a course…</option>
                    {courseOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Your Goals / Message
                  </label>
                  <textarea
                    placeholder="Tell us about your goals or any questions you have…"
                    rows={4}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || sent}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full overflow-hidden rounded-xl py-4 text-base font-bold text-white transition-all duration-300"
                  style={{
                    background: sent
                      ? 'linear-gradient(135deg,#10B981,#059669)'
                      : 'linear-gradient(135deg,#2563eb,#1e40af)',
                    boxShadow: sent
                      ? '0 8px 30px rgba(16,185,129,0.35)'
                      : '0 8px 30px rgba(37,99,235,0.35)',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </span>
                  ) : sent
                    ? '✅ Request Sent — We\'ll Call You Soon!'
                    : 'Book Free Demo Session'}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label, type, placeholder, required,
}: {
  label: string; type: string; placeholder: string; required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  )
}
