import { Features } from './components/landing/Features'
import { Hero } from './components/landing/Hero'
import { Navbar } from './components/landing/Navbar'
import { Pricing } from './components/landing/Pricing'
import { FinalCTA } from './components/landing/FinalCTA'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
