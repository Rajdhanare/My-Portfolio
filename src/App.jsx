import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './pages/About'

import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Experience from './pages/Experiences'



const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Experiences' element={<Experience/>}/>
      
    </Routes>
    
    

    <Footer />
    
    </>
  )
}

export default App
