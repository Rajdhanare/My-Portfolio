import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail, MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1117] px-6 pt-24 pb-16">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #30363d 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      ></div>

      {/* Soft glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7ee787]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#79c0ff]/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Intro content */}
        <div className="text-left">
          <p className="font-mono text-[#7ee787] text-sm mb-3">
            <span className="text-[#8b949e]">const</span> role ={" "}
            <span className="text-[#ffa657]">"MERN Stack Developer"</span>;
          </p>

          <h1 className="font-mono text-4xl md:text-5xl font-bold text-[#e6edf3] leading-tight mb-4">
            Hi, I'm <span className="text-[#d2a8ff]">Raj Dhanare</span>
          </h1>

          <p className="text-[#8b949e] text-lg mb-6 min-h-2 font-mono">
            <span className="text-[#79c0ff]">{"> "}</span>
            <Typewriter
              words={[
                "Building full-stack apps with MongoDB, Express, React & Node",
                "Turning ideas into scalable web applications",
                "Clean code. Real solutions.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={45}
              deleteSpeed={25}
              delaySpeed={1800}
            />
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["MongoDB", "Express.js", "React", "Node.js", "Tailwind", "JavaScript"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-[#30363d] text-[#c9d1d9] bg-[#161b22] hover:border-[#7ee787]/50 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="bg-[#7ee787] text-[#0d1117] font-semibold px-6 py-3 rounded-lg hover:bg-[#a3f7bf] transition-all hover:scale-105"
            >
              View Projects
            </a>
            <a
  href="/Raj_Dhanare_Resume.pdf"
  download="Raj_Dhanare_Resume.pdf"
  className="border border-[#30363d] text-[#c9d1d9] px-6 py-3 rounded-lg font-semibold hover:border-[#7ee787] hover:text-[#7ee787] transition-all"
>
  Download Resume
</a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-xl text-[#8b949e]">
            <a
              href="https://github.com/rajdhanare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7ee787] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-dhanare-b95817269"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#79c0ff] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rajkumawat95755@gmail.com"
              className="hover:text-[#ffa657] transition-colors"
            >
              <MdAttachEmail />
            </a>
          </div>
        </div>

        {/* RIGHT: Terminal / code editor card */}
        <div className="rounded-xl border border-[#30363d] bg-[#0a0e14] shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span className="ml-3 text-xs font-mono text-[#8b949e]">
              developer 
            </span>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <p>
              <span className="text-[#8b949e]">1</span>{"  "}
              <span className="text-[#d2a8ff]">const</span>{" "}
              <span className="text-[#79c0ff]">developer</span> = {"{"}
            </p>
            <p className="pl-4">
              <span className="text-[#ffa657]">name</span>:{" "}
              <span className="text-[#7ee787]">'Raj Dhanare'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#ffa657]">role</span>:{" "}
              <span className="text-[#7ee787]">'MERN Stack Developer'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#ffa657]">stack</span>: [
              <span className="text-[#7ee787]">'MongoDB'</span>,{" "}
              <span className="text-[#7ee787]">'Express'</span>,{" "}
              <span className="text-[#7ee787]">'React'</span>,{" "}
              <span className="text-[#7ee787]">'Node'</span>],
            </p>
            <p className="pl-4">
              <span className="text-[#ffa657]">passion</span>:{" "}
              <span className="text-[#7ee787]">'Building scalable web apps'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#ffa657]">available</span>:{" "}
              <span className="text-[#d2a8ff]">true</span>
              <span className="text-[#e6edf3] animate-pulse">▌</span>
            </p>
            <p>{"}"};</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 text-[#8b949e] text-2xl animate-bounce">
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default Hero;
