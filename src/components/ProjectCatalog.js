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
      className={classNames("project-catalog", {
        "project-catalog-dark": projects[activeProjectIndex].styleDarkColor,
      })}
    >
      <h2>
        {designArea === 3
          ? "Aesthetics"
          : designArea === 2
          ? "Digital and Service"
          : "Products and Furniture"}
      </h2>
      <ul className="project-catalog-projects">
        {projects.map((project, index) => (
          <li
            className={classNames({
              "project-catalog-active-project": index === activeProjectIndex,
            })}
            onMouseOver={() => setActiveProjectIndex(index)}
          >
            <button className="link-button">
              <h4>{project.title}</h4>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCatalog;
