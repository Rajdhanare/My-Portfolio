import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Background from "../assets/backgroundImage.png";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold md:mb-20 mb-6 text-white">
          Hi, I'm <span className="text-cyan-300">Raj Dhanare</span>
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          <span className="text-white font-semibold">
            <Typewriter
              words={["Frontend Developer | React Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg hover:bg-cyan-300">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;