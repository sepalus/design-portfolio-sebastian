import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import {
  aestheticsDesignProjects,
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
  const [carouselIsOpen, setCarouselIsOpen] = useState(false);
  const projects =
    designArea === 3
      ? aestheticsDesignProjects
      : designArea === 2
      ? digitalProjects
      : industrialProjects;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);

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
            "project-section-animation-enter": currentViewport === designArea,
          },
          {
            "project-section-animation-exit": currentViewport !== designArea,
          }
        )}
      >
        <ProjectCatalog
          designArea={designArea}
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
          setCarouselIsOpen={setCarouselIsOpen}
        />
        <ProjectCard
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          designArea={designArea}
          carouselIsOpen={carouselIsOpen}
          setCarouselIsOpen={setCarouselIsOpen}
          animationDirectionIn={currentViewport === 1}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
