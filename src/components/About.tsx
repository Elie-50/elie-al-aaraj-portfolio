import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".about-heading", { y: 40, opacity: 0 });

      tl.from(
        ".about-text",
        { y: 30, opacity: 0, stagger: 0.2 },
        "-=0.6"
      );

      tl.from(
        ".education-block",
        { y: 40, opacity: 0 },
        "-=0.6"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative w-full py-24 px-6 bg-white dark:bg-black overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* About Me */}
        <div className="md:w-1/2">
          <h2 className="about-heading text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
            About Me
          </h2>

          <p className="about-text text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Hi, I'm <span className="font-medium text-gray-900 dark:text-white">Elie</span>, a fullstack developer specializing in TypeScript, Node.js, React, and NestJS.
          </p>

          <p className="about-text text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            I build scalable applications using SQL and NoSQL databases and design efficient REST and GraphQL APIs.
          </p>

          <p className="about-text text-gray-600 dark:text-gray-400 leading-relaxed">
            My focus is on clean, maintainable code, intuitive interfaces, and turning ideas into impactful digital products.
          </p>
        </div>

        {/* Education */}
        <div className="md:w-1/2 education-block">
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-gray-200/40 dark:border-white/10">
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Education & Background
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I hold a <span className="font-medium text-gray-900 dark:text-white">bachelor's degree</span> in{" "}
              <span className="font-medium text-gray-900 dark:text-white">Computer Science</span> from{" "}
              <span className="font-medium text-gray-900 dark:text-white">The Lebanese University</span>.
              <br /><br />
              During my studies, I built a strong foundation in Software Engineering, Database Management, and Web Development—principles that continue to guide how I build modern applications.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;