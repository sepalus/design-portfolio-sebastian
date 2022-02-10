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
  windowWidth,
  windowHeight,
  isMobileExtraSmall,
  isMobile,
  isTablet,
}) {
  const isDigital = designArea === 1;
  const isSmallHeight = windowHeight < 500;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => selectImage(activeImageIndex + 1),
    preventDefaultTouchmoveEvent: true,
    onSwipedRight: () => selectImage(activeImageIndex - 1),
    preventDefaultTouchmoveEvent: true,
  });

  const projectCardImageHeightMobile = Math.min(
    360,
    windowWidth / 1.5,
    isSmallHeight ? windowHeight - 60 : windowHeight - 290
  );

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
      {!isSmallHeight && (
        <ProjectCardDescription
          currentViewport={currentViewport}
          activeProject={activeProject}
          toggleDescriptionClass={toggleDescriptionClass}
          windowHeight={windowHeight}
          isMobileExtraSmall={isMobileExtraSmall}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}
    </div>
  );
}

export default ProjectCard;
