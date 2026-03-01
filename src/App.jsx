import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Values from './components/Values'
import Services from './components/Services'
import About from './components/About'
import Area from './components/Area'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'

export default function App() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Services />
        <About />
        <Area />
        <Contact />
      </main>
      <Footer onOpenImpressum={() => setIsImpressumOpen(true)} />
      <Impressum isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
    </>
  )
}
