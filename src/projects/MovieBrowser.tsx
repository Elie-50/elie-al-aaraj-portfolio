import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const MovieBrowser: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context((self) => {
      // Main card entrance
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      // Tech stack icons
      self.selector!(".tech-badge").forEach((el: HTMLElement, index: number) => {
        gsap.from(el, {
          opacity: 0,
          x: -40,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Feature list items
      self.selector!(".project-feature").forEach((el: HTMLElement, i: number) => {
        gsap.from(el, {
          opacity: 0,
          x: -50,
          duration: 0.7,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        });
      });

      // Images
      self.selector!(".project-image").forEach((el: HTMLElement, index: number) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.9,
          duration: 0.9,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // CTAs
      self.selector!(".project-link").forEach((el: HTMLElement) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card bg-gray-50 rounded-xl shadow-lg p-8 mb-12 hover:shadow-2xl transition"
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Movie Browser — Modern Movie Search App
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        A modern movie browsing application built using{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">TypeScript</span>, and{" "}
        <span className="font-medium">Redux Toolkit</span>.  
        It integrates with the <span className="font-medium">OMDb API</span> to fetch movie data, 
        features debounced search queries for optimized performance, smooth transitions powered by{" "}
        <span className="font-medium">GSAP</span>, and UI powered by <span className="font-medium">ShadCN</span> for a clean, modern experience.

        <span>
          You can check a demo by clicking {" "}
          <a
            href="https://elie-50.github.io/movie-browser/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-500 hover:underline hover:text-blue-700"
          >
            here.
          </a>
        </span>
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        <TechStackIcon extraStyles="bg-blue-100 text-blue-600">
          <FaReact /> React
        </TechStackIcon>

        <TechStackIcon extraStyles="bg-cyan-100 text-cyan-700">
          <SiTypescript /> TypeScript
        </TechStackIcon>

        <TechStackIcon extraStyles="bg-purple-100 text-purple-700">
          <SiRedux /> Redux Toolkit
        </TechStackIcon>

        <TechStackIcon extraStyles="bg-cyan-100 text-cyan-700">
          <SiTailwindcss /> TailwindCSS
        </TechStackIcon>

        <TechStackIcon extraStyles="bg-yellow-100 text-yellow-700">
          <MdAnimation /> GSAP Animations
        </TechStackIcon>

        <TechStackIcon extraStyles="bg-gray-100 text-gray-700">
          <BsSearch /> Debounced Search
        </TechStackIcon>
      </div>

      {/* Features */}
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li className="project-feature">
          <span className="font-medium">Real-time movie search</span> with debounced API queries.
        </li>
        <li className="project-feature">
          <span className="font-medium">GSAP-powered animations</span> for smooth page interactions.
        </li>
        <li className="project-feature">
          <span className="font-medium">Dedicated movie details page</span> with extended info.
        </li>
        <li className="project-feature">
          <span className="font-medium">Redux Toolkit</span> for efficient global state management.
        </li>
        <li className="project-feature">
          <span className="font-medium">Responsive UI</span> using TailwindCSS and ShadCN components.
        </li>
      </ul>

      {/* Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img
          src="/elie-al-aaraj-portfolio/images/movie_search.png"
          alt="Movie Search"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
        <img
          src="/elie-al-aaraj-portfolio/images/movie_details.png"
          alt="Movie Details"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      {/* GitHub Link */}
      <div className="flex justify-center">
        <a
          href="https://github.com/Elie-50/movie-browser"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link inline-block bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default MovieBrowser;
