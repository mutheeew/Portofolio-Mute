'use client'
import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Code2, Building2 } from 'lucide-react'

interface CareerItem {
  period: string
  year: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  type: 'education' | 'training' | 'work'
}

const careerData: CareerItem[] = [
  {
    period: 'Sep 2016 – Aug 2022',
    year: '2016',
    title: 'Teknik Informatika',
    subtitle: 'Universitas',
    description:
      'Menempuh pendidikan S1 jurusan Teknik Informatika, mempelajari dasar-dasar ilmu komputer, algoritma, pemrograman, dan pengembangan perangkat lunak.',
    icon: <GraduationCap className="w-5 h-5" />,
    type: 'education',
  },
  {
    period: 'Feb 2023 – Apr 2023',
    year: '2023',
    title: 'Fullstack Developer',
    subtitle: 'Bootcamp',
    description:
      'Mengikuti program bootcamp intensif fullstack developer, mencakup pengembangan frontend dan backend secara menyeluruh dengan teknologi modern.',
    icon: <Code2 className="w-5 h-5" />,
    type: 'training',
  },
  {
    period: 'Jul 2023 – Dec 2025',
    year: '2023',
    title: 'Frontend Developer',
    subtitle: 'PT Tata Sarana Makmur',
    description:
      'Bergabung sebagai Frontend Developer, bertanggung jawab membangun dan memelihara berbagai dashboard internal perusahaan dalam ekosistem pembayaran digital.',
    icon: <Building2 className="w-5 h-5" />,
    type: 'work',
  },
]

const typeStyle: Record<CareerItem['type'], { dot: string; badge: string; border: string }> = {
  education: {
    dot: 'bg-blue-500',
    badge: 'bg-blue-50 text-blue-600 border border-blue-200',
    border: 'border-blue-200',
  },
  training: {
    dot: 'bg-amber-500',
    badge: 'bg-amber-50 text-amber-600 border border-amber-200',
    border: 'border-amber-200',
  },
  work: {
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    border: 'border-emerald-200',
  },
}

const MobileTimeline: React.FC = () => {
  const [visible, setVisible] = useState<boolean[]>(careerData.map(() => false))
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <div className="md:hidden px-4 pb-16">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {careerData.map((item, i) => {
            const s = typeStyle[item.type]
            return (
              <div
                key={i}
                ref={(el) => { refs.current[i] = el }}
                className="relative pl-14 transition-all duration-700"
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                {/* dot */}
                <div
                  className={`absolute left-[14px] top-4 w-3 h-3 rounded-full border-2 border-white shadow ${s.dot}`}
                />

                {/* card */}
                <div className={`bg-white rounded-xl border ${s.border} p-5 shadow-sm`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                    </div>
                    <span className={`shrink-0 flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${s.badge}`}>
                      {item.icon}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mb-2 font-medium">{item.period}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const DesktopTimeline: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="hidden md:block px-8 pb-24">
      <div className="relative max-w-5xl mx-auto">
        {/* horizontal line */}
        <div className="absolute top-[72px] left-0 right-0 h-px bg-gray-200" />

        <div className="grid grid-cols-3 gap-6">
          {careerData.map((item, i) => {
            const s = typeStyle[item.type]
            const delay = i * 150

            return (
              <div
                key={i}
                className="relative transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* year + dot */}
                <div className="flex flex-col items-center mb-0">
                  <span className="text-sm font-bold text-gray-400 mb-3">{item.year}</span>
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md z-10 ${s.dot}`} />
                </div>

                {/* card — alternating up/down */}
                <div
                  className={`mt-6 bg-white rounded-xl border ${s.border} p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.badge}`}>
                      {item.icon}
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mb-3">{item.period}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function CareerPathSection() {
  return (
    <section id="career" className="relative w-full py-16 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-12 text-center text-8xl md:text-[150px] lg:text-[180px] font-black text-gray-300/30 leading-none select-none pointer-events-none">
        JOURNEY
      </div>

      <div className="relative text-center mb-14 px-4">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-2">
          Timeline
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
          Career Path
        </h2>
      </div>

      <DesktopTimeline />
      <MobileTimeline />
    </section>
  )
}