import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardCarousel.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Close from "@material-ui/icons/Close";

function ProjectCardCarousel({ project, setCarouselIsOpen }) {
  const [activeImage, setActiveImage] = useState(1);
  const imageAmount = project.images.length;

  useEffect(() => {
    setActiveImage(0);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  const keyPressHandler = (event) => {
    if (event.keyCode === 27) closeCarousel();
  };

  const closeCarousel = () => {
    setActiveImage(0);
    setCarouselIsOpen(false);
  };

  if (activeImage < 0) setActiveImage(imageAmount - 1);
  if (activeImage > imageAmount - 1) setActiveImage(0);

  return (
    <div className="project-card-carousel">
      <div
        className="project-card-carousel-main-area-cover clickable-background-element"
        onClick={closeCarousel}
      />
      <div className="project-card-carousel-image-container">
        {project.images.map((image, index) => (
          <CarouselImage
            activeImage={activeImage}
            project={project}
            index={index}
          />
        ))}

        <div className="project-card-carousel-close-button">
          <Close className="clickable-text-element" onClick={closeCarousel} />
        </div>

        {imageAmount > 1 && (
          <div className="project-card-carousel-next-buttons">
            <ChevronLeft
              className="clickable-text-element"
              onClick={() => setActiveImage(activeImage - 1)}
            ></ChevronLeft>
            <ChevronRight
              className="clickable-text-element"
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
    </div>
  );
}

const CarouselImage = ({ activeImage, project, index }) => (
  <div
    className={classNames("project-card-carousel-image-wrapper", {
      "project-card-carousel-image-wrapper-active": activeImage === index,
    })}
  >
    <img src={`./assets/${project.images[index]}`} alt="" />
  </div>
);

const ImageButton = ({ activeImage, setActiveImage, index }) => (
  <span
    className={classNames({
      "project-card-carousel-image-active-button": activeImage === index,
    })}
    onClick={() => setActiveImage(index)}
  />
);

export default ProjectCardCarousel;
