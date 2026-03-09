function Experience() {
  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "DevQAExpert Solution Pvt Ltd",
      time: "Sep 2025 - Nov 2025",
      desc: "Worked on responsive UI using React and Tailwind CSS."
    },
    {
      role: "MERN Stack Developer",
      company: "Bheema Infotech Pvt Ltd",
      time: "Jan 2026 - Present",
      desc: "Built full stack web apps using MongoDB, Express, React and Node.js."
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto px-6 space-y-8">

        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 
            p-6 md:p-8 rounded-xl 
            hover:border-cyan-400 hover:scale-[1.03]
            transition duration-300 shadow-lg"
          >

            <h3 className="text-lg md:text-xl font-semibold text-cyan-400">
              {item.role}
            </h3>

            <p className="text-gray-300 mt-1 text-sm md:text-base">
              {item.company} • {item.time}
            </p>

            <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;