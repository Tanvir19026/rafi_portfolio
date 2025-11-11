'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, animate } from 'framer-motion'
import Heading from './sub/Heading'
import { projectsData, projectsButton } from '@/assets'

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      className="w-[300px] sm:w-[350px] bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <img
        src={data.url}
        alt={data.name}
        className="rounded-xl mb-3 object-cover w-full h-48"
      />
      <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
      <p className="text-gray-300 mb-3">{data.desc}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {data.tech.map((tech, i) => (
          <span
            key={i}
            className="text-sm px-2 py-1 bg-yellow-500 text-black rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-2">
        {data.liveLink && (
          <a
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Live
          </a>
        )}
        {data.githubLink && (
          <a
            href={data.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const buttonsRef = useRef([])

  // Animate selected button
  useEffect(() => {
    buttonsRef.current.forEach((btn, idx) => {
      if (!btn) return
      animate(btn, { opacity: idx === activeIndex ? 1 : 0.5, scale: idx === activeIndex ? 1.2 : 1 })
    })
  }, [activeIndex])

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text="Projects" />
      
      {/* Tech Filter Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            ref={(el) => (buttonsRef.current[i] = el)}
            onClick={() => {
              setTech(text)
              setActiveIndex(i)
            }}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
          >
            {text}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => tech === 'All' || project.tech.includes(tech))
          .map((data, i) => (
            <ProjectCard key={i} data={data} />
          ))}
      </div>
    </div>
  )
}

export default Projects
