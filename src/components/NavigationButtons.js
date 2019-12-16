import React from "react";
import classNames from "classnames";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function NavigationButtons({
  activeProject,
  currentDesignArea,
  selectDesignArea,
  selectViewport,
  setIsButtonSticky,
  animationFadeIn
}) {
  return (
    <div
      className={classNames(
        "project-section-button-wrapper",
        { "project-section-button-wrapper-left": currentDesignArea === 1 },
        { "animate-buttons-fade-in": animationFadeIn }
      )}
      style={{ color: activeProject ? activeProject.style.color : "black" }}
    >
      <button
        className={classNames(
          "link-button project-section-button project-section-button-home",
          { "project-section-button-left": currentDesignArea === 0 }
        )}
        onClick={() => selectViewport(0)}
      >
        <h4 className="link">Home</h4>
        <KeyboardArrowUpIcon />
      </button>
      <button
        className={classNames("link-button project-section-button", {
          "project-section-button-left": currentDesignArea === 1
        })}
        onClick={() => {
          selectDesignArea(currentDesignArea === 1 ? 0 : 1, true);
          setIsButtonSticky(false);
        }}
      >
        {currentDesignArea === 1 ? (
          <>
            <h4 className="link">Product</h4>
            <KeyboardArrowLeftIcon />
          </>
        ) : (
          <>
            <h4 className="link">Digital</h4>
            <KeyboardArrowRightIcon />
          </>
        )}
      </button>
    </div>
  );
}
export default NavigationButtons;
