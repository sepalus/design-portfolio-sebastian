import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";
import "./ProjectCardDescription.scss";

function ProjectCardDescription({
  currentViewport,
  designArea,
  activeProject,
  activeImageIndex,
  catalogIsCompressed,
}) {
  const [showTeam, setShowTeam] = useState(false);
  const [toggleDescriptionClass, setToggleDescriptionClass] = useState(0);

  useEffect(() => {
    setToggleDescriptionClass(activeImageIndex === 0 ? 2 : 0);
  }, [catalogIsCompressed]);

  useEffect(() => {
    setToggleDescriptionClass(activeImageIndex === 0 ? 2 : 0);
  }, [activeImageIndex]);

  useEffect(() => {
    if (activeImageIndex !== 0) setToggleDescriptionClass(0);
    else if (currentViewport !== designArea) setToggleDescriptionClass(0);
    else setToggleDescriptionClass(toggleDescriptionClass === 1 ? -1 : 1);
  }, [activeProject.id, designArea, currentViewport]);

  const descriptionIsDark = activeProject.hasOwnProperty("descriptionColorDark")
    ? activeProject.catalogColorDark
    : activeProject.mainColorDark || false;

  return (
    <div
      className={classNames(
        "project-card-description",
        {
          "project-card-description-dark": descriptionIsDark,
        },
        {
          "animate-description-in-1": toggleDescriptionClass === 1,
        },
        {
          "animate-description-in-2": toggleDescriptionClass === -1,
        },
        {
          "animate-description-out": toggleDescriptionClass === 0,
        },
        {
          "animate-description-static": toggleDescriptionClass === 2,
        }
      )}
      style={{
        ...activeProject.descriptionStyle,
      }}
      onMouseLeave={() => {
        setShowTeam(false);
      }}
    >
      <div className="vertical-line"></div>
      <h3 className="project-card-description-title">{activeProject.title}</h3>
      <p className="project-card-description-text">
        {activeProject.description}
      </p>
      <div className="project-card-description-tag-wrapper">
        <div className="project-card-description-tag">
          <CalendarToday className="project-card-description-tag-icon" />
          <p> {activeProject.year}</p>
        </div>
        <div className="project-card-description-tag">
          {activeProject.isTeam ? (
            <People className="project-card-description-tag-icon" />
          ) : (
            <Person className="project-card-description-tag-icon" />
          )}
          <div
            className={classNames(
              "project-card-description-tag-designer-wrapper",
              {
                "project-card-description-tag-designer-wrapper-open":
                  activeProject.isTeam && showTeam,
              }
            )}
          >
            <p
              onMouseEnter={() => {
                setShowTeam(true);
              }}
            >
              {activeProject.isTeam ? "Design Team" : "Sebastian Högnabba"}
            </p>
            {showTeam && (
              <div
                className={classNames(
                  "project-card-description-tag-design-team-wrapper",
                  {
                    "project-card-description-tag-design-team-wrapper-horizontal":
                      activeProject.displayTeamHorizontal,
                  }
                )}
              >
                {activeProject.designTeam &&
                  activeProject.designTeam.map((designer) => <p>{designer}</p>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCardDescription;
