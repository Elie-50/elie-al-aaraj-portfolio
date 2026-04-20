import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full mt-20 border-t border-gray-200/40 dark:border-white/10 bg-transparent">
      
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        
        {/* Name */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Elie Al Aaraj
        </p>

        {/* Contact */}
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <a
            href="mailto:elieelaaraj50@gmail.com"
            className="hover:text-black dark:hover:text-white transition"
          >
            elieelaaraj50@gmail.com
          </a>
          <span className="mx-2 opacity-40">•</span>
          <a
            href="https://wa.me/96179101950"
            className="hover:text-black dark:hover:text-white transition"
          >
            +961 79 101 950
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 gap-3">
          <a
            href="https://www.github.com/elie-50/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/elie-aaraj-19267a20a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:elieelaaraj50@gmail.com"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/96179101950"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;