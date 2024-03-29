import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardControls.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Close from "@material-ui/icons/Close";

function ProjectCardControls({
  activeProject,
  activeImageIndex,
  imageAmount,
  filteredImages,
  currentViewport,
  catalogIsCompressed,
  scrollImagesPrevious,
  scrollImagesNext,
  selectImage,
  isMobile,
  previousProject,
  nextProject,
}) {
  const keyPressHandler = (event) => {
    if (currentViewport === 1 || currentViewport === 2) {
      if (event.keyCode === 32)
        scrollImagesNext(activeImageIndex, currentViewport);
      if (event.keyCode === 37)
        scrollImagesPrevious(activeImageIndex, currentViewport);
      if (event.keyCode === 39)
        scrollImagesNext(activeImageIndex, currentViewport);
      if (event.keyCode === 38) {
        event.preventDefault();
        previousProject(currentViewport);
      }
      if (event.keyCode === 40) {
        event.preventDefault();
        nextProject(currentViewport);
      }
    }
  };

  const controlIsDark = isMobile
    ? activeProject.mainColorDark
    : activeProject.hasOwnProperty("controlColorDark")
    ? activeProject.controlColorDark
    : activeProject.mainColorDark || false;

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return (
    <div
      className={classNames(
        "project-card-controls",
        {
          "project-card-controls-dark": controlIsDark,
        },
        {
          "project-card-controls-compressed": catalogIsCompressed,
        }
      )}
    >
      {imageAmount > 1 && (
        <>
          <div
            className={classNames("project-card-control-buttons-container", {
              "project-card-control-buttons-container-wide": imageAmount > 6,
            })}
          >
            <ChevronLeft
              className={
                controlIsDark
                  ? "clickable-text-element-dark"
                  : "clickable-text-element"
              }
              onClick={() => scrollImagesPrevious(activeImageIndex)}
            />
            <div className="project-card-controls-image-buttons">
              {filteredImages.map((image, index) => (
                <ImageButton
                  activeImageIndex={activeImageIndex}
                  selectImage={selectImage}
                  index={index}
                />
              ))}
            </div>
            <ChevronRight
              className={
                controlIsDark
                  ? "clickable-text-element-dark"
                  : "clickable-text-element"
              }
              onClick={() => scrollImagesNext(activeImageIndex)}
            />
          </div>
        </>
      )}
    </div>
  );
}

const ImageButton = ({ activeImageIndex, selectImage, index }) => (
  <span
    className={classNames({
      "project-card-controls-image-active-button": activeImageIndex === index,
    })}
    onClick={() => selectImage(index)}
  />
);

export default ProjectCardControls;
