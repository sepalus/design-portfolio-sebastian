import React from "react";
import classNames from "classnames";

function ProjectCatalog({
  currentDesignArea,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
  animationDirectionIn
}) {
  return (
    <div
      className={classNames(
        "project-catalog",
        { "animate-catalog-in": animationDirectionIn },
        { "animate-catalog-out": !animationDirectionIn }
      )}
    >
      <h2>
        {currentDesignArea.area === 1 ? "Digital Design" : "Product Design"}
      </h2>
      <ul className="project-catalog-projects">
        {projects.map((project, index) => (
          <li
            className={classNames({
              "project-catalog-active-project": index === activeProjectIndex
            })}
            onMouseOver={() => setActiveProjectIndex(index)}
          >
            <h3>{project.title}</h3>
            <p>{project.categories[project.displayableCategory]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCatalog;
