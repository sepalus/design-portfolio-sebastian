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
  const project = activeProject;
  const isActive = true;

  return (
    <>
      <div
        className={classNames(
          "project-card",
          {
            "project-card-dark": projects[activeProjectIndex].styleDarkColor,
          },
          { "animate-card-in": animationDirectionIn },
          { "animate-card-out": !animationDirectionIn }
        )}
        style={{
          backgroundColor: activeProject.backgroundColor || "black",
          color: activeProject.styleDarkColor ? "black" : "white",
          borderColor: activeProject.styleDarkColor ? "black" : "white",
        }}
      >
        <div className="project-card-image-wrapper">
          <img
            src={
              project.mainImage
                ? `./assets/${project.mainImage}`
                : `./assets/${project.images[0]}`
            }
            alt=""
            className={classNames(
              [project.classes],
              { "animate-card-fade-in": isActive },
              { "animate-card-fade-out": !isActive }
            )}
            style={project.imageStyle}
          />
          <ProjectCardDescription
            currentViewport={currentViewport}
            designArea={designArea}
            project={project}
            activeProject={activeProject}
          />
          );
          <div
            className="project-card-clickable-area"
            onClick={() => setCarouselIsOpen(true)}
          />
        </div>
      </div>

      {carouselIsOpen && (
        <ProjectCardCarousel
          designArea={designArea}
          project={activeProject}
          carouselIsOpen={carouselIsOpen}
          setCarouselIsOpen={setCarouselIsOpen}
        />
      )}
    </>
  );
}

export default ProjectCard;
