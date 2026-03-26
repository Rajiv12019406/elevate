export function Hero() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700">
            Evidence-Based - 12-Week Blueprint
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Optimise posture, nutrition & sleep -
          </h1>
          <p className="mt-2 font-['Playfair_Display'] text-3xl italic text-teal-700 md:text-4xl">
            look and feel taller
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            A 12-week, evidence-based blueprint with Indian meal plans, posture
            protocols, and sleep systems to help you improve confidence,
            physique, and daily performance.
          </p>

          <div className="mt-8">
            <button className="rounded-2xl bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md">
              Get the Guide - Rs799
            </button>
            <p className="mt-3 text-sm font-medium text-slate-500">
              7-day refund guarantee
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span>1,200+ copies sold</span>
            <span className="text-slate-300">|</span>
            <span>4.8 star average rating</span>
            <span className="text-slate-300">|</span>
            <span>Expert-reviewed</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-100 to-emerald-50 blur-2xl" />
          <div className="mx-auto max-w-[360px] rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 p-7 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
                Elevate Height
              </p>
              <h3 className="mt-8 text-3xl font-bold leading-tight">
                12-Week Transformation Guide
              </h3>
              <p className="mt-4 text-sm text-teal-100">
                Posture. Nutrition. Sleep. Performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
