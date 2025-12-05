import React, { useRef } from "react";
import { FaReact, FaGlobe, FaCloud } from "react-icons/fa";
import { SiGraphql, SiJsonwebtokens, SiTailwindcss, SiRedux, SiTypescript, SiNestjs, SiPostgresql } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const AlloGaz: React.FC = () => {
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
        Allo-Gaz — Customers & Inventory Management System
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        A professional web platform built for a gas company to manage{" "}
        <span className="font-medium">customers, addresses, phone numbers, orders, and inventory</span>.  
        The backend was developed with <span className="font-medium">NestJS</span>, leveraging DI, TypeORM, and JWT authentication.  
        GraphQL was integrated to handle deeply nested data (customers → addresses → phones, customers → orders → items).  
        Features include <span className="font-medium">multilingual support (i18n)</span>, <span className="font-medium">light & dark themes</span>, sales/profit reports, and secure storage on <span className="font-medium">Google Cloud Storage (GCS)</span>.
      </p>

      {/* Tech stack icons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <TechStackIcon extraStyles="bg-cyan-100 text-cyan-600">
          <SiTypescript /> TypeScript
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-red-100 text-red-700">
          <SiNestjs /> NestJS
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-blue-100 text-blue-700">
          <SiPostgresql /> PostgreSQL
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-pink-100 text-pink-700">
          <SiGraphql /> GraphQL
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-red-100 text-red-700">
          <SiJsonwebtokens /> JWT Auth
        </TechStackIcon>
        <TechStackIcon extraStyles="bg-purple-100 text-purple-700">
          <FaCloud /> GCS
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
        <TechStackIcon extraStyles="bg-gray-100 text-gray-700">
          <FaGlobe /> i18n
        </TechStackIcon>
      </div>

      {/* Key Features */}
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li className="project-feature">
          <span className="font-medium">Advanced search & filters</span> — Search customers by first name, last name, middle name, phone, or email, with sorting by name or date.
        </li>
        <li className="project-feature">
          <span className="font-medium">Optimized queries</span> — Debounced search requests and database indexes on filterable fields ensure fast and efficient lookups.
        </li>
        <li className="project-feature">
          <span className="font-medium">Address management</span> — Nicely formatted pages to display multiple addresses and phone numbers.
        </li>
        <li className="project-feature">
          <span className="font-medium">Nested data handling</span> — Customers → Addresses → Phones and Customers → Orders → Items.
        </li>
        <li className="project-feature">
          <span className="font-medium">State management</span> — Allo-Gaz leverages Redux Toolkit for predictable and efficient state handling across complex components.
        </li>
        <li className="project-feature">
          <span className="font-medium">Multilingual support</span> — Two language modes with smooth switching.
        </li>
        <li className="project-feature">
          <span className="font-medium">Light & dark themes</span> — Modern UI with theme toggle.
        </li>
        <li className="project-feature">
          <span className="font-medium">Sales reports</span> — Automatic yearly sales reports.
        </li>
        <li className="project-feature">
          <span className="font-medium">Profit analysis</span> — Filter profit between any two selected dates.
        </li>
        <li className="project-feature">
          <span className="font-medium">Secure media storage</span> — Images stored securely on GCS.
        </li>
      </ul>

      {/* Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img
          src="/images/customer_search.png"
          alt="Complex search form"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
        <img
          src="/images/address_card.png"
          alt="Address management page"
          className="project-image rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AlloGaz;
