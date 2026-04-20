import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-black/40 border-b border-gray-200/40 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Elie Al Aaraj
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about-projects"
              className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              About & Projects
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 backdrop-blur-xl bg-white/60 dark:bg-black/60 border-t border-gray-200/30 dark:border-white/10">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about-projects"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 transition"
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