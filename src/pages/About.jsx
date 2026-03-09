import React from "react";
import profileImage from "../assets/profileImage.jpeg";

const About = () => {
  return (
    <section className="px-10 md:py-20 bg-[#020617]">
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">About me</h2>
        {/* ProfileImage */}
        <div className="justify-center flex items-center mb-8">
          <img
            src={profileImage}
            alt="profileImage"
            className="rounded-full border-4 border-cyan-300 shadow-lg w-40 h-40 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <p className="text-gray-400 max-w-3xl mx-auto text-center">
          Hi, I'm Raj Dhanare, a passionate MERN Stack Developer and a B.Tech
          (CSIT) student at Chameli Devi Group of Institutions, Indore. I am
          from Village Chichli, District Barwani, Madhya Pradesh. I completed my
          10th and 12th from School of Excellence No. 01, Barwani. I enjoy
          building modern, responsive, and user-friendly web applications using
          MongoDB, Express.js, React, and Node.js (MERN Stack) along with HTML,
          CSS, JavaScript, and Tailwind CSS. I am always eager to learn new
          technologies, improve my development skills, and work on real-world
          projects to grow as a developer..
        </p>
      </div>
    </section>
  );
};

export default About;
