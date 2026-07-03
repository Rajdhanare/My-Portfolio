import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail, MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <section className="text-[#c9d1d9] py-20 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
          05. Say Hello
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-[#e6edf3] mb-12">
          Contact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="bg-[#161b22] border border-[#30363d] p-8 md:p-12 rounded-2xl shadow-lg hover:border-[#7ee787]/50 transition">
            <h2 className="text-2xl font-bold mb-6 text-[#e6edf3] font-mono">
              Get In Touch
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MdAttachEmail className="text-[#7ee787]" />
                <a
                  href="mailto:rajkumawat95755@gmail.com"
                  className="hover:text-[#7ee787] transition"
                >
                  rajkumawat95755@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MdPhoneInTalk className="text-[#79c0ff]" />
                <a href="tel:+919575501380" className="hover:text-[#79c0ff] transition">
                  +91 9575501380
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsappSquare className="text-[#ffa657]" />
                <a
                  href="https://wa.me/919575501380"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ffa657] transition"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <ul className="flex gap-5 text-xl text-[#8b949e]">
                <li>
                  <a
                    href="https://instagram.com/rajdhanare"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#f778ba] transition"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/raj-dhanare-b95817269"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#79c0ff] transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rajdhanare"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#e6edf3] transition"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rajkumawat95755@gmail.com"
                    className="hover:text-[#7ee787] transition"
                  >
                    <TfiEmail />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#161b22] border border-[#30363d] p-8 md:p-12 rounded-2xl shadow-lg hover:border-[#7ee787]/50 transition">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-lg w-full text-[#e6edf3] focus:outline-none focus:border-[#7ee787]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-lg w-full text-[#e6edf3] focus:outline-none focus:border-[#7ee787]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-lg w-full text-[#e6edf3] focus:outline-none focus:border-[#7ee787]"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-lg w-full text-[#e6edf3] focus:outline-none focus:border-[#7ee787]"
              />

              <textarea
                placeholder="Write your message..."
                rows={4}
                className="bg-[#0d1117] border border-[#30363d] px-4 py-3 rounded-lg w-full text-[#e6edf3] focus:outline-none focus:border-[#7ee787] md:col-span-2"
              />

              <button
                type="submit"
                className="bg-[#7ee787] text-[#0d1117] font-semibold py-2 px-6 rounded-lg hover:bg-[#a3f7bf] transition md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
