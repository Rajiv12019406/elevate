import { motion } from 'framer-motion'
import { steps } from '../../data/siteData'
import { SectionContainer } from '../ui/SectionContainer'

export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works" className="border-t border-white/10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A simple 3-step transformation framework
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-900/45 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-200">
                  Step {index + 1}
                </span>
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </motion.article>
          )
        })}
      </div>
    </SectionContainer>
  )
}
