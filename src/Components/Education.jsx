import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    degree: 'Secondary School Certificate (SSC)',
    year: '2016',
    institution: 'Chittagong Govt. Girls High School',
    board: 'Chittagong Education Board',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    year: '2018',
    institution: 'BMS Girls School & College',
    board: 'Chittagong Education Board',
  },
  {
    degree: "Bachelor's (Honors) - Final Year",
    year: 'Expected 2025',
    institution: 'National University',
    department: 'Zoology',
    status: 'Currently Enrolled',
  },
]

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-purple-300 dark:to-pink-400">
          Educational Qualification
        </h2>

        <div className="relative border-l-4 border-pink-400 dark:border-yellow-400 pl-6 ml-4 space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 group hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-700 dark:hover:to-pink-700 transition-all duration-500"
            >
              {/* Icon */}
              <div className="absolute -left-9 top-5 bg-pink-500 dark:bg-yellow-400 p-3 rounded-full shadow-md">
                <FaGraduationCap className="text-white text-xl" />
              </div>

              {/* Education Info */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.institution} {edu.department && `| Dept: ${edu.department}`}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {edu.board || ' '}
              </p>
              <p className="text-pink-600 dark:text-pink-300 mt-2 font-medium">
                {edu.status || edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
