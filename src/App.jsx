import React, { useEffect, useState } from 'react'
import "./index.css"
import Header from './Components/header/header'
import Navbar from './Components/navbar/navbar'
import About from './Components/About/about'
// import Experience from './Components/Experience/Experience'
import Footer from './Components/footer/footer'
import Contact from './Components/Contact/contact'
import Projects from './Components/Projects/Projects'
import Education from './Components/education/Education'
import Skills from './Components/skills/Skills'
// import DarkMode from './Components/DarkMode/DarkMode'

function App() {
  

  return (
    <>
    <Header />
    <Navbar />
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App