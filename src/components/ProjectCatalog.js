import React from "react";
import classNames from "classnames";
import "./ProjectCatalog.scss";
import Fullscreen from "@material-ui/icons/Fullscreen";

function ProjectCatalog({
  designArea,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
  setCarouselIsOpen,
}) {
  return (
    <div
      className={classNames("project-catalog", {
        "project-catalog-dark": projects[activeProjectIndex].hasOwnProperty(
          "styleCatalogDarkColor"
        )
          ? projects[activeProjectIndex].styleCatalogDarkColor
          : projects[activeProjectIndex].styleDarkColor,
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
            >
              <button
                className={classNames("link-button", {
                  "icon-button icon-button-space": isActive,
                })}
                onClick={() => {
                  if (activeProjectIndex === index) setCarouselIsOpen(true);
                  else setActiveProjectIndex(index);
                }}
              >
                <h4>{project.title}</h4>
                {isActive && <Fullscreen />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCatalog;
