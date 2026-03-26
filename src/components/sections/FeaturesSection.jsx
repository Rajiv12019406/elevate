import { motion } from 'framer-motion'
import { features } from '../../data/siteData'
import { SectionContainer } from '../ui/SectionContainer'

export function FeaturesSection() {
  return (
    <SectionContainer id="features" className="border-t border-white/10">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Everything you need to elevate in one ecosystem
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-500/[0.06]"
            >
              <div className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-300/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {feature.description}
              </p>
            </motion.article>
          )
        })}
      </div>
    </SectionContainer>
  )
}
