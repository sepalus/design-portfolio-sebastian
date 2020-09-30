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
}) {
  const [showWorkTypist, setShowWorkTypist] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <div className="designer-section-items">
        {showTypist ? (
          <Typist
            className="designer-section-typist"
            startDelay={700}
            avgTypingDelay={25}
            stdTypingDelay={0}
            cursor={{
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }}
          >
            <h3>
              Hello, I am&nbsp;
              <span className="link" onClick={() => selectViewport(2)}>
                Sebastian
              </span>
              &nbsp;a designer for the physical and digital world.
            </h3>
          </Typist>
        ) : (
          <div className="designer-section-typist">
            <h3>
              Hello, I am&nbsp;
              <span className="link" onClick={() => selectViewport(2)}>
                Sebastian
              </span>
              &nbsp;a designer for the physical and digital world.
            </h3>
          </div>
        )}
        {showTypist ? (
          showWorkTypist && (
            <Typist
              className="designer-section-typist"
              startDelay={200}
              avgTypingDelay={25}
              stdTypingDelay={0}
              cursor={{
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            >
              <h3>
                If you’re interested in what I’ve done, please have a look at
                my&nbsp;
                <span className="link" onClick={() => selectViewport(1)}>
                  work
                </span>
              </h3>
            </Typist>
          )
        ) : (
          <div className="designer-section-typist">
            <h3>
              If you’re interested in what I’ve done, please have a look at
              my&nbsp;
              <span className="link" onClick={() => selectViewport(1)}>
                work
              </span>
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default DesignerSection;
