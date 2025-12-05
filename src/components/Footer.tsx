import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-indigo-600 text-white py-6 text-center">
      <p> Elie Al Aaraj - {new Date().getFullYear()} </p>

      {/* Contact info as text */}
      <p className="mt-2 text-sm">
        Email: <a href="mailto:elieelaaraj50@gmail.com" className="underline">elieelaaraj50@gmail.com</a> | 
        Phone: <a href="https://wa.me/96179101950" className="underline">+961 79 101 950</a>
      </p>

      {/* Social icons */}
      <div className="flex justify-center mt-2 space-x-6 text-2xl">
        <a
          href="https://www.github.com/elie-50/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/elie-aaraj-19267a20a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:elieelaaraj50@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/96179101950"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
