export function PrimaryButton({ children }) {
  return (
    <button className="group inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-400 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_26px_rgba(34,211,238,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
      {children}
    </button>
  )
}
