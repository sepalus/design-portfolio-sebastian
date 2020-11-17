import React from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardControls from "./ProjectCardControls";

function ProjectCard({
  currentViewport,
  designArea,
  activeProject,
  activeImageIndex,
  imageAmount,
  catalogIsCompressed,
  toggleCardClass,
  toggleCardImageClass,
  toggleDescriptionClass,
  selectImage,
  windowHeight,
  isMobile,
  isTablet,
}) {
  const isDigital = designArea === 2;

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: activeProject.backgroundColor || "black",
        color: activeProject.mainColorDark ? "black" : "white",
        borderColor: activeProject.mainColorDark ? "black" : "white",
      }}
    >
      {isMobile && (
        <div className="project-card-title-element-mobile">
          <h2>
            {isDigital ? "Digital and Service" : "Products and Furniture"}
          </h2>
        </div>
      )}
      <div className="project-card-image-container">
        {activeProject.images.map((image, index) => {
          const imageStyle = activeProject.imageStyle
            ? activeProject.imageStyle.individual
              ? {
                  ...activeProject.imageStyle.common,
                  ...activeProject.imageStyle.individual[index],
                }
              : activeProject.imageStyle.common
            : {};

          const imageStyleTablet = activeProject.imageStyleTablet
            ? activeProject.imageStyleTablet.individual
              ? {
                  ...activeProject.imageStyleTablet.common,
                  ...activeProject.imageStyleTablet.individual[index],
                }
              : activeProject.imageStyleTablet.common
            : {};

          const imageStyleMobile =
            activeProject.imageStyleMobile &&
            activeProject.imageStyleMobile.common;

          return (
            <div
              className={classNames(
                "project-card-image-wrapper",
                {
                  "project-card-image-wrapper-active":
                    index === activeImageIndex,
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
                className={classNames(activeProject.classes, {
                  "project-card-image-static": toggleCardImageClass === 0,
                })}
                style={
                  isMobile
                    ? imageStyleMobile
                    : { ...imageStyle, ...imageStyleTablet }
                }
              />
            </div>
          );
        })}
      </div>
      <ProjectCardDescription
        currentViewport={currentViewport}
        activeProject={activeProject}
        toggleDescriptionClass={toggleDescriptionClass}
        windowHeight={windowHeight}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <ProjectCardControls
        currentViewport={currentViewport}
        activeProject={activeProject}
        activeImageIndex={activeImageIndex}
        imageAmount={imageAmount}
        catalogIsCompressed={catalogIsCompressed}
        selectImage={selectImage}
        isMobile={isMobile}
      />
    </div>
  );
}

export default ProjectCard;
