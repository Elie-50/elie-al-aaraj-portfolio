import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GameProject: React.FC = () => {
	const cardRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const ctx = gsap.context(() => {
			gsap.from(cardRef.current, {
				opacity: 0,
				y: 60,
				duration: 1,
				ease: "power3.out",
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
					Procedural Voxel Engine (Minecraft-Style Clone)
				</h3>

				<p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
					A real-time voxel world built in Godot using C# to explore rendering
					performance, procedural generation, and engine-level optimization
					techniques.
				</p>
			</div>

			<div className="flex flex-wrap gap-2 mb-10">
				<span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
					C#
				</span>
				<span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
					Godot Engine
				</span>
				<span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
					Procedural Generation
				</span>
				<span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
					Multithreading
				</span>
			</div>

			<div className="grid md:grid-cols-2 gap-6 mb-10 text-gray-600 dark:text-gray-400">
				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						World Generation
					</p>
					<p>Procedural terrain generation for infinite voxel landscapes</p>
					<p>Noise-based chunk generation system</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Rendering Optimization
					</p>
					<p>Greedy meshing to reduce draw calls and improve FPS</p>
					<p>Chunk-based rendering system for scalability</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Performance Systems
					</p>
					<p>Background threading for chunk generation</p>
					<p>Memory and mesh caching for fast re-use</p>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						Engine Exploration
					</p>
					<p>Deep dive into Godot rendering pipeline</p>
					<p>Low-level optimization experimentation in C#</p>
				</div>
			</div>
			<div className="mb-8">
				<p className="text-sm text-gray-500 dark:text-gray-400 italic">
					Private project — not publicly available due to engine experiments and
					prototype nature.
				</p>
			</div>

			<div className="flex justify-center">
				<div className="mb-10">
					<p className="text-sm font-medium text-gray-900 dark:text-white mb-4">
						Engine Screenshots
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<img
							src="/elie-al-aaraj-portfolio/game/hundred-of-all-seeing-eyes.png"
							alt="Procedural voxel world - all seeing eyes"
							className="
                rounded-xl
                border border-gray-200/40 dark:border-white/10
                hover:scale-[1.02]
                transition duration-300
              "
						/>

						<img
							src="/elie-al-aaraj-portfolio/game/dusty-desert.png"
							alt="Procedural desert terrain"
							className="
                rounded-xl
                border border-gray-200/40 dark:border-white/10
                hover:scale-[1.02]
                transition duration-300
              "
						/>

						<img
							src="/elie-al-aaraj-portfolio/game/northern-lights.png"
							alt="Snow biome with northern lights"
							className="
                rounded-xl
                border border-gray-200/40 dark:border-white/10
                hover:scale-[1.02]
                transition duration-300
              "
						/>

						<img
							src="/elie-al-aaraj-portfolio/game/darkest-night.png"
							alt="Night time voxel world lighting"
							className="
                rounded-xl
                border border-gray-200/40 dark:border-white/10
                hover:scale-[1.02]
                transition duration-300
              "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameProject;
