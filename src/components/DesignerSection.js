import React, { useState } from "react";
import classNames from "classnames";
import Typist from "react-typist";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import "./DesignerSection.scss";

function DesignerSection({
  designerRef,
  showTypist,
  selectViewport,
  currentDesignArea,
  selectDesignArea,
  setSkipProjectSection,
}) {
  const [showWorkTypist, setShowWorkTypist] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <div className="designer-section-items">
        {showTypist ? (
          <h3>
            <Typist
              className="designer-section-typist"
              startDelay={700}
              avgTypingDelay={20}
              stdTypingDelay={0}
              cursor={{
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
              onTypingDone={() =>
                setTimeout(() => setShowWorkTypist(true), 500)
              }
            >
              Hello, I am&nbsp;
              <span
                className="link"
                onClick={() => {
                  setSkipProjectSection(true);
                  selectViewport(2);
                }}
              >
                Sebastian
              </span>
              &nbsp;a designer for the physical and digital world
            </Typist>
          </h3>
        ) : (
          <div className="designer-section-typist">
            <h3>
              Hello, I am&nbsp;
              <span className="link" onClick={() => selectViewport(2)}>
                Sebastian
              </span>
              &nbsp;a designer for the physical and digital world
            </h3>
          </div>
        )}
        {showTypist ? (
          showWorkTypist && (
            <h3>
              <Typist
                className="designer-section-typist"
                startDelay={200}
                avgTypingDelay={20}
                stdTypingDelay={0}
                cursor={{
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
              >
                If you’re interested in what I’ve done, please have a look at
                my&nbsp;
                <span className="link" onClick={() => selectViewport(1)}>
                  work
                </span>
              </Typist>
            </h3>
          )
        ) : (
          <h3>
            <div className="designer-section-typist">
              If you’re interested in what I’ve done, please have a look at
              my&nbsp;
              <span className="link" onClick={() => selectViewport(1)}>
                work
              </span>
            </div>
          </h3>
        )}
      </div>
    </section>
  );
}

export default DesignerSection;
