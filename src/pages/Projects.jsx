import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import PortfolioImg from "../assets/Portfolio.avif";
import SwiggyImg from "../assets/swiggy.png";
import MernImg from "../assets/laptop.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: PortfolioImg,
      desc: "Designed and developed a modern responsive developer portfolio using React, Vite and Tailwind CSS with smooth animations, responsive layout and resume download feature.",
      tags: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Rajdhanare/My-Portfolio",
      live: "https://my-portfolio-five-bice-59.vercel.app",
      status: "Completed",
    },

    {
      title: "Swiggy Clone",
      image: SwiggyImg,
      desc: "Full Stack MERN Swiggy Clone with authentication, shopping cart, REST APIs and payment integration. Currently under development.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
      live: "#",
      status: "Coming Soon",
    },

    {
      title: "MERN Stack Project",
      image: MernImg,
      desc: "Complete MERN Stack application using MongoDB, Express, React and Node.js with authentication, CRUD operations and REST APIs.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
      live: "#",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-[#8b949e] text-sm">
          03. Selected Work
        </p>

        <h2 className="text-4xl font-bold text-center text-white mt-2 mb-14">
          My <span className="text-[#ffa657]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#7ee787] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-[#8b949e] text-sm leading-7 mt-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-[#7ee787]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border transition-all duration-300 ${
                      project.github === "#"
                        ? "pointer-events-none opacity-50 border-[#30363d] text-[#8b949e]"
                        : "border-[#30363d] text-white hover:border-[#7ee787] hover:text-[#7ee787]"
                    }`}
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      project.live === "#"
                        ? "pointer-events-none opacity-50 bg-gray-600 text-white"
                        : "bg-[#7ee787] text-black hover:bg-[#9cf3b4]"
                    }`}
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;