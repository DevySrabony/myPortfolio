import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 mt-0 border-t border-gray-300 dark:border-gray-700 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left: Name & Rights */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} <span className="font-semibold text-pink-600 dark:text-pink-400">Srabony Devy</span>. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-gray-600 dark:text-gray-300">
          <SocialIcon href="https://github.com/DevySrabony" icon={<FaGithub />} />
          <SocialIcon href="https://linkedin.com/in/srabony-devy-1479451b9" icon={<FaLinkedin />} />
          <SocialIcon href="https://facebook.com/d.ev.y.79537" icon={<FaFacebook />} />
          <SocialIcon href="https://srabonydevy.netlify.app" icon={<FaGlobe />} />
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition-colors duration-300 text-xl"
  >
    {icon}
  </a>
)

export default Footer
