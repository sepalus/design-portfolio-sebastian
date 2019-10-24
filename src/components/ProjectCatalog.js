import React from "react";
import classNames from "classnames";

function ProjectCatalog({
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
  animateIn
}) {
  return (
    <div
      className={classNames(
        "project-catalog",
        { "animate-catalog-in": animateIn },
        { "animate-catalog-out": !animateIn }
      )}
    >
      <h2>Product Design</h2>
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
