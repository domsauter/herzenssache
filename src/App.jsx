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

export default function App() {
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
      <Footer />
    </>
  )
}
