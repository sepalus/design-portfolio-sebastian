import React from "react";
import classNames from "classnames";
import "./ProjectCatalog.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";

function ProjectCatalog({
  designArea,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
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
        {projects.map((project, index) => {
          const isActive = index === activeProjectIndex;
          return (
            <li
              className={classNames({
                "project-catalog-active-project": isActive,
              })}
              onMouseOver={() => setActiveProjectIndex(index)}
            >
              <button
                className={classNames("link-button", {
                  "icon-button": isActive,
                })}
                onClick={() => {}}
              >
                <h4>{project.title}</h4>
                {designArea === 1 && isActive && <ChevronRight />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCatalog;
