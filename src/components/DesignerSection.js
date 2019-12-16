import React, { useState } from "react";
import Typist from "react-typist";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import "./DesignerSection.scss";

function DesignerSection({
  designerRef,
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
      <Typist
        className="h1 designer-section-text designer-section-text-about"
        startDelay={1000}
        cursor={{
          hideWhenDone: true,
          hideWhenDoneDelay: 0
        }}
        onTypingDone={() => setShowWorkTypist(true)}
      >
        <span>
          Hello, I am
          <br />
          <span className="designer-section-text-link">Sebastian</span>
          <Typist.Delay ms={1000} />
          <KeyboardBackspace
            className="designer-section-text-arrow designer-section-text-arrow-forward"
            fontSize="large"
            style={{ fontSize: 48 }}
          />
        </span>{" "}
      </Typist>
      {showWorkTypist && (
        <Typist
          className="h1 designer-section-text designer-section-text-work"
          startDelay={700}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }}
        >
          <span>
            Please
            <br />
            check
            <br />
            out my
            <br />
            <span className="designer-section-text-link">work</span>
            <Typist.Delay ms={500} />
            <KeyboardBackspace
              className="designer-section-text-arrow designer-section-text-arrow-down"
              fontSize="large"
              style={{ fontSize: 48 }}
            />
          </span>{" "}
        </Typist>
      )}
    </section>
  );
}

export default DesignerSection;
