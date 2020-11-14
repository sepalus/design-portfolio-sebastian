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
  const [activeImage, setActiveImage] = useState(0);
  const project = activeProject;
  const imageAmount = project.images.length;
  const isActive = true;

  if (activeImage < 0) setActiveImage(imageAmount - 1);
  if (activeImage > imageAmount - 1) setActiveImage(0);

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
          {project.images.map((image, index) => (
            <div
              className={classNames("project-card-carousel-image-wrapper", {
                "project-card-carousel-image-wrapper-active":
                  activeImage === index,
              })}
            >
              <img
                src={`./assets/${image}`}
                alt=""
                className={classNames(
                  [project.classes],
                  { "animate-card-fade-in": false },
                  { "animate-card-fade-out": false }
                )}
                style={project.imageStyle}
              />
            </div>
          ))}
          <ProjectCardDescription
            currentViewport={currentViewport}
            designArea={designArea}
            project={project}
            activeProject={activeProject}
          />
          <ProjectCardCarousel
            designArea={designArea}
            project={activeProject}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            carouselIsOpen={carouselIsOpen}
            setCarouselIsOpen={setCarouselIsOpen}
            imageAmount={imageAmount}
          />
          );
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
