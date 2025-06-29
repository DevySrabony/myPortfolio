import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
       <Navbar></Navbar>
       <Hero></Hero>
       <AboutMe></AboutMe>
       <Skills></Skills>
       <Education></Education>
       <Projects></Projects>
       <Contact></Contact>
       <Footer></Footer>
       {/* <Experience></Experience> */}
    </div>
  );
};

export default App;