import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import {
  aesthteticsDesignProjects,
  industrialProjects,
  digitalProjects,
} from "./ProjectData";

function ProjectSection({
  projectRef,
  designArea,
  currentViewport,
  selectViewport,
  firstSectionEntry,
  firstAreaEntry,
  setFirstAreaEntry,
  skipProjectSection,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projects =
    designArea === 3
      ? aesthteticsDesignProjects
      : designArea === 2
      ? digitalProjects
      : industrialProjects;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    setActiveProjectIndex(0);
  }, [designArea]);

  if (skipProjectSection)
    return <section ref={projectRef} className="project-section-container" />;

  return (
    <section ref={projectRef} className="project-section-container">
      <div
        className={classNames(
          "project-section",
          {
            "project-section-digital": designArea === 2,
          },
          {
            "project-section-industrial": designArea === 1,
          },
          {
            "project-section-animate-slide": !firstAreaEntry,
          },
          {
            "project-section-static": firstAreaEntry && !firstSectionEntry,
          },
          {
            "project-section-animate-compress":
              firstAreaEntry && firstSectionEntry,
          }
        )}
      >
        <ProjectCatalog
          designArea={designArea}
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
          animationDirectionIn={currentViewport === 1}
        />
        <ProjectCard
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          animationDirectionIn={currentViewport === 1}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
