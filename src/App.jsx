import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Hero,
  About,
  Projects,
  Leadership,
  TechFocus,
  Education,
  Skills,
  Contact,
  Navbar,
  Footer,
} from './components'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'leadership', 'tech-focus', 'education', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% -30%, #1e3a5f 0%, transparent 60%)',
          opacity,
        }}
      />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Leadership />
        <TechFocus />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
