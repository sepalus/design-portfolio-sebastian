import React from "react";
import classNames from "classnames";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";

function ProjectCardDescription({ currentViewport, project, activeProject }) {
  return (
    <div
      className={classNames(
        "project-card-description-wrapper",
        {
          "animate-description-in":
            currentViewport === 1 && project.title === activeProject.title,
        },

        {
          "animate-description-out":
            currentViewport !== 1 || project.title !== activeProject.title,
        }
      )}
      style={activeProject.descriptionStyle}
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
          <p>{activeProject.isTeam ? "Design Team" : "Sebastian Högnabba"}</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectCardDescription;
