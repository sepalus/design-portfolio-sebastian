import React from "react";
import classNames from "classnames";
import "./ProjectCatalog.scss";

function ProjectCatalog({
  designArea,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
  animationDirectionIn,
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
        {designArea === 3
          ? "Aesthetics"
          : designArea === 2
          ? "Digital and Service Design"
          : "Product and Furniture Design"}
      </h2>
      <ul className="project-catalog-projects">
        {projects.map((project, index) => (
          <li
            className={classNames({
              "project-catalog-active-project": index === activeProjectIndex,
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
