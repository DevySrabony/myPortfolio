import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24  px-2 lg:px-6 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:from-purple-300 dark:to-pink-400 animate-gradientText">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-16 text-lg max-w-xl mx-auto">
          I’m open to internships, freelance work, collaborations, or just a friendly chat. Reach out!
        </p>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
          {/* Email */}
          <ContactCard
            icon={<FiMail className="text-4xl text-pink-600 dark:text-pink-400 group-hover:animate-pingOnce" />}
            label="Email"
            value="srabonydevy@gmail.com"
            link="mailto:srabonydevy@gmail.com"
          />
          {/* Phone */}
          <ContactCard
            icon={<FiPhoneCall className="text-4xl text-purple-600 dark:text-purple-400 group-hover:animate-pingOnce" />}
            label="Phone"
            value="+880 1882773360"
            link="tel:+8801882773360"
          />
          {/* WhatsApp */}
         <ContactCard
        icon={<FaWhatsappSquare className="text-4xl text-green-600 dark:text-green-400 group-hover:animate-pingOnce" />}
        label="WhatsApp"
        value="+880 1882773360"
        link="https://wa.me/8801882773360"
        />

  
        </div>
      </div>

      <style>{`
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        @keyframes pingOnce {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .group-hover\\:animate-pingOnce:hover {
          animation: pingOnce 0.6s ease-in-out;
        }
      `}</style>
    </section>
  )
}

const ContactCard = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
  >
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{label}</h4>
    <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{value}</p>
  </a>
)

export default Contact
