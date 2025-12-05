import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiJsonwebtokens, SiTailwindcss, SiRedux, SiTypescript, SiNestjs, SiPostgresql, SiTypeorm, SiDocker } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const TeamManagerApp: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });

      // Tech badges
      gsap.from(".tech-badge", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      // Feature list
      gsap.from(".project-feature", {
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
        },
      });

      // Screenshots
      gsap.from(".project-image", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 65%",
        },
      });

      // Demo button
      gsap.from(".project-link", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 60%",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card bg-gray-50 rounded-xl shadow-lg p-8 mb-12 hover:shadow-2xl transition"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Team Manager — Personal Project for Team & Task Management
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        A personal team management platform to organize users, teams, projects, and tasks. This web app allows administrators to manage{" "}
        <span className="font-medium">users, organizations, team members, projects</span>, and <span className="font-medium">tasks</span>.  
        Built with a robust backend in <span className="font-medium">NestJS</span>, utilizing TypeORM and JWT authentication for secure user management.  
        The app also includes <span className="font-medium">unit and E2E testing</span> configured through a CI pipeline.  
        Soon to be dockerized for easy deployment.
      </p>


      {/* Tech stack icons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <TechStackIcon extraStyles="bg-cyan-100 text-cyan-600">
          <SiTypescript /> TypeScript
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-red-100 text-red-700">
          <SiNestjs /> NestJS
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-orange-100 text-orange-700">
          <SiTypeorm /> TypeORM
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-blue-100 text-blue-700">
          <SiPostgresql /> PostgreSQL
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-red-100 text-red-700">
          <SiJsonwebtokens /> JWT Auth
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-blue-100 text-blue-700">
          <FaReact /> React
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-cyan-100 text-cyan-700">
          <SiTailwindcss /> TailwindCSS
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-violet-100 text-violet-700">
          <SiRedux /> Redux Toolkit
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-blue-100 text-blue-700">
          <SiDocker /> Docker
        </TechStackIcon>
      </div>

      {/* Key Features */}
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li className="project-feature">
          <span className="font-medium">User management</span> — Easily manage users, roles, and permissions.
        </li>
        <li className="project-feature">
          <span className="font-medium">Organization management</span> — Create and manage organizations, assign members, and track progress.
        </li>
        <li className="project-feature">
          <span className="font-medium">Project organization</span> — Organize projects with tasks, due dates, and priority settings.
        </li>
        <li className="project-feature">
          <span className="font-medium">Task management</span> — Assign tasks to users, set deadlines, and track task completion status.
        </li>
        <li className="project-feature">
          <span className="font-medium">CI/CD pipeline</span> — Automated unit and E2E testing, and linting via CI pipeline.
        </li>
        <li className="project-feature">
          <span className="font-medium">Docker</span> — Simplified deployment with Docker integration.
        </li>
      </ul>

      {/* Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img
          src="/images/task_form.png"
          alt="Task Form"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
        <img
          src="/images/task_list.png"
          alt="Task Management"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      {/* GitHub Repositories */}
      <div className="flex gap-4 mt-6 justify-center">
        <a
          href="https://github.com/Elie-50/project-management"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Repository on GitHub
        </a>
      </div>
    </div>
  );
};

export default TeamManagerApp;
