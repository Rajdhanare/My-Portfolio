function Experience() {
  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "DevQAExpert Solution Pvt Ltd",
      time: "Sep 2025 - Nov 2025",
      desc: "Worked on responsive UI using React and Tailwind CSS.",
      color: "#79c0ff",
    },
    {
      role: "MERN Stack Developer",
      company: "Bheema Infotech Pvt Ltd",
      time: "Jan 2026 - June 2026",
      desc: "Built full stack web apps using MongoDB, Express, React and Node.js.",
      color: "#7ee787",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0d1117]">
      <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
        04. git log --experience
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#e6edf3]">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto px-6 relative">
        {/* vertical line */}
        <div className="absolute top-2 bottom-2 w-px bg-[#30363d]"></div>

        <div className="space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-10">
              <span
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-[#0d1117]"
                style={{ backgroundColor: item.color }}
              ></span>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#7ee787]/50 transition-all duration-300">
                <p className="font-mono text-xs text-[#8b949e] mb-1">
                  {item.time}
                </p>
                <h3
                  className="text-lg font-semibold font-mono"
                  style={{ color: item.color }}
                >
                  {item.role}
                </h3>
                <p className="text-[#c9d1d9] text-sm mt-1">{item.company}</p>
                <p className="text-[#8b949e] text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
