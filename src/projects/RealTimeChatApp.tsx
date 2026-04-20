import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
	SiNestjs,
	SiMongodb,
	SiSocketdotio,
	SiTypescript,
} from "react-icons/si";

import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const RealtimeChatApp: React.FC = () => {
	const cardRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const ctx = gsap.context((self) => {
			// Card entrance
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
			self.selector!(".tech-badge").forEach((el: HTMLElement, i: number) => {
				gsap.from(el, {
					opacity: 0,
					x: -40,
					duration: 0.6,
					delay: i * 0.1,
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
					},
				});
			});

			// Features
			self.selector!(".project-feature").forEach(
				(el: HTMLElement, i: number) => {
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
				},
			);

			// Images
			self.selector!(".project-image").forEach((el: HTMLElement, i: number) => {
				gsap.from(el, {
					opacity: 0,
					scale: 0.9,
					duration: 0.9,
					delay: i * 0.2,
					ease: "back.out(1.7)",
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
					},
				});
			});

			// CTA
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
					Real-Time Chat System - Still work in progress
				</h3>

				<p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
					Secure real-time messaging platform built with WebSockets and
					end-to-end encryption for private communication.
				</p>
			</div>

			<div className="flex flex-wrap gap-2 mb-10">
				<TechStackIcon>
					<FaReact /> React
				</TechStackIcon>
				<TechStackIcon>
					<SiNestjs /> NestJS
				</TechStackIcon>
				<TechStackIcon>
					<FaNodeJs /> Node.js
				</TechStackIcon>
				<TechStackIcon>
					<SiSocketdotio /> Socket.IO
				</TechStackIcon>
				<TechStackIcon>
					<SiMongodb /> MongoDB
				</TechStackIcon>
				<TechStackIcon>
					<SiTypescript /> TypeScript
				</TechStackIcon>
			</div>

			<div className="grid md:grid-cols-2 gap-6 mb-10 text-gray-600 dark:text-gray-400">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Real-Time Architecture
					</p>
					<p>WebSocket-based messaging via Socket.IO</p>
					<p>Instant message sync across connected clients</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Security Layer
					</p>
					<p>End-to-end encryption for private messages</p>
					<p>Secure authentication flow with email-based login</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Message System
					</p>
					<p>Edit & delete messages in real time</p>
					<p>Threaded replies with automatic scroll tracking</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Data Layer
					</p>
					<p>MongoDB with Mongoose schema modeling</p>
					<p>Optimized persistence for chat history</p>
				</div>
			</div>

			<div className="flex justify-center">
				<a
					href="https://github.com/Elie-50/realtime-chat-app"
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

export default RealtimeChatApp;
