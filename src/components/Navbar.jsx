import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-cyan from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-md text-white z-50 shadow-md bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400">
          Raj Dhanare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><Link to='/' className="hover:text-cyan-400">Home</Link></li>
          <li><Link to='/About' className="hover:text-cyan-400">About</Link></li>
          <li><Link to='/Projects' className="hover:text-cyan-400">Projects</Link></li>
          <li><Link to='/Contact' className="hover:text-cyan-400">Contact</Link></li>
          <li><Link to='/Experiences' className="hover:text-cyan-400">Experiences</Link></li>
        </ul>

        {/* Mobile icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose /> : <TiThMenu />}
          </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800/70 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li><Link to='/' onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Home</Link></li>
            <li><Link to='/About' onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">About</Link></li>
            <li><Link to='/Projects' onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Projects</Link></li>
            <li><Link to='/Contact' onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Contact</Link></li>
            <li><Link to='/Experiences' onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400">Experiences</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;