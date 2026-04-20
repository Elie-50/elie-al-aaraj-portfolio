import React, { useRef } from "react";
import { FaReact, FaGlobe, FaCloud } from "react-icons/fa";
import {
	SiGraphql,
	SiJsonwebtokens,
	SiTailwindcss,
	SiRedux,
	SiTypescript,
	SiNestjs,
	SiPostgresql,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStackIcon from "../components/TechStackIcon";

gsap.registerPlugin(ScrollTrigger);

const AlloGaz: React.FC = () => {
	const cardRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const ctx = gsap.context((self) => {
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

			self.selector!(".project-feature").forEach(
				(el: HTMLElement, i: number) => {
					gsap.from(el, {
						opacity: 0,
						y: 20,
						duration: 0.6,
						delay: i * 0.05,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 92%",
						},
					});
				},
			);

			self.selector!(".project-image").forEach((el: HTMLElement, i: number) => {
				gsap.from(el, {
					opacity: 0,
					scale: 0.95,
					duration: 0.8,
					delay: i * 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
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
					Allo-Gaz
				</h3>

				<p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
					Fullstack inventory & customer management system with GraphQL-driven
					relational architecture.
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
					<SiPostgresql /> PostgreSQL
				</TechStackIcon>
				<TechStackIcon>
					<SiGraphql /> GraphQL
				</TechStackIcon>
				<TechStackIcon>
					<SiJsonwebtokens /> JWT
				</TechStackIcon>
				<TechStackIcon>
					<FaCloud /> GCS
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
					<FaGlobe /> i18n
				</TechStackIcon>
			</div>

			<div className="grid md:grid-cols-2 gap-6 mb-10 text-gray-600 dark:text-gray-400">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Architecture
					</p>
					<p>GraphQL relational modeling (customers, orders, addresses)</p>
					<p>Optimized database queries with indexing + caching</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Performance
					</p>
					<p>Debounced search with instant filtering UX</p>
					<p>Efficient state management with Redux Toolkit</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Business Logic
					</p>
					<p>Sales & profit analytics dashboard</p>
					<p>Advanced filtering + reporting system</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Platform
					</p>
					<p>Multilingual support (i18n)</p>
					<p>Secure media storage via Google Cloud Storage</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<img
					src="/elie-al-aaraj-portfolio/images/customer_search.png"
					alt="Customer search"
					className="
          project-image
          rounded-xl
          border border-gray-200/40 dark:border-white/10
          hover:scale-[1.02]
          transition duration-300
        "
				/>

				<img
					src="/elie-al-aaraj-portfolio/images/address_card.png"
					alt="Address management"
					className="
          project-image
          rounded-xl
          border border-gray-200/40 dark:border-white/10
          hover:scale-[1.02]
          transition duration-300
        "
				/>
			</div>
		</div>
	);
};

export default AlloGaz;
