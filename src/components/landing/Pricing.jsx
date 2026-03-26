export function Pricing() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Choose Your Plan
          </h2>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-slate-400 line-through">MRP ₹1,499</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-600">
              Limited-time pricing
            </span>
          </div>

          <div className="mx-auto mt-7 h-[3px] w-56 rounded-full bg-gradient-to-r from-[#0ea5a3] via-[#22c55e] to-[#0b5bd3]/90" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PlanCard
            variant="basic"
            badge="CORE GUIDE"
            title="Basic"
            price="₹699"
            cta="Get Basic"
            items={[
              'Core ebook (PDF + EPUB)',
              '100+ pages of evidence-based content',
              'Posture correction routines',
              'Basic nutrition guidelines',
            ]}
          />

          <PlanCard
            variant="standard"
            badge="BEST VALUE"
            title="Standard"
            price="₹799"
            cta="Get Standard"
            items={[
              'Everything in Basic',
              'HGH Cocktail Recipes PDF',
              '7-day Indian meal plan (veg & non-veg)',
              'Sleep optimisation guide',
              'Email support',
            ]}
          />

          <PlanCard
            variant="premium"
            badge="ALL ACCESS"
            title="Premium"
            price="₹999"
            cta="Get Premium"
            items={[
              'Everything in Standard',
              '20-min video series (3 videos)',
              'Printable exercise cards',
              'Priority email support',
              'Future updates included',
            ]}
          />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs font-medium text-slate-500">
          7-day refund on unopened digital downloads. See full policy
        </p>
      </div>
    </section>
  )
}

function PlanCard({ variant, badge, title, price, cta, items }) {
  const isStandard = variant === 'standard'
  const isBlue = variant === 'basic' || variant === 'premium'

  return (
    <article
      className={[
        'rounded-2xl border p-7',
        isStandard
          ? 'border-teal-200 bg-teal-50/30'
          : 'border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]',
      ].join(' ')}
    >
      <div className="flex items-start justify-between">
        <span
          className={[
            'rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]',
            isStandard ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-600',
          ].join(' ')}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-6 text-center text-2xl font-extrabold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 text-center">
        <div className="text-4xl font-extrabold tracking-tight text-slate-900">
          {price}
        </div>
        <div className="mt-1 text-xs font-semibold text-slate-500">one-time</div>
      </div>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-700">
            <span
              className={[
                'mt-0.5 flex h-4 w-4 items-center justify-center rounded-full',
                isStandard ? 'bg-teal-600 text-white' : 'bg-blue-600 text-white',
              ].join(' ')}
            >
              ✓
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <button
          type="button"
          className={[
            'w-full rounded-md py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300',
            'hover:-translate-y-0.5 hover:shadow-md',
            isStandard
              ? 'bg-teal-600 hover:bg-teal-700'
              : isBlue
                ? 'bg-[#0b4da2] hover:bg-[#083f86]'
                : 'bg-[#0ea5a3] hover:bg-[#0c7b7a]',
          ].join(' ')}
        >
          {cta}
        </button>
      </div>
    </article>
  )
}
