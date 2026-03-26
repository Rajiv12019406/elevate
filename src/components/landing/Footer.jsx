const productLinks = ['The Guide', 'Bundles & Pricing', 'Testimonials']
const companyLinks = ['About Us', 'Blog', 'Contact', 'Affiliate Program']
const legalLinks = [
  'Privacy Policy',
  'Terms & Conditions',
  'Refund Policy',
  'Medical Disclaimer',
  'Cookie Policy',
]

export function Footer() {
  return (
    <footer className="bg-[#061a35] text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8 md:py-14">
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">
            Elevate <span className="text-teal-400">Height</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300/95">
            Evidence-based 12-week blueprint for posture, nutrition, and sleep.
            Real results, realistic expectations.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200/90">
            Product
          </h4>
          <ul className="mt-4 space-y-2.5">
            {productLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-300/95 transition-colors duration-200 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200/90">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-300/95 transition-colors duration-200 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200/90">
            Legal
          </h4>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-300/95 transition-colors duration-200 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Elevate Height. All rights reserved.</p>
          <a
            href="#"
            className="font-semibold text-amber-200/90 transition-colors duration-200 hover:text-amber-100"
          >
            Medical Disclaimer
          </a>
        </div>
      </div>
    </footer>
  )
}
