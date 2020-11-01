import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./ProjectCardCarousel.scss";

function ProjectCardCarousel({ project }) {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    setActiveImage(0);
  }, []);

  if (activeImage < 0) setActiveImage(3);
  if (activeImage > 3) setActiveImage(0);

  return (
    <div className="project-card-carousel">
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
        <div className="project-card-carousel-next-buttons">
          <button onClick={() => setActiveImage(activeImage - 1)}>prev</button>
          <button onClick={() => setActiveImage(activeImage + 1)}>next</button>
        </div>
        <div className="project-card-carousel-image-buttons">
          <button onClick={() => setActiveImage(0)}>o</button>
          <button onClick={() => setActiveImage(1)}>o</button>
          <button onClick={() => setActiveImage(2)}>o</button>
          <button onClick={() => setActiveImage(3)}>o</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardCarousel;
