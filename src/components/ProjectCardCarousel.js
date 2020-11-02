import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardCarousel.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Close from "@material-ui/icons/Close";

function ProjectCardCarousel({ project, setCarouselIsOpen }) {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    setActiveImage(0);
  }, []);

  if (activeImage < 0) setActiveImage(3);
  if (activeImage > 3) setActiveImage(0);

  return (
    <div className="project-card-carousel">
      <div
        className="project-card-carousel-margin-area"
        onClick={() => setCarouselIsOpen(false)}
      />
      <div className="project-card-carousel-image-container">
        <div
          className={classNames("project-card-carousel-image-wrapper", {
            "project-card-carousel-image-wrapper-active": activeImage === 0,
          })}
        >
          <img src={`./assets/${project.images[0]}`} alt="" className="" />
        </div>
        <div
          className={classNames("project-card-carousel-image-wrapper", {
            "project-card-carousel-image-wrapper-active": activeImage === 1,
          })}
        >
          <img src={`./assets/${project.images[1]}`} alt="" className="" />
        </div>
        <div
          className={classNames("project-card-carousel-image-wrapper", {
            "project-card-carousel-image-wrapper-active": activeImage === 2,
          })}
        >
          <img src={`./assets/${project.images[2]}`} alt="" className="" />
        </div>
        <div
          className={classNames("project-card-carousel-image-wrapper", {
            "project-card-carousel-image-wrapper-active": activeImage === 3,
          })}
        >
          <img src={`./assets/${project.images[3]}`} alt="" className="" />
        </div>
        <div className="project-card-carousel-close-button">
          <Close
            className="clickable-element"
            onClick={() => setCarouselIsOpen(false)}
          />
        </div>

        <div className="project-card-carousel-next-buttons">
          <ChevronLeft
            className="clickable-element"
            onClick={() => setActiveImage(activeImage - 1)}
          ></ChevronLeft>
          <ChevronRight
            className="clickable-element"
            onClick={() => setActiveImage(activeImage + 1)}
          ></ChevronRight>
        </div>
        <div className="project-card-carousel-image-buttons">
          <span
            className={
              activeImage === 0 && "project-card-carousel-image-active-button"
            }
            onClick={() => setActiveImage(0)}
          ></span>
          <span
            className={
              activeImage === 1 && "project-card-carousel-image-active-button"
            }
            onClick={() => setActiveImage(1)}
          ></span>
          <span
            className={
              activeImage === 2 && "project-card-carousel-image-active-button"
            }
            onClick={() => setActiveImage(2)}
          ></span>
          <span
            className={
              activeImage === 3 && "project-card-carousel-image-active-button"
            }
            onClick={() => setActiveImage(3)}
          ></span>
        </div>
      </div>
      <div
        className="project-card-carousel-margin-area"
        onClick={() => setCarouselIsOpen(false)}
      />
    </div>
  );
}

export default ProjectCardCarousel;
