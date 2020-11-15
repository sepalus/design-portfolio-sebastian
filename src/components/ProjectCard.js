import React, { useState, useEffect } from "react";
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
  catalogIsCompressed,
}) {
  const [toggleCardClass, setToggleCardClass] = useState(0);
  const activeProject = projects[activeProjectIndex];
  const imageAmount = activeProject.images.length;

  if (activeImageIndex < 0) setActiveImageIndex(imageAmount - 1);
  if (activeImageIndex > imageAmount - 1) setActiveImageIndex(0);

  useEffect(() => {
    setToggleCardClass(currentViewport === designArea ? 1 : 0);
  }, [currentViewport]);

  useEffect(() => {
    setToggleCardClass(-toggleCardClass);
  }, [activeImageIndex, activeProjectIndex]);

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
            className={classNames(
              "project-card-image-wrapper",
              {
                "project-card-image-wrapper-active": index === activeImageIndex,
              },
              {
                "animate-card-fade-in-1": toggleCardClass === 1,
              },
              {
                "animate-card-fade-in-2": toggleCardClass === -1,
              },
              {
                "animate-card-fade-out": toggleCardClass === 0,
              }
            )}
          >
            <img
              src={`./assets/${image}`}
              alt={activeProject.title}
              className={activeProject.classes}
              style={
                activeProject.imageStyle
                  ? activeProject.imageStyle.individual
                    ? {
                        ...activeProject.imageStyle.common,
                        ...activeProject.imageStyle.individual[index],
                      }
                    : activeProject.imageStyle.common
                  : {}
              }
            />
          </div>
        ))}
        <ProjectCardDescription
          currentViewport={currentViewport}
          designArea={designArea}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
          catalogIsCompressed={catalogIsCompressed}
        />
      </div>
      <ProjectCardControls
        currentViewport={currentViewport}
        activeProject={activeProject}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        imageAmount={imageAmount}
      />
    </div>
  );
}

export default ProjectCard;
