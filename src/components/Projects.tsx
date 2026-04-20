import React from "react";
import AlloGazProject from "../projects/AlloGazProject";
import TeamManagerApp from "../projects/TeamManagement";
import MovieBrowser from "../projects/MovieBrowser";
import RealtimeChatApp from "../projects/RealTimeChatApp";
import GameProject from "../projects/GameProject";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 bg-white dark:bg-black overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-gray-900 dark:text-white mb-16">
          Selected Work
        </h2>

        {/* CORE WORK */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
            Core Systems
          </h3>

          <div className="grid gap-10 md:gap-12">
            <AlloGazProject />
            <TeamManagerApp />
            <RealtimeChatApp />
          </div>
        </div>

        {/* FRONTEND EXPERIENCES */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
            UI / Frontend Experiments
          </h3>

          <div className="grid gap-10 md:gap-12">
            <MovieBrowser />
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
            Experimental / Fun
          </h3>

          <div className="grid gap-10 md:gap-12">
            <GameProject />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;