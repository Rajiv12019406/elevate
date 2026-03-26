const navLinks = ['Home', 'Product', 'Bundles', 'About', 'Blog', 'Contact']

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f4f7f5]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900">
          Elevate Height
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-teal-700"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md">
          Buy Now - Rs799
        </button>
      </div>
    </header>
  )
}
