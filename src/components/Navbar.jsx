import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const links = [
  { name: "home.jsx", path: "/", dot: "#7ee787" },
  { name: "about.jsx", path: "/About", dot: "#d2a8ff" },
  { name: "projects.jsx", path: "/Projects", dot: "#79c0ff" },
  { name: "experience.jsx", path: "/Experiences", dot: "#ffa657" },
  { name: "contact.jsx", path: "/Contact", dot: "#f778ba" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d] text-[#c9d1d9] z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="font-mono text-lg md:text-xl font-bold">
          <span className="text-[#7ee787]">raj</span>
          <span className="text-[#8b949e]">.dev</span>
        </Link>

        {/* Desktop Menu - editor tabs style */}
        <ul className="hidden md:flex gap-1">
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-t-md font-mono text-sm border-b-2 transition-colors ${
                    active
                      ? "text-[#e6edf3] border-[#7ee787] bg-[#161b22]"
                      : "text-[#8b949e] border-transparent hover:text-[#e6edf3] hover:bg-[#161b22]/60"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: link.dot }}
                  ></span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile icon */}
        <button
          className="md:hidden text-2xl text-[#c9d1d9]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#30363d]">
          <ul className="flex flex-col items-center gap-1 py-4">
            {links.map((link) => (
              <li key={link.path} className="w-full text-center">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 font-mono text-sm text-[#c9d1d9] hover:text-[#7ee787] hover:bg-[#161b22]"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: link.dot }}
                  ></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
