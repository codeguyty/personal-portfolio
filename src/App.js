import React from 'react';
import Card from './components/Card';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
        
    })
  })

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Skills />
      </div>
        <Projects />
        <ContactMe />
        <Footer />

      </div>
    </div>
  );
}

export default App;
