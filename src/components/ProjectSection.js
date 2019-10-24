import React from "react";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";

function ProjectSection({ projectRef, currentDesignArea, selectViewport }) {
  return (
    <section ref={projectRef}>
      <ProjectCatalog />
      <ProjectCard />
      <button onClick={() => selectViewport(0)}>Home</button>
    </section>
  );
}

export default ProjectSection;
