import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Designed and developed a modern personal portfolio using React, Vite and Tailwind CSS with responsive UI, smooth animations, resume download, and project showcase.",
      tags: ["React", "Tailwind CSS", "Vite"],

      github: "https://github.com/Rajdhanare/My-Portfolio",
      live: "https://my-portfolio-five-bice-59.vercel.app",
    },
    {
      title: "Swiggy Clone",
      desc: "A full-stack MERN Swiggy Clone project is currently under development. It will include authentication, cart functionality, food ordering, and REST APIs.",
      tags: ["MongoDB", "Express", "React", "Node.js"],

      github: "#",
      live: "#",
    },
    {
      title: "MERN Stack Project",
      desc: "A complete MERN Stack application is currently under development. More exciting features will be added soon.",
      tags: ["MongoDB", "Express", "React", "Node.js"],

      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
          03. Selected Work
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e6edf3] mb-12">
          My <span className="text-[#ffa657]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col hover:border-[#7ee787]/60 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <FaGithub className="text-2xl text-[#8b949e]" />

                <span className="text-xs font-mono px-2 py-1 rounded-full border border-[#30363d] text-[#8b949e]">
                  Public
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#e6edf3] mb-3">
                {item.title}
              </h3>

              <p className="text-[#8b949e] text-sm leading-6 flex-1">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-[#7ee787]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition ${
                    item.github === "#"
                      ? "pointer-events-none opacity-50 border-[#30363d] text-[#8b949e]"
                      : "border-[#30363d] text-[#c9d1d9] hover:border-[#7ee787] hover:text-[#7ee787]"
                  }`}
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition ${
                    item.live === "#"
                      ? "pointer-events-none opacity-50 bg-[#30363d] text-[#8b949e]"
                      : "bg-[#7ee787] text-[#0d1117] hover:bg-[#a3f7bf] font-semibold"
                  }`}
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;