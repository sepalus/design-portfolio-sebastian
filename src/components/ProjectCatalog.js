import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCatalog.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

function ProjectCatalog({
  designArea,
  projects,
  activeProjectIndex,
  setActiveProjectIndex,
}) {
  const [isCompressed, setIsCompressed] = useState(false);

  return (
    <div
      className={classNames(
        "project-catalog",
        { "project-catalog-compressed": isCompressed },
        {
          "project-catalog-dark": projects[activeProjectIndex].hasOwnProperty(
            "styleCatalogDarkColor"
          )
            ? projects[activeProjectIndex].styleCatalogDarkColor
            : projects[activeProjectIndex].styleDarkColor,
        }
      )}
    >
      <h2>
        {isCompressed
          ? ""
          : designArea === 3
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
                onClick={() => setActiveProjectIndex(index)}
              >
                {isCompressed ? (
                  <img src={`./assets/icons/${project.id}.png`} alt="K" />
                ) : (
                  <h4>{project.title}</h4>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="vertical-line vertical-line-top"></div>
      <div className="vertical-line vertical-line-bottom"></div>
      <div className="project-catalog-expand-button">
        {isCompressed ? (
          <ChevronRight onClick={() => setIsCompressed(!isCompressed)} />
        ) : (
          <ChevronLeft onClick={() => setIsCompressed(!isCompressed)} />
        )}
      </div>
    </div>
  );
}

export default ProjectCatalog;
