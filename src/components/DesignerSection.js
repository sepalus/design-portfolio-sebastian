import React, { useState } from "react";
import Typist from "react-typist";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import "./DesignerSection.scss";

function DesignerSection({
  designerRef,
  isInitialViewPort,
  currentDesignArea,
  selectDesignArea,
  isButtonSticky
}) {
  const [showWorkTypist, setShowWorkTypist] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <img
        className="designer-section-image"
        src="../assets/face_industrial_transparent.png"
        alt="Sebastian"
      />
      {isInitialViewPort ? (
        <Typist
          className="designer-section-typist designer-section-typist-about"
          startDelay={1000}
          avgTypingDelay={50}
          stdTypingDelay={0}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }}
          onTypingDone={setTimeout(() => setShowWorkTypist(true), 3500)}
        >
          <h1>
            Hello, I am
            <br />
            <span className="designer-section-text-link">Sebastian</span>
            <KeyboardBackspace
              className="designer-section-text-arrow designer-section-text-arrow-forward"
              fontSize="large"
              style={{ fontSize: 48 }}
            />
          </h1>
          {""}
        </Typist>
      ) : (
        <div className="designer-section-typist designer-section-typist-about">
          <h1 className="designer-section-text-link">Sebastian</h1>
        </div>
      )}
      {isInitialViewPort ? (
        showWorkTypist && (
          <Typist
            className="designer-section-typist designer-section-typist-work"
            startDelay={1000}
            avgTypingDelay={50}
            stdTypingDelay={0}
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0
            }}
          >
            <h1>
              Please
              <br />
              check
              <br />
              out my
              <br />
              <span className="designer-section-text-link">work</span>
              <KeyboardBackspace
                className="designer-section-text-arrow designer-section-text-arrow-down"
                fontSize="large"
                style={{ fontSize: 48 }}
              />
            </h1>{" "}
            {""}
          </Typist>
        )
      ) : (
        <div className="designer-section-typist designer-section-typist-work">
          <h1 className="designer-section-text-link">Work</h1>
        </div>
      )}
    </section>
  );
}

export default DesignerSection;
