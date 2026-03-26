import { motion } from 'framer-motion'
import { stats, testimonials } from '../../data/siteData'
import { SectionContainer } from '../ui/SectionContainer'

export function SocialProofSection() {
  return (
    <SectionContainer className="border-t border-white/10">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
          >
            <p className="text-3xl font-semibold tracking-tight text-cyan-300">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="leading-relaxed text-slate-200">"{item.quote}"</p>
            <footer className="mt-4 text-sm text-slate-400">
              {item.name} - {item.role}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionContainer>
  )
}
