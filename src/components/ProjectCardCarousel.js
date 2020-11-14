import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardCarousel.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Close from "@material-ui/icons/Close";

function ProjectCardCarousel({
  project,
  carouselIsOpen,
  setCarouselIsOpen,
  activeImage,
  setActiveImage,
  imageAmount,
}) {
  const keyPressHandler = (event) => {
    if (carouselIsOpen) {
      if (event.keyCode === 27) setCarouselIsOpen(false);
      if (event.keyCode === 32) setActiveImage(activeImage + 1);
      if (event.keyCode === 37) setActiveImage(activeImage - 1);
      if (event.keyCode === 39) setActiveImage(activeImage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return (
    <div className="project-card-carousel">
      <div className="project-card-carousel-close-button">
        <Close
          className={
            project.styleDarkColor
              ? "clickable-text-element-dark"
              : "clickable-text-element"
          }
          onClick={() => setCarouselIsOpen(false)}
        />
      </div>

      {imageAmount > 1 && (
        <div className="project-card-carousel-next-buttons">
          <ChevronLeft
            className={
              project.styleDarkColor
                ? "clickable-text-element-dark"
                : "clickable-text-element"
            }
            onClick={() => setActiveImage(activeImage - 1)}
          ></ChevronLeft>
          <ChevronRight
            className={
              project.styleDarkColor
                ? "clickable-text-element-dark"
                : "clickable-text-element"
            }
            onClick={() => setActiveImage(activeImage + 1)}
          ></ChevronRight>
        </div>
      )}
      {imageAmount > 1 && (
        <div className="project-card-carousel-image-buttons">
          {project.images.map((image, index) => (
            <ImageButton
              activeImage={activeImage}
              setActiveImage={setActiveImage}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const ImageButton = ({ activeImage, setActiveImage, index }) => (
  <span
    className={classNames({
      "project-card-carousel-image-active-button": activeImage === index,
    })}
    onClick={() => setActiveImage(index)}
  />
);

export default ProjectCardCarousel;
