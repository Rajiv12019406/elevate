import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Will this make me grow taller?',
    answer:
      'This guide focuses on posture, body alignment, and confidence to help you look and feel taller. It does not claim permanent skeletal height increase.',
  },
  {
    question: 'Is this suitable for all ages?',
    answer:
      'It is suitable for most adults and older teens. For specific health conditions, we recommend consulting your physician before starting.',
  },
  {
    question: 'What format are the downloads?',
    answer:
      'You get an instant digital download with a complete PDF guide and bonus resources for easy access on phone or laptop.',
  },
  {
    question: 'Is there a refund policy?',
    answer:
      'Yes, we provide a 7-day refund window if you are not satisfied with your purchase.',
  },
  {
    question: 'Are the meal plans vegetarian-friendly?',
    answer:
      'Yes. The meal framework includes vegetarian options and practical Indian food swaps.',
  },
]

export function FinalCTA() {
  return (
    <section className="bg-[#f1f4f3] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <h3 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Frequently Asked Questions
        </h3>
        <div className="mt-8 space-y-2.5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[17px] font-semibold text-slate-800">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          This guide does not replace medical advice.{' '}
          <a href="#" className="font-medium text-teal-700 hover:underline">
            Read our Medical Disclaimer
          </a>
        </p>
      </div>
    </section>
  )
}
