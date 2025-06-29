// src/pages/ProjectDetails.jsx

import React from 'react'
import { useParams } from 'react-router-dom'

const projectData = {
  1: {
    name: 'Meet My Roomie',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'A full-stack roommate finder web app with authentication, filters, and booking.',
    live: 'https://meetmyroomie.netlify.app',
    github: 'https://github.com/yourusername/meet-my-roomie-client',
    challenges: 'Implementing JWT authentication and managing dynamic filters.',
    future: 'Adding chat functionality and map-based roommate search.',
  },
  2: {
    name: 'Car Rental App',
    stack: ['React', 'MongoDB', 'Firebase Auth'],
    description: 'Responsive rental booking platform with user dashboard and booking logic.',
    live: 'https://mycarsite.netlify.app',
    github: 'https://github.com/yourusername/car-rental-client',
    challenges: 'Handling car booking validation and secure data flow.',
    future: 'Stripe payment and admin management dashboard.',
  },
  3: {
    name: 'React Portfolio',
    stack: ['React', 'Tailwind CSS'],
    description: 'My personal portfolio website showcasing my projects and skills.',
    live: 'https://srabonydevy.netlify.app',
    github: 'https://github.com/yourusername/portfolio',
    challenges: 'Balancing aesthetics with responsiveness.',
    future: 'Adding blog section and multilingual support.',
  },
}

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) return <div className="text-center p-10">Project not found.</div>

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4 text-lg">{project.description}</p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Tech Stack:</h3>
        <ul className="list-disc list-inside">
          {project.stack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <p className="mb-4"><strong>Challenges:</strong> {project.challenges}</p>
      <p className="mb-4"><strong>Future Plans:</strong> {project.future}</p>

      <div className="flex gap-4 mt-6">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded">
          Live Site
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded">
          GitHub Code
        </a>
      </div>
    </div>
  )
}

export default ProjectDetails
