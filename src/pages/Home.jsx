import React from 'react'

import Hero from "../components/Hero"
import About from "../pages/About"
import Skills from '../components/Skills'
import Projects from "../pages/Projects"
import Contact from '../pages/Contact'
import Experience from '../pages/Experiences'




// import Projects from './pages/Projects'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Contact/>
        <Experience/>
    </div>
  )
}

export default Home
