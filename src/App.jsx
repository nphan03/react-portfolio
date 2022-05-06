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
  
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
    </>
  )
};

export default App;