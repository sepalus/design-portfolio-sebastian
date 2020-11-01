import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";
import ProjectCardCarousel from "./ProjectCardCarousel";

function ProjectCard({
  projects,
  activeProjectIndex,
  designArea,
  animationDirectionIn,
  descriptionExpanded,
  animateOut,
}) {
  const activeProject = projects[activeProjectIndex];
  const [carouselIsOpen, setCarouselIsOpen] = useState(false);

  return (
    <>
      <div
        className={classNames(
          "project-card",
          { "animate-card-in": animationDirectionIn },
          { "animate-card-out": !animationDirectionIn }
        )}
        style={{
          backgroundColor: activeProject.backgroundColor || "black",
          color: activeProject.styleDarkColor ? "black" : "white",
        }}
      >
        <div className="project-card-image-wrapper">
          {projects.map((project, index) => {
            const isActive = activeProjectIndex === index;

            return (
              <img
                src={`./assets/${project.images[0]}`}
                alt=""
                className={classNames(
                  [project.classes],
                  { "animate-card-fade-in": isActive },
                  { "animate-card-fade-out": !isActive }
                )}
                style={project.imageStyle}
              />
            );
          })}
        </div>

        {designArea === 1 && (
          <div
            className={classNames(
              "project-card-description-wrapper",
              {
                "animate-description-in": descriptionExpanded,
              },
              {
                "animate-description-out": animateOut && !descriptionExpanded,
              },
              {
                "animate-description-static":
                  !animateOut && !descriptionExpanded,
              }
            )}
            style={activeProject.descriptionStyle}
          >
            <div className="vertical-line"></div>
            <h3 className="project-card-description-title">
              {activeProject.title}
            </h3>
            <p className="project-card-description-text">
              {activeProject.description}
            </p>
            <div className="project-card-description-tag-wrapper">
              <div className="project-card-description-tag">
                <CalendarToday className="project-card-description-tag-icon" />
                <p> {activeProject.year}</p>
              </div>
              <div className="project-card-description-tag">
                {activeProject.isTeam ? (
                  <People className="project-card-description-tag-icon" />
                ) : (
                  <Person className="project-card-description-tag-icon" />
                )}
                <p>
                  {activeProject.isTeam ? "Design Team" : "Sebastian Högnabba"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        style={{ position: "absolute", top: "50px", left: "50px", zIndex: 4 }}
        onClick={() => setCarouselIsOpen(!carouselIsOpen)}
      >
        Toggle carousel
      </button>
      {carouselIsOpen && <ProjectCardCarousel project={activeProject} />}
    </>
  );
}

export default ProjectCard;
