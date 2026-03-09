
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='bg-gray-800 px-6 py-8  border-t pb-20 pt-12'>

      <div className='text-center mb-6'>
        <p className='text-2xl font-semibold '>Let’s build something together ❤️</p>
      </div>

      <div className='flex justify-center gap-8 mb-6'> 
        <a href="https://github.com/rajdhanare" className='hover:scale-110 text-3xl p-3 rounded-full hover:bg-white/10 hover:drop-shadow-2xl transition-all duration-300'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/raj-dhanare-b95817269" className='hover:scale-110 text-3xl p-3 rounded-full hover:bg-white/10 hover:drop-shadow-2xl transition-all duration-300'><FaLinkedin /></a>
        <a href="https://instagram.com/rajdhanare" className='hover:scale-110 text-3xl p-3 rounded-full hover:bg-white/10 hover:drop-shadow-2xl transition-all duration-300'><FaInstagramSquare /></a>
        <a href="https://wa.me/+919575501380" className='hover:scale-110 text-3xl p-3 rounded-full hover:bg-white/10 hover:drop-shadow-2xl transition-all duration-300'><FaSquareWhatsapp /></a>
      </div>

      <hr className='w-[50%] mx-auto border-white/20'/>

      <div className='text-center pt-4 text-xs text-white'>
        <p>© 2026 Raj Dhanare. All right reserved</p>
      </div>

    </footer>
  )
}

export default Footer
