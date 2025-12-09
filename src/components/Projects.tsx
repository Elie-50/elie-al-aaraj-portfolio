import React from "react";
import AlloGazProject from "../projects/AlloGazProject";
import TeamManagerApp from "../projects/TeamManagement";
import MovieBrowser from "../projects/MovieBrowser";

const Projects: React.FC = () => {

  return (
    <section
      id="projects"
      className="w-full py-20 bg-white px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">
          My Projects
        </h2>
        <AlloGazProject />
        <TeamManagerApp />
        <MovieBrowser />
      </div>
    </section>
  );
};

export default Projects;
