import React from "react";
import classNames from "classnames";

function ProjectCard({ projects, activeProjectIndex, animationDirectionIn }) {
  const activeProject = projects[activeProjectIndex];

  return (
    <div
      className={classNames(
        "project-card",
        { "animate-card-in": animationDirectionIn },
        { "animate-card-out": !animationDirectionIn }
      )}
      style={{
        ...activeProject.style,
        color: activeProject.styleDarkColor ? "black" : "white",
      }}
    >
      <div className="project-card-image-wrapper">
        {projects.map((project, index) => (
          <img
            src={project.image}
            alt=""
            className={classNames(
              [project.classes],
              { "animate-card-fade-in": activeProjectIndex === index },
              { "animate-card-fade-out": activeProjectIndex !== index }
            )}
          />
        ))}
      </div>
      <div className="project-card-text-wrapper">
        <div className="project-card-description">
          <h1>{activeProject.title}</h1>
          <h4>{activeProject.description}</h4>
        </div>
        <div className="project-card-footer"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
