import React from "react";
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";

import "./ProjectCard.scss";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardControls from "./ProjectCardControls";
import Menu from "@material-ui/icons/Menu";

function ProjectCard({
  currentViewport,
  designArea,
  activeProject,
  activeImageIndex,
  filteredImages,
  filteredImageStyleIndividualMobile,
  imageAmount,
  catalogIsCompressed,
  toggleCardClass,
  toggleCardImageClass,
  toggleDescriptionClass,
  setCatalogIsOpenMobile,
  selectImage,
  previousProject,
  nextProject,
  windowHeight,
  isMobile,
  isTablet,
}) {
  const isDigital = designArea === 2;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => selectImage(activeImageIndex + 1),
    onSwipedRight: () => selectImage(activeImageIndex - 1),
  });

  return (
    <div
      className="project-card"
      style={{
        backgroundColor:
          isMobile && activeProject.backgroundColorMobile
            ? activeProject.backgroundColorMobile
            : activeProject.backgroundColor || "black",
        color: activeProject.mainColorDark ? "black" : "white",
        borderColor: activeProject.mainColorDark ? "black" : "white",
      }}
    >
      {isMobile && (
        <div
          className={classNames("project-card-title-element-mobile", {
            "project-card-title-element-mobile-digital": isDigital,
          })}
        >
          <Menu onClick={() => setCatalogIsOpenMobile(true)} />
          <h2>
            {isDigital ? "Digital and Service" : "Products and Furniture"}
          </h2>
        </div>
      )}
      <div className="project-card-image-container" {...swipeHandlers}>
        {filteredImages.map((image, index) => {
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

          const imageStyleMobile = activeProject.imageStyleMobile
            ? filteredImageStyleIndividualMobile
              ? {
                  ...activeProject.imageStyleMobile.common,
                  ...filteredImageStyleIndividualMobile[index],
                }
              : activeProject.imageStyleMobile.common
            : {};

          const imageMaxSizeMobile = Math.max(360, windowHeight - 320);

          return (
            <div
              className={classNames(
                "project-card-image-wrapper",
                {
                  "project-card-image-wrapper-active":
                    index === activeImageIndex,
                },
                { "animate-card-static": isMobile },
                {
                  "animate-card-fade-in-1": !isMobile && toggleCardClass === 1,
                },
                {
                  "animate-card-fade-in-2": !isMobile && toggleCardClass === -1,
                },
                {
                  "animate-card-fade-out": !isMobile && toggleCardClass === 0,
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
                    ? {
                        ...imageStyleMobile,
                        maxHeight: `${imageMaxSizeMobile}px`,
                      }
                    : { ...imageStyle, ...imageStyleTablet }
                }
              />
            </div>
          );
        })}
        <ProjectCardControls
          currentViewport={currentViewport}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
          imageAmount={imageAmount}
          filteredImages={filteredImages}
          catalogIsCompressed={catalogIsCompressed}
          selectImage={selectImage}
          isMobile={isMobile}
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
      <ProjectCardDescription
        currentViewport={currentViewport}
        activeProject={activeProject}
        toggleDescriptionClass={toggleDescriptionClass}
        windowHeight={windowHeight}
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </div>
  );
}

export default ProjectCard;
