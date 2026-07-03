import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] px-6 pt-12 pb-8 text-[#c9d1d9]">
      <div className="text-center mb-6">
        <p className="font-mono text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">raj@portfolio</span>
          <span className="text-[#8b949e]">:~$ </span>
          <span className="text-[#e6edf3]">Let's build something together ❤️</span>
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-6 text-xl">
        <a
          href="https://github.com/rajdhanare"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full hover:bg-[#161b22] hover:text-[#7ee787] hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-dhanare-b95817269"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full hover:bg-[#161b22] hover:text-[#79c0ff] hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/rajdhanare"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full hover:bg-[#161b22] hover:text-[#f778ba] hover:scale-110 transition-all duration-300"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://wa.me/919575501380"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full hover:bg-[#161b22] hover:text-[#ffa657] hover:scale-110 transition-all duration-300"
        >
          <FaSquareWhatsapp />
        </a>
      </div>

      <hr className="w-[50%] mx-auto border-[#30363d]" />

      <div className="text-center pt-4 text-xs font-mono text-[#8b949e]">
        <p>© 2026 Raj Dhanare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
