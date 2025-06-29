// import { useState } from 'react'
// import { FiMenu, FiX } from 'react-icons/fi'
// import logo from '../assets/portfolioLogo.png' // Make sure the path is correct

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const toggleMenu = () => setMenuOpen(!menuOpen)

//   const navLinks = (
//     <>
//       <a href="#about" className="hover:text-yellow-300 transition duration-300 text-xl">About</a>
//       <a href="#skills" className="hover:text-yellow-300 transition duration-300 text-xl">Skills</a>
//       <a href="#projects" className="hover:text-yellow-300 transition duration-300 text-xl">Projects</a>
//       <a href="#contact" className="hover:text-yellow-300 transition duration-300 text-xl">Contact</a>
//     </>
//   )

//   return (
//     <nav className="fixed w-full z-50 shadow-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center text-white">
//         {/* Logo only */}
//         <img src={logo} alt="Logo" className="h-10 w-auto drop-shadow rounded-4xl" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-sm font-semibold">
//           {navLinks}
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white text-2xl">
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-pink-500 to-red-500 px-6 py-4 space-y-4 text-white font-medium">
//           {navLinks}
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/portfolioLogo.png' // Make sure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = ['about', 'skills', 'projects', 'contact']

  const navLinks = navItems.map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className="relative text-lg font-medium text-white uppercase tracking-wide group transition duration-300"
    >
      <span className="group-hover:text-yellow-300 transition">
        {section}
      </span>
      {/* Underline Animation */}
      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
    </a>
  ))

  return (
    <nav className="fixed w-full z-50 shadow-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg shadow-md" />
        <span className="text-white font-bold text-2xl tracking-wide select-none">
            Srabony Devy
        </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-pink-500 to-red-500 px-6 py-4 space-y-4 text-white font-medium text-center">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="block text-lg uppercase hover:text-yellow-300 transition duration-300"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
