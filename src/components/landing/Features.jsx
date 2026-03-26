import { Salad, ShieldCheck, MoonStar, StretchHorizontal } from 'lucide-react'

const features = [
  {
    title: 'Posture Correction',
    description:
      'Daily mobility and alignment drills that improve body mechanics and confidence.',
    icon: StretchHorizontal,
  },
  {
    title: 'Nutrition Plans',
    description:
      'Indian meal plans designed for recovery, lean growth, and consistent energy output.',
    icon: Salad,
  },
  {
    title: 'Sleep Optimisation',
    description:
      'Simple bedtime protocols and rhythm scheduling for better hormone and recovery support.',
    icon: MoonStar,
  },
  {
    title: 'Evidence-Based',
    description:
      'Every framework is grounded in proven research and reviewed by expert practitioners.',
    icon: ShieldCheck,
  },
]

export function Features() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Why It Works
          </h2>
          <p className="mt-3 font-['Playfair_Display'] text-lg italic text-slate-500">
            Built for long-term transformation, not short-term hacks
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-[#f9fbfa] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
