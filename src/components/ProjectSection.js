import React from "react";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";

function ProjectSection({ currentDesignArea, selectViewport }) {
  return (
    <div>
      <ProjectCatalog />
      <ProjectCard />
      <button onClick={() => selectViewport(0)}>Home</button>
    </div>
  );
}

export default ProjectSection;
