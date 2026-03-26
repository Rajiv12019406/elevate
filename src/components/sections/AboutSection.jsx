import { motion } from 'framer-motion'
import { aboutPoints } from '../../data/siteData'
import { SectionContainer } from '../ui/SectionContainer'

export function AboutSection() {
  return (
    <SectionContainer id="about" className="border-t border-white/10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
            About Elevate Height
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Growth is not random. It is built intentionally.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            We combine behavior science, performance coaching, and modern digital
            tools to help ambitious individuals break limits and build a better
            future with confidence.
          </p>
        </motion.div>

        <div className="space-y-4">
          {aboutPoints.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-3 flex items-center gap-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}
