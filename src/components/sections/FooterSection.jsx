
import { SectionContainer } from '../ui/SectionContainer'

const footerLinks = ['Features', 'How It Works', 'About', 'Contact']
const socialLinks = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
]

export function FooterSection() {
  return (
    <SectionContainer className="border-t border-white/10 py-10 md:py-12">
      <footer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">
            Elevate Height
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Contact: hello@elevateheight.com
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-300 transition-colors duration-300 hover:text-cyan-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href="#"
                aria-label={item.label}
                className="rounded-full border border-white/20 p-2.5 text-slate-300 transition-all duration-300 hover:border-cyan-300/70 hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </footer>
    </SectionContainer>
  )
}
