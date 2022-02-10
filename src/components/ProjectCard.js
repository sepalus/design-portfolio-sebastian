import React, { useEffect } from "react";
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
  windowWidth,
  windowHeight,
  isMobile,
  isTablet,
}) {
  const projectCardElement = document.getElementById("project-card");
  const isDigital = designArea === 1;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => selectImage(activeImageIndex + 1),
    preventDefaultTouchmoveEvent: true,
    onSwipedRight: () => selectImage(activeImageIndex - 1),
    preventDefaultTouchmoveEvent: true,
  });

  const projectCardImageHeightMobile = Math.min(360, windowWidth / 1.5);

  useEffect(() => {
    if (!projectCardElement) return;
    projectCardElement.addEventListener("touchmove", (event) =>
      event.preventDefault()
    );
    return () => {
      projectCardElement.removeEventListener("touchmove", (event) =>
        event.preventDefault()
      );
    };
  }, [projectCardElement]);

  return (
    <div
      id="project-card"
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
          <h2>{isDigital ? "UX and Service" : "Products and Furniture"}</h2>
        </div>
      )}
      <div
        {...swipeHandlers}
        className="project-card-image-container"
        style={{
          height: isMobile ? `${projectCardImageHeightMobile}px` : null,
        }}
      >
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

          const imageBackgroundMobile = activeProject.backgroundColorLight
            ? activeProject.backgroundColorLight.individual &&
              activeProject.backgroundColorLight.individual[index]
              ? activeProject.backgroundColorLight.individual[index]
              : activeProject.backgroundColorLight.common
            : null;

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
              style={isMobile ? { backgroundColor: imageBackgroundMobile } : {}}
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
                      }
                    : isTablet
                    ? { ...imageStyle, ...imageStyleTablet }
                    : imageStyle
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
