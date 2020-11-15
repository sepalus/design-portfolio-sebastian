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
  currentViewport,
  catalogIsCompressed,
  selectImage,
}) {
  const keyPressHandler = (event) => {
    if (currentViewport === 1 || currentViewport === 2) {
      if (event.keyCode === 32) selectImage(activeImageIndex + 1);
      if (event.keyCode === 37) selectImage(activeImageIndex - 1);
      if (event.keyCode === 39) selectImage(activeImageIndex + 1);
    }
  };

  const controlIsDark = activeProject.hasOwnProperty("controlColorDark")
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
              onClick={() => selectImage(activeImageIndex - 1)}
            />
            <div className="project-card-controls-image-buttons">
              {activeProject.images.map((image, index) => (
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
              onClick={() => selectImage(activeImageIndex + 1)}
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
