import React from "react";
import classNames from "classnames";

const formattedNumber = number => ("0" + number).slice(-2);

function ProjectCard({
  activeProject,
  activeProjectNumber,
  animationDirectionIn
}) {
  return (
    <div
      className={classNames(
        "project-card",
        { "animate-card-in": animationDirectionIn },
        { "animate-card-out": !animationDirectionIn }
      )}
      style={activeProject.style}
    >
      <div className="project-card-description">
        <h1>{formattedNumber(activeProjectNumber)}</h1>
        <h1>{activeProject.title}</h1>
        <h4>{activeProject.description}</h4>
      </div>
      <div className="project-card-footer"></div>
    </div>
  );
}

export default ProjectCard;
