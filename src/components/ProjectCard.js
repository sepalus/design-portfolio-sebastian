import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardCarousel from "./ProjectCardCarousel";

function ProjectCard({
  currentViewport,
  projects,
  activeProjectIndex,
  designArea,
  carouselIsOpen,
  setCarouselIsOpen,
  animationDirectionIn,
}) {
  const activeProject = projects[activeProjectIndex];

  return (
    <>
      <div
        className={classNames(
          "project-card",
          { "animate-card-in": animationDirectionIn },
          { "animate-card-out": !animationDirectionIn }
        )}
        style={{
          backgroundColor: activeProject.backgroundColor || "black",
          color: activeProject.styleDarkColor ? "black" : "white",
        }}
      >
        <div className="project-card-image-wrapper">
          {projects.map((project, index) => {
            const isActive = activeProjectIndex === index;

            return (
              <>
                <img
                  src={`./assets/${project.images[0]}`}
                  alt=""
                  className={classNames(
                    [project.classes],
                    { "animate-card-fade-in": isActive },
                    { "animate-card-fade-out": !isActive }
                  )}
                  style={project.imageStyle}
                />
                {designArea === 1 && (
                  <ProjectCardDescription
                    currentViewport={currentViewport}
                    project={project}
                    activeProject={activeProject}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>

      {carouselIsOpen && (
        <ProjectCardCarousel
          project={activeProject}
          setCarouselIsOpen={setCarouselIsOpen}
        />
      )}
    </>
  );
}

export default ProjectCard;
