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
      <ProjectCardCarousel
        currentViewport={currentViewport}
        activeProject={activeProject}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        carouselIsOpen={carouselIsOpen}
        setCarouselIsOpen={setCarouselIsOpen}
        imageAmount={imageAmount}
      />
      );
    </div>
  );
}

export default ProjectCard;
