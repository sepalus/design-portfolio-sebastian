import React from "react";
import classNames from "classnames";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function NavigationButtons({
  activeProject,
  currentDesignArea,
  selectDesignArea,
  selectViewport,
  animationFadeIn,
}) {
  return (
    <div
      className={classNames(
        "project-section-button-wrapper",
        { "project-section-button-wrapper-left": currentDesignArea === 1 },
        { "animate-buttons-fade-in": animationFadeIn },
        { "animate-buttons-fade-out": !animationFadeIn }
      )}
    >
      <button
        className={classNames("link-button link project-section-button", {
          "project-section-button-left": currentDesignArea === 1,
        })}
        style={{
          color: activeProject ? activeProject.style.color : "black",
          borderColor: activeProject ? activeProject.style.color : "black",
          borderWidth:
            activeProject && activeProject.style.color === "black"
              ? "2px"
              : "1px",
        }}
        onClick={() => selectDesignArea(currentDesignArea === 1 ? 0 : 1)}
      >
        {currentDesignArea === 1 ? (
          <>
            <h3>Product</h3>
            <KeyboardArrowLeftIcon />
          </>
        ) : (
          <>
            <h3>Digital</h3>
            <KeyboardArrowRightIcon />
          </>
        )}
      </button>
    </div>
  );
}
export default NavigationButtons;
