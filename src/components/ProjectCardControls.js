import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardControls.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Close from "@material-ui/icons/Close";

function ProjectCardControls({
  activeProject,
  activeImageIndex,
  setActiveImageIndex,
  imageAmount,
  currentViewport,
}) {
  const keyPressHandler = (event) => {
    if (currentViewport === 1 || currentViewport === 2) {
      if (event.keyCode === 32) setActiveImageIndex(activeImageIndex + 1);
      if (event.keyCode === 37) setActiveImageIndex(activeImageIndex - 1);
      if (event.keyCode === 39) setActiveImageIndex(activeImageIndex + 1);
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
      className={classNames("project-card-controls", {
        "project-card-controls-dark": controlIsDark,
      })}
    >
      {imageAmount > 1 && (
        <>
          <div className="project-card-control-buttons-container">
            <ChevronLeft
              className={
                controlIsDark
                  ? "clickable-text-element-dark"
                  : "clickable-text-element"
              }
              onClick={() => setActiveImageIndex(activeImageIndex - 1)}
            />
            <div className="project-card-controls-image-buttons">
              {activeProject.images.map((image, index) => (
                <ImageButton
                  activeImageIndex={activeImageIndex}
                  setActiveImageIndex={setActiveImageIndex}
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
              onClick={() => setActiveImageIndex(activeImageIndex + 1)}
            />
          </div>
        </>
      )}
    </div>
  );
}

const ImageButton = ({ activeImageIndex, setActiveImageIndex, index }) => (
  <span
    className={classNames({
      "project-card-controls-image-active-button": activeImageIndex === index,
    })}
    onClick={() => setActiveImageIndex(index)}
  />
);

export default ProjectCardControls;
