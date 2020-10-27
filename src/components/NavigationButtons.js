import React from "react";
import classNames from "classnames";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function NavigationButtons({ activeProject, designArea, animationFadeIn }) {
  return (
    <div
      className={classNames(
        "project-section-button-wrapper",
        { "project-section-button-wrapper-left": designArea === 2 },
        { "animate-buttons-fade-in": animationFadeIn },
        { "animate-buttons-fade-out": !animationFadeIn }
      )}
    >
      <button
        className={classNames(
          "link-button icon-button",
          {
            "project-section-button-left": designArea === 2,
          },
          {
            "link-button-dark": activeProject && activeProject.styleDarkColor,
          }
        )}
        onClick={() => {}}
      >
        {designArea === 2 ? (
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
