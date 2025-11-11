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

const sections = [
  { id: 'home', component: <Hero /> },
  { id: 'about', component: <About /> },
  { id: 'experience', component: <Experience /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
]

export default function Home() {
  const [activeId, setActiveId] = useState('home')
  const compsRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!compsRef.current) return

    // Stop previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

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

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={activeId} />
        <div ref={compsRef}>
          {sections.map((section) => (
            <div
              key={section.id} // ensures unique key
              data-section-id={section.id}
              className="relative"
            >
              {section.component}
            </div>
          ))}
        </div>
      </Toggle>
    </>
  )
}
