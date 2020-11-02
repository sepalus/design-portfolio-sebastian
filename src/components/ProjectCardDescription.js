import React, { useState } from "react";
import classNames from "classnames";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";

function ProjectCardDescription({ currentViewport, project, activeProject }) {
  const [showTeam, setShowTeam] = useState(false);
  const isActive = project.title === activeProject.title;

  return (
    <div
      className={classNames(
        "project-card-description-wrapper",
        {
          "animate-description-in": currentViewport === 1 && isActive,
        },
        {
          "animate-description-out": currentViewport !== 1 || !isActive,
        }
      )}
      style={{
        ...activeProject.descriptionStyle,
        zIndex: isActive ? 1 : 0,
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
              <div className="project-card-description-tag-design-team-wrapper">
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
