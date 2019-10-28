import React from "react";
import classNames from "classnames";

import "./DesignerSection.scss";

function DesignerSection({
  designerRef,
  currentDesignArea,
  selectDesignArea,
  isButtonSticky
}) {
  return (
    <section ref={designerRef} className="designer-section-container">
      <div className="designer-section-area designer-section-area-industrial">
        <button
          className={classNames("link-button", {
            "projects-button-sticky": isButtonSticky && currentDesignArea === 0
          })}
          onClick={() => selectDesignArea(0, false)}
        >
          <h2>Product</h2>
        </button>
      </div>
      <div>
        <img
          className="designer-section-image"
          src="../assets/face_industrial_transparent.png"
          alt="Sebastian"
        />
      </div>
      <div className="designer-section-area designer-section-area-digital">
        <button
          className={classNames("link-button", {
            "projects-button-sticky": isButtonSticky && currentDesignArea === 1
          })}
          onClick={() => selectDesignArea(1, false)}
        >
          <h2>Digital</h2>
        </button>
      </div>
    </section>
  );
}

export default DesignerSection;
