"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { Link } from "react-router-dom";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP animation
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

      // Split text into characters and lines
      const heroSplit = new SplitText(".hero-name", { type: "chars" });
      const subtitleSplit = new SplitText(".hero-tagline", { type: "lines" });

      // Animate title characters
      tl.from(heroSplit.chars, { yPercent: 100, opacity: 0, stagger: 0.03 }, 0);

      // Animate subtitle lines
      tl.from(subtitleSplit.lines, { opacity: 0, yPercent: 100, stagger: 0.06 }, "-=0.4");

      // Animate buttons
      gsap.set(".hero-cta", { opacity: 0, y: 30, scale: 0.9 });
      tl.to(".hero-cta", { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out", stagger: 0.05 }, "-=0.4");

      // Cleanup SplitText on unmount
      return () => {
        heroSplit.revert();
        subtitleSplit.revert();
      };
    }, heroRef); // Scope to heroRef

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full pb-10 lg:h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full opacity-20 animate-pulse -top-32 -left-32"></div>
      <div className="absolute w-56 h-56 bg-pink-400 rounded-full opacity-20 animate-pulse -bottom-24 -right-24"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="hero-name pt-4 text-5xl md:text-6xl font-bold text-white mb-4">
            Elie Al Aaraj
          </h1>
          <p className="hero-tagline text-xl md:text-2xl text-white mb-8">
            Building scalable fullstack apps with<br/> TypeScript, Node.js,<br/> and modern web tech.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Link
              to="/about-projects"
              className="hero-cta bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              See My Work
            </Link>
            <a
              href="/elie-al-aaraj-portfolio/resume/Elie Al Aaraj CV.pdf"
              download="Elie Al Aaraj CV.pdf"
              className="hero-cta border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
