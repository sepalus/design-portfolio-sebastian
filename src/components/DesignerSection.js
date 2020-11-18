import React, { useState } from "react";
import classNames from "classnames";
import Typist from "react-typist";
import "./DesignerSection.scss";

function DesignerSection({
  designerRef,
  isMobile,
  showTypist,
  selectViewport,
  setSkipProjectSection,
}) {
  const [aboutTypistDone, setAboutTypistDone] = useState(false);
  const [workTypistDone, setWorkTypistDone] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <div className="designer-section-content">
        <div className="designer-section-typist-wrapper">
          {showTypist ? (
            <h3
              className={classNames({
                "typist-button-disabled": !aboutTypistDone,
              })}
            >
              <Typist
                startDelay={700}
                avgTypingDelay={20}
                stdTypingDelay={0}
                cursor={{
                  hideWhenDone: true,
                  hideWhenDoneDelay: 0,
                }}
                onTypingDone={() =>
                  setTimeout(() => setAboutTypistDone(true), 500)
                }
              >
                {isMobile && <span>&nbsp;&nbsp;&nbsp;</span>}Hello, I'm&nbsp;
                <span
                  className="link-button link-button-narrow"
                  onClick={() => {
                    setSkipProjectSection(true);
                    selectViewport(3);
                  }}
                >
                  Sebastian
                </span>
                &nbsp;a designer {isMobile && <br />}
                in both the physical and digital world
                {isMobile && <span>.</span>}
              </Typist>
            </h3>
          ) : (
            <h3>
              {isMobile && <span>&nbsp;&nbsp;&nbsp;</span>}Hello, I'm&nbsp;
              <span
                className="link-button link-button-narrow"
                onClick={() => {
                  setSkipProjectSection(true);
                  selectViewport(3);
                }}
              >
                Sebastian
              </span>
              &nbsp;a designer {isMobile && <br />}
              in both the physical and digital world
              {isMobile && <span>.</span>}
            </h3>
          )}
          {showTypist ? (
            aboutTypistDone && (
              <h3
                className={classNames({
                  "typist-button-disabled": !workTypistDone,
                })}
              >
                <Typist
                  startDelay={200}
                  avgTypingDelay={20}
                  stdTypingDelay={0}
                  cursor={{
                    hideWhenDone: true,
                    hideWhenDoneDelay: 0,
                  }}
                  onTypingDone={() =>
                    setTimeout(() => setWorkTypistDone(true), 500)
                  }
                >
                  {!isMobile && <span>&nbsp;</span>}If you’re interested in what
                  I’ve done, {isMobile && <br />}
                  {isMobile && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}please take
                  a look at my&nbsp;
                  <span
                    className="link-button link-button-narrow"
                    onClick={() => selectViewport(1)}
                  >
                    work
                  </span>
                </Typist>
              </h3>
            )
          ) : (
            <h3>
              {!isMobile && <span>&nbsp;</span>} If you’re interested in what
              I’ve done, {isMobile && <br />}
              {isMobile && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}please take a
              look at my&nbsp;
              <span
                className="link-button link-button-narrow"
                onClick={() => selectViewport(1)}
              >
                work
              </span>
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default DesignerSection;
