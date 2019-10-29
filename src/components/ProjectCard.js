import React from "react";
import classNames from "classnames";

const formattedNumber = number => ("0" + number).slice(-2);

function ProjectCard({ projects, activeProjectIndex, animationDirectionIn }) {
  const activeProject = projects[activeProjectIndex];

  return (
    <div
      className={classNames(
        "project-card",
        { "animate-card-in": animationDirectionIn },
        { "animate-card-out": !animationDirectionIn }
      )}
      style={activeProject.style}
    >
      <div className="project-card-image-wrapper">
        {projects.map((project, index) => {
          const classes = project.classes;
          return (
            <img
              src={project.image}
              alt=""
              className={classNames(
                { classes: !!classes },
                { "animate-card-fade-in": activeProjectIndex === index },
                { "animate-card-fade-out": activeProjectIndex !== index }
              )}
            />
          );
        })}
      </div>
      <div className="project-card-text-wrapper">
        <div className="project-card-description">
          <h1>{formattedNumber(activeProjectIndex + 1)}</h1>
          <h1>{activeProject.title}</h1>
          <h4>{activeProject.description}</h4>
        </div>
        <div className="project-card-footer"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
