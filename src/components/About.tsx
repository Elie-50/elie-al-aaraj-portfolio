import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      // Animate heading
      tl.from(".about-heading", { y: 40, opacity: 0 }, "-=0.6");

      // Animate paragraphs staggered
      tl.from(".about-text", { y: 30, opacity: 0, stagger: 0.3 }, "-=0.8");

      // Animate education block
      tl.from(".education-block", { y: 40, opacity: 0 }, "-=0.6");

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="w-full py-20 bg-gray-100 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* About Me (Left) */}
        <div className="md:w-1/2 text-left">
          <h2 className="about-heading text-3xl font-bold mb-6 text-indigo-600">
            About Me
          </h2>
          <p className="about-text text-gray-700 mb-4 leading-relaxed">
            Hi, I'm <span className="font-semibold">Elie</span>, a fullstack developer specializing in TypeScript, Node.js, React, and NestJS.
          </p>
          <p className="about-text text-gray-700 mb-4 leading-relaxed">
            I build scalable applications with SQL and NoSQL databases and design efficient REST and GraphQL APIs.
          </p>
          <p className="about-text text-gray-700 leading-relaxed">
            My focus is on clean, maintainable code, intuitive interfaces, and turning ideas into impactful digital products.  
          </p>
        </div>

        {/* Education (Right) */}
        <div className="md:w-1/2 text-left education-block">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
            Education & Background
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I hold a <span className="font-medium">bachelor's degree</span> in{" "}
            <span className="font-medium">Computer Science</span> from{" "}
            <span className="font-medium">The Lebanese University</span>. <br /> During my studies, I developed a strong foundation in
            Software Engineering, Database Management, and Web Development
            which continues to guide my approach to building modern applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
