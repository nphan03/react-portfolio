import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'; 
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import {useState, useRef, useEffect} from 'react'

const App = () => {
  const [activeNav, setActiveNav] = useState('#');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const eduRef = useRef(null);
  const contactRef = useRef(null);

  const isOnScroll = (sec) => {
    return sec.current.getBoundingClientRect().y + sec.current.getBoundingClientRect().height *1/3 < window.innerHeight;
  }
  useEffect (()=>{
    const handleScroll = () => {
      console.log(aboutRef.current.getBoundingClientRect().height);
      
      if (isOnScroll(homeRef)) setActiveNav('#')
      if (isOnScroll(aboutRef)) setActiveNav('#about')
      if (isOnScroll(skillsRef)) setActiveNav('#skills')
      if (isOnScroll(projectsRef)) setActiveNav('#projects')
      if (isOnScroll(eduRef)) setActiveNav('#education')
      if (isOnScroll(contactRef)) setActiveNav('#contact') 
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
})

  return (
    <>
        <Header ref={homeRef}/>
        <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
        <About ref={aboutRef}/>
        <Skills ref={skillsRef}/>
        <Projects ref={projectsRef}/>
        <Education ref={eduRef}/>
        <Contact ref={contactRef}/>
        <Footer />
    </>
  )
};

export default App;