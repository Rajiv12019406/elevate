import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SectionContainer } from '../ui/SectionContainer'

export function HeroSection() {
  return (
    <SectionContainer className="relative pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.2),transparent_54%)]" />
      <div className="absolute -left-20 top-8 -z-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl md:h-72 md:w-72" />
      <div className="absolute -right-16 bottom-0 -z-10 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl md:h-80 md:w-80" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="mx-auto mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"
      >
        Elevate Height
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mx-auto max-w-4xl text-balance text-center text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
      >
        Elevate Your Potential to New Heights
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-slate-300 md:text-lg"
      >
        Transform your routines, sharpen your mindset, and accelerate your
        growth with a premium system designed for ambitious professionals and
        students.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <PrimaryButton>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </PrimaryButton>
        <button className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors duration-300 hover:border-cyan-300/70 hover:text-cyan-200">
          Join Now
        </button>
      </motion.div>
    </SectionContainer>
  )
}
