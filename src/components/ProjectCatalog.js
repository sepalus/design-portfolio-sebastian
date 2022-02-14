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
  setToggleCardImageClass,
  selectProject,
  catalogIsOpenMobile,
  toggleMenuClass,
  isMobile,
}) {
  const isDigital = designArea === 1;

  const catalogIsDark = projects[activeProjectIndex].hasOwnProperty(
    "catalogColorDark"
  )
    ? projects[activeProjectIndex].catalogColorDark
    : projects[activeProjectIndex].mainColorDark || false;

  if (isMobile) setCatalogIsCompressed(false);

  return (
    <div
      className={classNames(
        "project-catalog",
        {
          "project-catalog-compressed animate-catalog-compress":
            catalogIsCompressed,
        },
        { "animate-catalog-expand": !catalogIsCompressed },
        { "project-catalog-dark": catalogIsDark },
        { "project-catalog-animate-open": isMobile && catalogIsOpenMobile },
        {
          "project-catalog-static-closed":
            isMobile && !catalogIsOpenMobile && toggleMenuClass === 0,
        },
        {
          "project-catalog-animate-close":
            isMobile && !catalogIsOpenMobile && toggleMenuClass !== 0,
        }
      )}
    >
      {!isMobile && (
        <h2>
          {catalogIsCompressed
            ? "."
            : isDigital
            ? "UX and Service"
            : "Products and Furniture"}
        </h2>
      )}
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
                  <img
                    width={project.iconSize || "22px"}
                    height={project.iconSize || "22px"}
                    src={`./assets/icons/${project.id}.png`}
                    alt=""
                  />
                ) : (
                  <h4>{project.title}</h4>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        className={classNames(
          "vertical-line vertical-line-top",
          {
            "vertical-line-right": isDigital,
          },
          {
            " vertical-line-mobile": isMobile,
          }
        )}
      ></div>
      <div
        className={classNames(
          "vertical-line vertical-line-bottom",
          {
            "vertical-line-right": isDigital,
          },
          { "hide-element": isMobile }
        )}
      ></div>
      {!isMobile && (
        <div className="project-catalog-expand-button">
          {(catalogIsCompressed && !isDigital) ||
          (!catalogIsCompressed && isDigital) ? (
            <ChevronRight
              onClick={() => {
                setToggleCardImageClass(1);
                setCatalogIsCompressed(!catalogIsCompressed);
              }}
            />
          ) : (
            <ChevronLeft
              onClick={() => {
                setToggleCardImageClass(1);
                setCatalogIsCompressed(!catalogIsCompressed);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCatalog;
