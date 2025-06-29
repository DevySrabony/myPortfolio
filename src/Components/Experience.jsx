import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'

const experienceItems = [
  {
    title: 'React Portfolio Website',
    period: 'June 2025 – Present',
    description:
      'Designed and built my own developer portfolio using React and Tailwind CSS. Includes smooth scroll, dark mode, project gallery, and responsive layout.',
  },
  {
    title: 'Meet My Roomie – Full Stack Project',
    period: 'May 2025',
    description:
      'Created a roommate-finder web app with React, Express.js, and MongoDB. Includes protected routes, JWT auth, and filtering system.',
  },
  {
    title: 'Car Rental Booking App',
    period: 'April 2025',
    description:
      'Developed a dynamic app with user login, booking flow, and car listing management using MERN stack.',
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:from-purple-300 dark:to-pink-400">
          Project Experience
        </h2>

        <div className="space-y-10">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]"
            >
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-pink-500">
                  <FaProjectDiagram size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
