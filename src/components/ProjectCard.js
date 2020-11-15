import React from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardControls from "./ProjectCardControls";

function ProjectCard({
  currentViewport,
  activeProject,
  activeImageIndex,
  imageAmount,
  catalogIsCompressed,
  toggleCardClass,
  toggleDescriptionClass,
  selectImage,
}) {
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
          activeProject={activeProject}
          toggleDescriptionClass={toggleDescriptionClass}
        />
      </div>
      <ProjectCardControls
        currentViewport={currentViewport}
        activeProject={activeProject}
        activeImageIndex={activeImageIndex}
        imageAmount={imageAmount}
        catalogIsCompressed={catalogIsCompressed}
        selectImage={selectImage}
      />
    </div>
  );
}

export default ProjectCard;
