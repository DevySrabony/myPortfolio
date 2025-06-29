import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'
import project3Img from '../assets/project3.png'

const projects = [
  {
    id: 1,
    name: 'Meet My Roomie',
    image: project1Img,
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'A full-stack roommate finder web app with authentication, filters, and booking.',
    live: 'https://meetmyroomie.netlify.app',
    github: 'https://github.com/yourusername/meet-my-roomie-client',
    challenges: 'Implementing JWT authentication and managing dynamic filters.',
    future: 'Adding chat functionality and map-based roommate search.',
  },
  {
    id: 2,
    name: 'Car Rental App',
    image: project2Img,
    stack: ['React', 'MongoDB', 'Firebase Auth'],
    description: 'Responsive rental booking platform with user dashboard and booking logic.',
    live: 'https://drivenowcar.netlify.app/',
    github: 'https://github.com/yourusername/car-rental-client',
    challenges: 'Handling car booking validation and secure data flow.',
    future: 'Stripe payment and admin dashboard.',
  },
  {
    id: 3,
    name: 'React Portfolio',
    image: project3Img,
    stack: ['React', 'Tailwind CSS'],
    description: 'My personal portfolio website showcasing my projects and skills.',
    live: 'https://myy-assignment-9.netlify.app/',
    github: 'https://github.com/yourusername/portfolio',
    challenges: 'Balancing design and responsiveness.',
    future: 'Adding blog section and dark/light toggle.',
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:from-purple-300 dark:to-pink-400">
          My Projects
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 hover:shadow-pink-500/30"
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {project.name}
                </h3>
                <button
                  onClick={() => openModal(project)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg transition shadow-md hover:shadow-xl"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-xl w-full relative border-2 border-pink-400 dark:border-yellow-400 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500 font-bold"
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.name} className="rounded mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-yellow-400">{selectedProject.name}</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Description:</strong> {selectedProject.description}</p>
            <div className="mb-4">
              <strong className="text-gray-800 dark:text-gray-200">Tech Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-100 dark:bg-pink-700/20 text-pink-600 dark:text-pink-300 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Challenges:</strong> {selectedProject.challenges}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Future Plans:</strong> {selectedProject.future}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                <FaExternalLinkAlt />
                Live Site
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded transition"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Projects
