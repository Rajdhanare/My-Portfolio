import React from "react";

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="p-6 rounded-xl hover:scale-85 transition">
          <h3 className="font-bold text-xl mb-2 text-center">
            MERN Stack Developer Intern
          </h3>
          <p className="bg-white/10 backdrop-blur-md border border-white/10 text-gray-400 text-center">
            Worked on building responsive web applications using React.js and
            Tailwind CSS. Developed REST APIs with Node.js and Express.js and
            integrated MongoDB for data storage. Implemented reusable components
            and improved UI performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
