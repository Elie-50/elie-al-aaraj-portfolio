import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
          <li><Link to="/about-projects" className="hover:text-indigo-600 transition">About & Projects</Link></li>
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden flex items-center justify-center text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-projects"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About & Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

