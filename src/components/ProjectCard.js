import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardControls from "./ProjectCardControls";

function ProjectCard({
  currentViewport,
  projects,
  activeProjectIndex,
  designArea,
  animationDirectionIn,
}) {
  const [activeImage, setActiveImage] = useState(0);
  const activeProject = projects[activeProjectIndex];
  const imageAmount = activeProject.images.length;

  if (activeImage < 0) setActiveImage(imageAmount - 1);
  if (activeImage > imageAmount - 1) setActiveImage(0);

  return (
    <div
      className={classNames("project-card", {
        "project-card-dark": activeProject.styleDarkColor,
      })}
      style={{
        backgroundColor: activeProject.backgroundColor || "black",
        color: activeProject.styleDarkColor ? "black" : "white",
        borderColor: activeProject.styleDarkColor ? "black" : "white",
      }}
    >
      <div className="project-card-image-container">
        {activeProject.images.map((image, index) => (
          <div
            className={classNames("project-card-image-wrapper", {
              "project-card-image-wrapper-active": activeImage === index,
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
          project={activeProject}
          activeProject={activeProject}
        />
      </div>
      <div className="project-card-controls-container">
        <ProjectCardControls
          currentViewport={currentViewport}
          activeProject={activeProject}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          imageAmount={imageAmount}
        />
      </div>
      );
    </div>
  );
}

export default ProjectCard;
