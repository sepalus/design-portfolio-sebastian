import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Person from "@material-ui/icons/Person";
import People from "@material-ui/icons/People";
import CalendarToday from "@material-ui/icons/CalendarToday";
import "./ProjectCardDescription.scss";

function ProjectCardDescription({
  currentViewport,
  activeProject,
  activeImageIndex,
  toggleDescriptionClass,
  isMobileExtraSmall,
  isMobile,
  isTablet,
}) {
  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      const descriptionTagElement = document.getElementById(
        `project-card-description-tag-${activeProject.id}`
      );
      if (!descriptionTagElement) return;
      const descriptionTagElementBorderStyle = window
        .getComputedStyle(descriptionTagElement)
        .getPropertyValue("border-style");

      if (descriptionTagElementBorderStyle === "hidden") return;
      setShowTeam(false);
    });
    return () => {
      window.removeEventListener("click", () => {});
    };
  }, [activeProject]);

  useEffect(() => {
    setShowTeam(false);
  }, [currentViewport]);

  const descriptionIsDark = isMobile
    ? activeProject.mainColorDark
    : activeProject.hasOwnProperty("descriptionColorDark")
    ? activeProject.descriptionColorDark
    : activeProject.mainColorDark || false;

  return (
    <div
      className={classNames(
        "project-card-description",
        {
          "project-card-description-dark": descriptionIsDark,
        },
        { "animate-description-static": isMobile },
        {
          "animate-description-in-1":
            !isMobile && activeImageIndex === 0 && toggleDescriptionClass === 1,
        },
        {
          "animate-description-in-2":
            !isMobile &&
            activeImageIndex === 0 &&
            toggleDescriptionClass === -1,
        },
        {
          "animate-description-out": !isMobile && toggleDescriptionClass === 0,
        },
        {
          "animate-description-static":
            !isMobile && toggleDescriptionClass === 2,
        },
        {
          "scrollable-element": isMobile,
        }
      )}
      style={
        isMobile
          ? {}
          : isTablet
          ? {
              ...activeProject.descriptionStyle,
              ...activeProject.descriptionStyleTablet,
            }
          : {
              ...activeProject.descriptionStyle,
            }
      }
    >
      <div className="project-card-description-content-container">
        {!isMobile && <div className="vertical-line"></div>}
        <h3 className="project-card-description-title">
          {activeProject.title}
        </h3>
        <p className="project-card-description-text">
          {isMobileExtraSmall && activeProject.descriptionShort
            ? activeProject.descriptionShort
            : activeProject.description}
        </p>
        <div className="project-card-description-tag-wrapper">
          <div className="project-card-description-tag">
            <CalendarToday className="project-card-description-tag-icon" />
            <p className="text-emphasized"> {activeProject.year}</p>
          </div>
          <div
            id={`project-card-description-tag-${activeProject.id}`}
            className={classNames(
              "project-card-description-tag",
              {
                "project-card-description-tag-design-team":
                  !isMobile && activeProject.isTeam,
              },
              {
                "project-card-description-tag-design-team-open":
                  !isMobile && showTeam,
              }
            )}
          >
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
                className="text-emphasized"
                onClick={() => {
                  if (isMobile) return;
                  setShowTeam(true);
                }}
              >
                {activeProject.isTeam ? "Design Team" : "Sebastian Högnabba"}
              </p>
              {!isMobile && (
                <div
                  className={classNames(
                    "project-card-description-tag-design-team-wrapper",
                    {
                      "project-card-description-tag-design-team-wrapper-show":
                        showTeam,
                    },
                    {
                      "project-card-description-tag-design-team-wrapper-horizontal":
                        activeProject.displayTeamHorizontal,
                    }
                  )}
                >
                  {activeProject.designTeam &&
                    activeProject.designTeam.map((designer) => (
                      <p>{designer}</p>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCardDescription;
