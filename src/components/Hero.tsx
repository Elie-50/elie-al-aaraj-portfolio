import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
	const heroRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.from(".hero-title span", {
				y: 40,
				opacity: 0,
				filter: "blur(10px)",
				stagger: 0.08,
				duration: 1,
			});

			tl.from(
				".hero-subtitle",
				{
					y: 20,
					opacity: 0,
					filter: "blur(6px)",
					duration: 0.8,
				},
				"-=0.6",
			);

			tl.fromTo(
				".hero-cta",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
				"-=0.4",
			);
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
		>
			<div className="relative z-10 max-w-4xl w-full text-center">
				{/* Title */}
				<h1 className="hero-title text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{["Elie", "Al", "Aaraj"].map((word, i) => (
						<span key={i} className="inline-block mr-3">
							{word}
						</span>
					))}
				</h1>

				{/* Subtitle */}
				<p className="hero-subtitle mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
					I build scalable fullstack apps with TypeScript, Node.js and modern
					web technologies.
				</p>

				{/* CTA */}
				<div className="mt-10 flex justify-center gap-4 flex-wrap">
					<Link
						to="/about-projects"
						className="hero-cta px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black transition hover:scale-[1.04]"
					>
						View Work
					</Link>

					<a
						href="/elie-al-aaraj-portfolio/resume/Elie Al Aaraj CV.pdf"
						download
						className="hero-cta px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
					>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
