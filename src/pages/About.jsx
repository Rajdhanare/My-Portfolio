import React from "react";
import profileImage from "../assets/profileImage.jpeg";

const About = () => {
  return (
    <section className="bg-[#0d1117] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
          01. Introduction
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e6edf3] mb-12">
          About <span className="text-[#d2a8ff]">Me</span>
        </h2>

        <div className="rounded-xl border border-[#30363d] bg-[#0a0e14] shadow-2xl overflow-hidden grid md:grid-cols-[1fr_1.4fr]">
          {/* Left: image panel */}
          <div className="flex flex-col items-center justify-center gap-6 p-10 border-b md:border-b-0 md:border-r border-[#30363d] bg-[#0d1117]">
            <img
              src={profileImage}
              alt="Raj Dhanare"
              className="rounded-full border-4 border-[#7ee787]/40 shadow-lg w-36 h-36 object-cover hover:scale-105 hover:border-[#7ee787] transition-all duration-300"
            />
            <div className="text-center">
              <p className="font-mono text-[#e6edf3] font-semibold">Raj Dhanare</p>
              <p className="font-mono text-[#8b949e] text-xs mt-1">
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Right: "code comment" bio */}
          <div className="p-8 md:p-10 font-mono text-sm leading-relaxed">
            <div className="flex items-center gap-2 mb-4 text-xs text-[#8b949e]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              <span className="ml-2">about</span>
            </div>

            <p className="text-[#6e7681]">{"/**"}</p>
            <p className="text-[#6e7681]">
              {" * "}Passionate MERN Stack Developer & B.Tech (CSIT) student
            </p>
            <p className="text-[#6e7681]">{" */"}</p>

            <p className="mt-4 text-[#c9d1d9]">
              <span className="text-[#d2a8ff]">const</span>{" "}
              <span className="text-[#79c0ff]">about</span> ={" "}
              <span className="text-[#c9d1d9]">{"{"}</span>
            </p>

            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">education</span>:{" "}
              <span className="text-[#7ee787]">
                'B.Tech CSIT, Chameli Devi Group of Institutions, Indore'
              </span>
              ,
            </p>
            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">hometown</span>:{" "}
              <span className="text-[#7ee787]">
                'Village Chichli, District Barwani, MP'
              </span>
              ,
            </p>
            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">schooling</span>:{" "}
              <span className="text-[#7ee787]">
                'School of Excellence No. 01, Barwani'
              </span>
              ,
            </p>
            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">stack</span>: [
              <span className="text-[#7ee787]">'MongoDB'</span>,{" "}
              <span className="text-[#7ee787]">'Express'</span>,{" "}
              <span className="text-[#7ee787]">'React'</span>,{" "}
              <span className="text-[#7ee787]">'Node'</span>],
            </p>
            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">focus</span>:{" "}
              <span className="text-[#7ee787]">
                'Building modern, responsive, user-friendly web apps'
              </span>
              ,
            </p>
            <p className="pl-4 text-[#c9d1d9]">
              <span className="text-[#ffa657]">mindset</span>:{" "}
              <span className="text-[#7ee787]">
                'Always learning, always shipping'
              </span>
            </p>
            <p className="text-[#c9d1d9]">{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
