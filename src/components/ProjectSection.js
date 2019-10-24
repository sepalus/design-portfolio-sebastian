import React from "react";
import classNames from "classnames";

import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";

function ProjectSection({ projectRef, currentDesignArea, selectViewport }) {
  return (
    <section
      ref={projectRef}
      className={classNames("project-selection-container", {
        "project-selection-digital": currentDesignArea !== 0
      })}
    >
      <ProjectCatalog />
      <ProjectCard />
      <button onClick={() => selectViewport(0)}>Home</button>
    </section>
  );
}

export default ProjectSection;
