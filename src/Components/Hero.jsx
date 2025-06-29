// // import React from 'react'
// // import {
// //   FiDownload,
// //   FiGithub,
// //   FiLinkedin,
// //   FiTwitter,
// //   FiFacebook,
// // } from 'react-icons/fi'
// // import image from '../assets/formalImg.jpeg'

// // const Hero = () => {
// //   return (
// //     <section
// //       id="hero"
// //       className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 py-20 bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
// //     >
// //       {/* Left: Text Content */}
// //       <div
// //         className="text-center md:text-left max-w-xl space-y-6"
// //         style={{ animation: 'fadeInUp 1s ease forwards' }}
// //       >
// //         <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 tracking-wide opacity-0 animate-fadeInDelay">
// //           Hi, I'm
// //         </h2>

// //         {/* Name with static beautiful gradient */}
// //         <h1
// //           className="
// //             text-6xl
// //             font-bold
// //             tracking-wide
// //             leading-tight
// //             bg-gradient-to-r
// //             from-purple-600
// //             via-pink-500
// //             to-red-500
// //             bg-clip-text
// //             text-transparent
// //             drop-shadow-[0_0_12px_rgba(219,39,119,0.7)]
// //           "
// //           style={{
// //             letterSpacing: '-0.02em',
// //           }}
// //         >
// //           Srabony Devy
// //         </h1>

// //         {/* Typing effect */}
// //         <h3
// //           className="text-3xl font-semibold text-gray-800 dark:text-white min-h-[3rem] opacity-0 animate-fadeInDelay"
// //           style={{ animationDelay: '0.4s' }}
// //         >
// //           <TypingDesignation />
// //         </h3>

// //         <p
// //           className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-md opacity-0 animate-fadeInDelay"
// //           style={{ animationDelay: '0.6s' }}
// //         >
// //           I build responsive websites using React, Tailwind CSS, and modern web
// //           technologies. Currently focused on full-stack development with Express
// //           and MongoDB.
// //         </p>

// //         {/* Resume Button */}
// //         <a
// //           href="/resume.pdf"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 shadow-lg hover:shadow-pink-500 text-white font-semibold px-10 py-4 rounded-lg transition transform hover:scale-110 duration-300 select-none opacity-0 animate-fadeInDelay"
// //           style={{ animationDelay: '0.8s' }}
// //         >
// //           <FiDownload className="text-2xl" />
// //           Download Resume
// //         </a>

// //         {/* Social Links */}
// //         <div
// //           className="flex gap-6 mt-8 opacity-0 animate-fadeInDelay"
// //           style={{ animationDelay: '1s' }}
// //         >
// //           <a
// //             href="https://github.com/DevySrabony"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
// //           >
// //             <FiGithub />
// //           </a>
// //           <a
// //             href="https://www.linkedin.com/in/srabony-devy-1479451b9/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
// //           >
// //             <FiLinkedin />
// //           </a>
// //           <a
// //             href="https://x.com/DevySrabonyY"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
// //           >
// //             <FiTwitter />
// //           </a>
// //           <a
// //             href="https://www.facebook.com/d.ev.y.79537"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
// //           >
// //             <FiFacebook />
// //           </a>
// //         </div>
// //       </div>

// //       {/* Right: Profile Image with animation */}
// //       <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-8 border-pink-500 dark:border-yellow-400 flex-shrink-0 animate-bounceSlow">
// //         {/* Animated colored blobs */}
// //         <span className="absolute -top-10 -right-10 w-44 h-44 bg-pink-400 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></span>
// //         <span className="absolute -bottom-10 -left-10 w-44 h-44 bg-red-500 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob"></span>

// //         {/* Zoomed image */}
// //         <div className="overflow-hidden w-full h-full rounded-full">
// //           <img
// //             src={image}
// //             alt="Srabony Devy"
// //             className="object-cover w-full h-full transform scale-110 transition-transform duration-700"
// //             style={{ objectPosition: 'center' }}
// //           />
// //         </div>
// //       </div>

// //       {/* Scroll Down Arrow */}
// //       <ScrollDownArrow />

// //       {/* Animations styles */}
// //       <style>{`
// //         @keyframes fadeInUp {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         @keyframes blob {
// //           0%, 100% {
// //             transform: translate(0, 0) scale(1);
// //           }
// //           33% {
// //             transform: translate(30px, -50px) scale(1.1);
// //           }
// //           66% {
// //             transform: translate(-20px, 20px) scale(0.9);
// //           }
// //         }
// //         @keyframes gradientShift {
// //           0% {
// //             background-position: 0% 50%;
// //           }
// //           50% {
// //             background-position: 100% 50%;
// //           }
// //           100% {
// //             background-position: 0% 50%;
// //           }
// //         }
// //         @keyframes bounceSlow {
// //           0%, 100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-15px);
// //           }
// //         }

// //         .animate-blob {
// //           animation: blob 7s infinite;
// //         }
// //         .animation-delay-2000 {
// //           animation-delay: 2s;
// //         }
// //         .animate-fadeInDelay {
// //           animation: fadeInUp 0.8s forwards;
// //           animation-fill-mode: forwards;
// //           opacity: 0;
// //           animation-delay: var(--animation-delay, 0s);
// //         }
// //         .animate-gradientShift {
// //           background-size: 200% 200%;
// //           animation-name: gradientShift;
// //           animation-duration: 6s;
// //           animation-iteration-count: infinite;
// //           animation-direction: alternate;
// //           animation-timing-function: ease-in-out;
// //         }
// //         .animate-bounceSlow {
// //           animation: bounceSlow 4s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </section>
// //   )
// // }

// // // Typing effect component
// // const TypingDesignation = () => {
// //   const [text, setText] = React.useState('')
// //   const words = ['Frontend Developer', 'Web Developer', 'Full Stack Developer']
// //   const [wordIndex, setWordIndex] = React.useState(0)
// //   const [charIndex, setCharIndex] = React.useState(0)
// //   const [deleting, setDeleting] = React.useState(false)

// //   React.useEffect(() => {
// //     const timeout = setTimeout(() => {
// //       if (!deleting) {
// //         setText(words[wordIndex].slice(0, charIndex + 1))
// //         setCharIndex(charIndex + 1)
// //         if (charIndex + 1 === words[wordIndex].length) {
// //           setDeleting(true)
// //         }
// //       } else {
// //         setText(words[wordIndex].slice(0, charIndex - 1))
// //         setCharIndex(charIndex - 1)
// //         if (charIndex - 1 === 0) {
// //           setDeleting(false)
// //           setWordIndex((wordIndex + 1) % words.length)
// //         }
// //       }
// //     }, deleting ? 50 : 150)

// //     return () => clearTimeout(timeout)
// //   }, [charIndex, deleting, wordIndex, words])

// //   return <span>{text}|</span>
// // }

// // // Scroll down arrow component
// // const ScrollDownArrow = () => (
// //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       className="h-8 w-8 text-pink-600 dark:text-yellow-400"
// //       fill="none"
// //       viewBox="0 0 24 24"
// //       stroke="currentColor"
// //       strokeWidth={2}
// //     >
// //       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
// //     </svg>
// //   </div>
// // )

// // export default Hero



// import React from 'react'
// import {
//   FiDownload,
//   FiGithub,
//   FiLinkedin,
//   FiTwitter,
//   FiFacebook,
// } from 'react-icons/fi'
// import image from '../assets/formalImg.jpeg'

// const Hero = () => {
 

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 py-20 bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
//     >
//       {/* Left: Text Content */}
//       <div
//         className="text-center md:text-left max-w-xl space-y-6"
//         style={{ animation: 'fadeInUp 1s ease forwards' }}
//       >
//         <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 tracking-wide opacity-0 animate-fadeInDelay">
//           Hi, I'm
//         </h2>

//         {/* Name with static beautiful gradient */}
//         <h1
//           className="
//             text-6xl
//             font-bold
//             tracking-wide
//             leading-tight
//             bg-gradient-to-r
//             from-purple-600
//             via-pink-500
//             to-red-500
//             bg-clip-text
//             text-transparent
//             drop-shadow-[0_0_12px_rgba(219,39,119,0.7)]
//           "
//           style={{
//             letterSpacing: '-0.02em',
//           }}
//         >
//           Srabony Devy
//         </h1>

//         {/* Typing effect */}
//         <h3
//           className="text-3xl font-semibold text-gray-800 dark:text-white min-h-[3rem] opacity-0 animate-fadeInDelay"
//           style={{ animationDelay: '0.4s' }}
//         >
//           <TypingDesignation />
//         </h3>

//         <p
//           className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-md opacity-0 animate-fadeInDelay"
//           style={{ animationDelay: '0.6s' }}
//         >
//           I build responsive websites using React, Tailwind CSS, and modern web
//           technologies. Currently focused on full-stack development with Express
//           and MongoDB.
//         </p>

//         {/* Resume Download Button using download attribute */}
//         <a
//         href="https://drive.google.com/uc?export=download&id=1GSypbjLBiTMtxpRUb3at_Rk68-Slx7ci"
//         download="SrabonyDevy_Resume.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 shadow-lg hover:shadow-pink-500 text-white font-semibold px-10 py-4 rounded-lg transition transform hover:scale-110 duration-300 select-none"
//         >
//         <FiDownload className="text-2xl" />
//         Download Resume
//         </a>


//         {/* Social Links */}
//         <div
//           className="flex gap-6 mt-8 opacity-0 animate-fadeInDelay"
//           style={{ animationDelay: '1s' }}
//         >
//           <a
//             href="https://github.com/DevySrabony"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
//           >
//             <FiGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/srabony-devy-1479451b9/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
//           >
//             <FiLinkedin />
//           </a>
//           <a
//             href="https://x.com/DevySrabonyY"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
//           >
//             <FiTwitter />
//           </a>
//           <a
//             href="https://www.facebook.com/d.ev.y.79537"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-3xl"
//           >
//             <FiFacebook />
//           </a>
//         </div>
//       </div>

//       {/* Right: Profile Image with animation */}
//       <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-8 border-pink-500 dark:border-yellow-400 flex-shrink-0 animate-bounceSlow">
//         {/* Animated colored blobs */}
//         <span className="absolute -top-10 -right-10 w-44 h-44 bg-pink-400 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></span>
//         <span className="absolute -bottom-10 -left-10 w-44 h-44 bg-red-500 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob"></span>

//         {/* Zoomed image */}
//         <div className="overflow-hidden w-full h-full rounded-full">
//           <img
//             src={image}
//             alt="Srabony Devy"
//             className="object-cover w-full h-full transform scale-110 transition-transform duration-700"
//             style={{ objectPosition: 'center' }}
//           />
//         </div>
//       </div>

//       {/* Scroll Down Arrow */}
//       <ScrollDownArrow />

//       {/* Animations styles */}
//       <style>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes bounceSlow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animate-fadeInDelay {
//           animation: fadeInUp 0.8s forwards;
//           animation-fill-mode: forwards;
//           opacity: 0;
//           animation-delay: var(--animation-delay, 0s);
//         }
//         .animate-bounceSlow {
//           animation: bounceSlow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   )
// }

// // Typing effect component
// const TypingDesignation = () => {
//   const [text, setText] = React.useState('')
//   const words = ['Frontend Developer', 'Web Developer', 'Full Stack Developer']
//   const [wordIndex, setWordIndex] = React.useState(0)
//   const [charIndex, setCharIndex] = React.useState(0)
//   const [deleting, setDeleting] = React.useState(false)

//   React.useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (!deleting) {
//         setText(words[wordIndex].slice(0, charIndex + 1))
//         setCharIndex(charIndex + 1)
//         if (charIndex + 1 === words[wordIndex].length) {
//           setDeleting(true)
//         }
//       } else {
//         setText(words[wordIndex].slice(0, charIndex - 1))
//         setCharIndex(charIndex - 1)
//         if (charIndex - 1 === 0) {
//           setDeleting(false)
//           setWordIndex((wordIndex + 1) % words.length)
//         }
//       }
//     }, deleting ? 50 : 150)

//     return () => clearTimeout(timeout)
//   }, [charIndex, deleting, wordIndex, words])

//   return <span>{text}|</span>
// }

// // Scroll down arrow component
// const ScrollDownArrow = () => (
//   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-8 w-8 text-pink-600 dark:text-yellow-400"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   </div>
// )

// export default Hero

import React from 'react'
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
} from 'react-icons/fi'
import image from '../assets/formalImg.jpeg'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 px-6 py-20 bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Left: Text Content */}
      <div
        className="text-center md:text-left max-w-xl space-y-6 w-full md:w-auto"
        style={{ animation: 'fadeInUp 1s ease forwards' }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 tracking-wide opacity-0 animate-fadeInDelay">
          Hi, I'm
        </h2>

        {/* Name with static beautiful gradient */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold
            tracking-wide
            leading-tight
            bg-gradient-to-r
            from-purple-600
            via-pink-500
            to-red-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_12px_rgba(219,39,119,0.7)]
          "
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          Srabony Devy
        </h1>

        {/* Typing effect */}
        <h3
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white min-h-[3rem] opacity-0 animate-fadeInDelay"
          style={{ animationDelay: '0.4s' }}
        >
          <TypingDesignation />
        </h3>

        <p
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg max-w-md mx-auto md:mx-0 opacity-0 animate-fadeInDelay"
          style={{ animationDelay: '0.6s' }}
        >
          I build responsive websites using React, Tailwind CSS, and modern web
          technologies. Currently focused on full-stack development with Express
          and MongoDB.
        </p>

        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1GSypbjLBiTMtxpRUb3at_Rk68-Slx7ci"
          download="SrabonyDevy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 shadow-lg hover:shadow-pink-500 text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-lg transition transform hover:scale-105 duration-300 select-none mx-auto md:mx-0 opacity-0 animate-fadeInDelay"
          style={{ animationDelay: '0.8s' }}
        >
          <FiDownload className="text-2xl" />
          Download Resume
        </a>

        {/* Social Links */}
        <div
          className="flex gap-6 mt-8 justify-center md:justify-start opacity-0 animate-fadeInDelay"
          style={{ animationDelay: '1s' }}
        >
          {[{
            href: 'https://github.com/DevySrabony',
            icon: <FiGithub />
          }, {
            href: 'https://www.linkedin.com/in/srabony-devy-1479451b9/',
            icon: <FiLinkedin />
          }, {
            href: 'https://x.com/DevySrabonyY',
            icon: <FiTwitter />
          }, {
            href: 'https://www.facebook.com/d.ev.y.79537',
            icon: <FiFacebook />
          }].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition text-2xl sm:text-3xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Profile Image with animation */}
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-6 sm:border-8 border-pink-500 dark:border-yellow-400 flex-shrink-0 animate-bounceSlow mx-auto md:mx-0">
        {/* Animated colored blobs */}
        <span className="absolute -top-10 -right-10 w-36 h-36 sm:w-44 sm:h-44 bg-pink-400 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></span>
        <span className="absolute -bottom-10 -left-10 w-36 h-36 sm:w-44 sm:h-44 bg-red-500 rounded-full opacity-30 filter blur-3xl mix-blend-multiply animate-blob"></span>

        {/* Zoomed image */}
        <div className="overflow-hidden w-full h-full rounded-full">
          <img
            src={image}
            alt="Srabony Devy"
            className="object-cover w-full h-full transform scale-110 transition-transform duration-700"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <ScrollDownArrow />

      {/* Animations styles */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeInDelay {
          animation: fadeInUp 0.8s forwards;
          animation-fill-mode: forwards;
          opacity: 0;
          animation-delay: var(--animation-delay, 0s);
        }
        .animate-bounceSlow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

// Typing effect component (same as your original)
const TypingDesignation = () => {
  const [text, setText] = React.useState('')
  const words = ['Frontend Developer', 'Web Developer', 'Full Stack Developer']
  const [wordIndex, setWordIndex] = React.useState(0)
  const [charIndex, setCharIndex] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(words[wordIndex].slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === words[wordIndex].length) {
          setDeleting(true)
        }
      } else {
        setText(words[wordIndex].slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, deleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words])

  return <span>{text}|</span>
}

// Scroll down arrow component (same as your original)
const ScrollDownArrow = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-pink-600 dark:text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
)

export default Hero
