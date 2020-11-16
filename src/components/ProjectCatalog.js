import React, { useState } from "react";
import classNames from "classnames";
import "./ProjectCatalog.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

function ProjectCatalog({
  designArea,
  projects,
  activeProjectIndex,
  catalogIsCompressed,
  setCatalogIsCompressed,
  selectProject,
}) {
  const isDigital = designArea === 2;

  const catalogIsDark = projects[activeProjectIndex].hasOwnProperty(
    "catalogColorDark"
  )
    ? projects[activeProjectIndex].catalogColorDark
    : projects[activeProjectIndex].mainColorDark || false;

  return (
    <div
      className={classNames(
        "project-catalog",
        {
          "project-catalog-compressed animate-catalog-compress": catalogIsCompressed,
        },
        { "animate-catalog-expand": !catalogIsCompressed },
        { "project-catalog-dark": catalogIsDark }
      )}
    >
      <h2>
        {catalogIsCompressed
          ? "."
          : isDigital
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
                onClick={() => selectProject(index)}
              >
                {catalogIsCompressed ? (
                  <img src={`./assets/icons/${project.id}.png`} alt="" />
                ) : (
                  <h4>{project.title}</h4>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        className={classNames("vertical-line vertical-line-top", {
          "vertical-line-right": isDigital,
        })}
      ></div>
      <div
        className={classNames("vertical-line vertical-line-bottom", {
          "vertical-line-right": isDigital,
        })}
      ></div>
      <div className="project-catalog-expand-button">
        {(catalogIsCompressed && !isDigital) ||
        (!catalogIsCompressed && isDigital) ? (
          <ChevronRight
            onClick={() => setCatalogIsCompressed(!catalogIsCompressed)}
          />
        ) : (
          <ChevronLeft
            onClick={() => setCatalogIsCompressed(!catalogIsCompressed)}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCatalog;
