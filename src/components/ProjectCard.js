import React from "react";
import classNames from "classnames";
import "./ProjectCard.scss";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";

function ProjectCard({
  projects,
  activeProjectIndex,
  animationDirectionIn,
  descriptionExpanded,
  animateOut,
}) {
  const activeProject = projects[activeProjectIndex];

  return (
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
              src={project.image}
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
            "animate-description-static": !animateOut && !descriptionExpanded,
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
            <p>{activeProject.isTeam ? "Design Team" : "Sebastian Högnabba"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
