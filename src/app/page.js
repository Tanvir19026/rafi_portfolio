'use client'
import { useState, useRef, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Toggle from '@/components/sub/Toggle'
import Load from '@/components/sub/Load'

// Define all sections here; you can comment/remove any section safely
const sections = [
  { id: 'home', component: <Hero /> },
  { id: 'about', component: <About /> },
  { id: 'experience', component: <Experience /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects', component: <Projects /> },
  // { id: 'reviews', component: <Reviews /> }, // optional
  // { id: 'pricing', component: <PricingPlans /> }, // optional
  { id: 'contact', component: <Contact /> },
]

export default function Home() {
  const [activeId, setActiveId] = useState('home')
  const compsRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!compsRef.current) return

    // Disconnect previous observer if exists
    if (observerRef.current) observerRef.current.disconnect()

    const elements = compsRef.current.querySelectorAll('[data-section-id]')
    if (!elements.length) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.dataset.sectionId)
          }
        })
      },
      { threshold: 0.3 }
    )

    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={activeId} />
        <div ref={compsRef}>
          {sections.map((section) => (
            <div key={section.id} data-section-id={section.id}>
              {section.component}
            </div>
          ))}
        </div>
      </Toggle>
    </>
  )
}
