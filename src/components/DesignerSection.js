import React, { useState } from "react";
import classNames from "classnames";
import Typist from "react-typist";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import "./DesignerSection.scss";

const ItemLink = ({ className, title, onClick }) => (
  <h1
    className={classNames("link", "designer-section-menu", className)}
    onClick={onClick}
  >
    {title}
  </h1>
);

function DesignerSection({
  designerRef,
  showTypist,
  selectViewport,
  currentDesignArea,
  selectDesignArea,
}) {
  const [showWorkTypist, setShowWorkTypist] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <img
        className="designer-section-image"
        src="../assets/face_industrial_transparent.png"
        alt="Sebastian"
      />
      {showTypist ? (
        <Typist
          className="designer-section-menu designer-section-typist designer-section-typist-about"
          startDelay={700}
          avgTypingDelay={50}
          stdTypingDelay={0}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0,
          }}
          onTypingDone={setTimeout(() => setShowWorkTypist(true), 3500)}
        >
          <h1>
            Hello, I am
            <br />
            <span className="link" onClick={() => selectViewport(2)}>
              Sebastian
            </span>
            <KeyboardBackspace
              className="designer-section-text-arrow designer-section-text-arrow-forward"
              fontSize="large"
              style={{ fontSize: 48 }}
            />
          </h1>
          {""}
        </Typist>
      ) : (
        <ItemLink
          className="designer-section-typist-about"
          title="Sebastian"
          onClick={() => selectViewport(2)}
        />
      )}
      {showTypist ? (
        showWorkTypist && (
          <Typist
            className="designer-section-menu designer-section-typist designer-section-typist-work"
            startDelay={200}
            avgTypingDelay={50}
            stdTypingDelay={0}
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }}
          >
            <h1>
              Please
              <br />
              check
              <br />
              out my
              <br />
              <span className="link" onClick={() => selectViewport(1)}>
                work
              </span>
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
        <ItemLink
          className="designer-section-typist-work"
          title="Work"
          onClick={() => selectViewport(1)}
        />
      )}
    </section>
  );
}

export default DesignerSection;
