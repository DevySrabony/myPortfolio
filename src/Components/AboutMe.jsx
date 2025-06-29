import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/about.json'; // Make sure the file is in /public or correctly imported

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-pink-50 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Vector Illustration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f472b6"
            fillOpacity="0.2"
            d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,165.3C560,160,640,160,720,165.3C800,171,880,181,960,170.7C1040,160,1120,128,1200,122.7C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Text Content */}
        <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700 p-10 shadow-2xl animate-fadeUp">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">
            About Me
          </h2>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4 animate-slideIn">
            👋 Hello! I’m <strong className="text-pink-600 dark:text-pink-400">Srabony Devy</strong>, a <span className="font-medium text-purple-700 dark:text-purple-300">Frontend Developer</span> who loves turning ideas into interactive digital experiences.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4 animate-slideIn delay-100">
            I specialize in <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern JavaScript frameworks. I care deeply about clean code, responsive design, and user experience.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed animate-slideIn delay-200">
            I'm currently learning backend development with <strong>Express</strong> and <strong>MongoDB</strong>, and always open to exciting collaborations.
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="animate-fadeIn">
          <Lottie animationData={animationData} loop className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out both;
        }
        .animate-slideIn {
          animation: slideIn 1s ease-out both;
        }
        .animate-slideIn.delay-100 {
          animation-delay: 0.3s;
        }
        .animate-slideIn.delay-200 {
          animation-delay: 0.6s;
        }
        .animate-fadeIn {
          animation: fadeUp 1.5s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
