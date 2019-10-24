import React from "react";

import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";

function ProjectSection({
  projectRef,
  currentDesignArea,
  currentViewport,
  selectViewport
}) {
  return (
    <section ref={projectRef} className="project-section-container">
      <div className="project-section">
        <ProjectCatalog animateIn={currentViewport === 1} />
        <ProjectCard animateIn={currentViewport === 1} />
      </div>
      <button
        style={{ position: "absolute", bottom: "100px", left: " 100px" }}
        onClick={() => selectViewport(0)}
      >
        Home
      </button>
    </section>
  );
}

export default ProjectSection;
