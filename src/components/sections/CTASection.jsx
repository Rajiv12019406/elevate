import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SectionContainer } from '../ui/SectionContainer'

export function CTASection() {
  return (
    <SectionContainer className="border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/15 bg-gradient-to-r from-slate-900 via-[#0a1330] to-slate-900 p-8 text-center md:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-300">
          Limited Enrolment Open
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Start Your Journey Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Join Elevate Height and build momentum with a high-impact system
          designed to deliver measurable transformation.
        </p>
        <div className="mt-8">
          <PrimaryButton>
            Join Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </PrimaryButton>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
