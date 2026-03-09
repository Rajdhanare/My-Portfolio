import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail, MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <section className="text-gray-300 py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-4xl font-bold text-center text-white mb-12">
          Contact
        </h3>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="bg-[#0f172a] border border-gray-700 p-8 md:p-12 rounded-3xl shadow-lg hover:border-cyan-400 transition">

            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <ul className="space-y-4">

              <li className="flex items-center gap-3">
                <MdAttachEmail />
                <a href="mailto:rajkumawat95755@gmail.com">
                  rajkumawat95755@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MdPhoneInTalk />
                <a href="tel:+919575501380">+91 9575501380</a>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsappSquare />
                <a href="https://wa.me/919575501380">WhatsApp</a>
              </li>

            </ul>

            {/* Social Icons */}
            <div className="mt-6">
              <ul className="flex gap-5 text-xl">

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  <FaInstagram />
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  <FaLinkedinIn />
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  <FaGithub />
                </li>

                <li className="hover:text-cyan-400 cursor-pointer transition">
                  <TfiEmail />
                </li>

              </ul>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-[#0f172a] border border-gray-700 p-8 md:p-12 rounded-3xl shadow-lg hover:border-cyan-400 transition">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="First Name"
                className="bg-[#020617] border border-gray-700 px-4 py-2 rounded-lg w-full text-white focus:outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#020617] border border-gray-700 px-4 py-2 rounded-lg w-full text-white focus:outline-none focus:border-cyan-400"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-[#020617] border border-gray-700 px-4 py-2 rounded-lg w-full text-white focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-[#020617] border border-gray-700 px-4 py-2 rounded-lg w-full text-white focus:outline-none focus:border-cyan-400"
              />

              {/* Message */}
              <textarea
                placeholder="Write your message..."
                className="bg-[#020617] border border-gray-700 px-4 py-3 rounded-lg w-full text-white focus:outline-none focus:border-cyan-400 md:col-span-2"
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-cyan-400 text-black py-2 px-6 rounded-lg hover:bg-cyan-300 transition md:col-span-2"
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