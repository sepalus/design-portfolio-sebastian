import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardControls from "./ProjectCardControls";

function ProjectCard({
  currentViewport,
  projects,
  activeProjectIndex,
  activeImageIndex,
  setActiveImageIndex,
  designArea,
  animationDirectionIn,
}) {
  const activeProject = projects[activeProjectIndex];
  const imageAmount = activeProject.images.length;

  if (activeImageIndex < 0) setActiveImageIndex(imageAmount - 1);
  if (activeImageIndex > imageAmount - 1) setActiveImageIndex(0);

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: activeProject.backgroundColor || "black",
        color: activeProject.mainColorDark ? "black" : "white",
        borderColor: activeProject.mainColorDark ? "black" : "white",
      }}
    >
      <div className="project-card-image-container">
        {activeProject.images.map((image, index) => (
          <div
            className={classNames("project-card-image-wrapper", {
              "project-card-image-wrapper-active": activeImageIndex === index,
            })}
          >
            <img
              src={`./assets/${image}`}
              alt={activeProject.title}
              className={activeProject.classes}
              style={activeProject.imageStyle}
            />
          </div>
        ))}
        <ProjectCardDescription
          currentViewport={currentViewport}
          designArea={designArea}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
        />
      </div>
      <div className="project-card-controls-container">
        <ProjectCardControls
          currentViewport={currentViewport}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          imageAmount={imageAmount}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
