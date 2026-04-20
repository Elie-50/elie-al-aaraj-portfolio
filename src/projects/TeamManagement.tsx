import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import {
	SiJsonwebtokens,
	SiTailwindcss,
	SiRedux,
	SiTypescript,
	SiNestjs,
	SiPostgresql,
	SiTypeorm,
	SiDocker,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const TeamManagerApp: React.FC = () => {
	const cardRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const ctx = gsap.context((self) => {
			// Card animation
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

			// Tech badges
			self.selector!(".tech-badge").forEach(
				(el: HTMLElement, index: number) => {
					gsap.from(el, {
						opacity: 0,
						x: -50,
						duration: 0.6,
						delay: index * 0.1,
						scrollTrigger: {
							trigger: el,
							start: "top 80%",
						},
					});
				},
			);

			// Features
			self.selector!(".project-feature").forEach((el: HTMLElement) => {
				gsap.from(el, {
					opacity: 0,
					x: -40,
					duration: 0.7,
					scrollTrigger: {
						trigger: el,
						start: "top 60%",
					},
				});
			});

			// Images
			self.selector!(".project-image").forEach(
				(el: HTMLElement, index: number) => {
					gsap.from(el, {
						opacity: 0,
						scale: 0.9,
						duration: 0.8,
						delay: index * 0.3,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: el,
							start: "top 80%",
						},
					});
				},
			);

			// Buttons
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
			className="
      group relative rounded-2xl
      backdrop-blur-xl bg-white/30 dark:bg-black/30
      border border-gray-200/40 dark:border-white/10
      p-8 md:p-10 mb-14

      transition-all duration-300
      hover:scale-[1.01]
      hover:border-black/20 dark:hover:border-white/20
    "
		>
			<div className="mb-8">
				<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
					Team Manager
				</h3>

				<p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
					Fullstack team & project management platform built to explore backend
					architecture, DevOps workflows, and scalable system design.
				</p>
			</div>

			<div className="flex flex-wrap gap-2 mb-10">
				<TechStackIcon>
					<SiTypescript /> TypeScript
				</TechStackIcon>
				<TechStackIcon>
					<SiNestjs /> NestJS
				</TechStackIcon>
				<TechStackIcon>
					<SiTypeorm /> TypeORM
				</TechStackIcon>
				<TechStackIcon>
					<SiPostgresql /> PostgreSQL
				</TechStackIcon>
				<TechStackIcon>
					<SiJsonwebtokens /> JWT
				</TechStackIcon>
				<TechStackIcon>
					<FaReact /> React
				</TechStackIcon>
				<TechStackIcon>
					<SiTailwindcss /> Tailwind
				</TechStackIcon>
				<TechStackIcon>
					<SiRedux /> Redux
				</TechStackIcon>
				<TechStackIcon>
					<SiDocker /> Docker
				</TechStackIcon>
			</div>

			<div className="grid md:grid-cols-2 gap-6 mb-10 text-gray-600 dark:text-gray-400">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						System Design
					</p>
					<p>Multi-tenant architecture for users, orgs & teams</p>
					<p>Role-based access control with JWT authentication</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						DevOps
					</p>
					<p>Dockerized deployment environment</p>
					<p>CI pipeline with automated testing (unit + E2E)</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Product Logic
					</p>
					<p>Task lifecycle management with priorities & deadlines</p>
					<p>Project organization with team assignments</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Engineering Focus
					</p>
					<p>Scalable backend structure using NestJS modules</p>
					<p>Clean separation of concerns (services, controllers, repos)</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
				<img
					src="/elie-al-aaraj-portfolio/images/task_form.png"
					alt="Task Form"
					className="
          project-image rounded-xl
          border border-gray-200/40 dark:border-white/10
          hover:scale-[1.02]
          transition duration-300
        "
				/>

				<img
					src="/elie-al-aaraj-portfolio/images/task_list.png"
					alt="Task Management"
					className="
          project-image rounded-xl
          border border-gray-200/40 dark:border-white/10
          hover:scale-[1.02]
          transition duration-300
        "
				/>
			</div>

			<div className="flex justify-center">
				<a
					href="https://github.com/Elie-50/project-management"
					target="_blank"
					rel="noopener noreferrer"
					className="
          px-5 py-2.5 rounded-full
          bg-black/90 dark:bg-white/90
          text-white dark:text-black
          text-sm font-medium
          hover:scale-[1.03]
          transition
        "
				>
					View Repository
				</a>
			</div>
		</div>
	);
};

export default TeamManagerApp;
