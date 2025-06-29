import React from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'

const skills = {
  'Frontend': [
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'HTML/CSS', icon: <span className="text-orange-500 font-bold">{"</>"}</span> },
  ],
  'Backend': [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  ],
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:from-purple-300 dark:to-pink-400">
          My Skills
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
          {Object.entries(skills).map(([category, tools]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border-l-4 border-pink-500 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-purple-700 dark:via-pink-700 dark:to-red-700 text-gray-800 dark:text-white font-medium shadow-md"
                  >
                    <span className="text-xl">{icon}</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
