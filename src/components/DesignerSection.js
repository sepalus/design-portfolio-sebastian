import React, { useState } from "react";
import classNames from "classnames";
import Typist from "react-typist";
import "./DesignerSection.scss";
import Navigator from "./Navigator.js";

function DesignerSection({
  designerRef,
  isMobile,
  showTypist,
  currentViewport,
  selectViewport,
  sections,
  isScrollSnapped,
}) {
  const [aboutTypistDone, setAboutTypistDone] = useState(false);
  const [workTypistDone, setWorkTypistDone] = useState(false);

  return (
    <section ref={designerRef} className="designer-section-container">
      <Navigator
        navigatorViewport={0}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
      />
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
                Hi, I'm&nbsp;
                <span
                  className="link-button link-button-narrow"
                  onClick={() => selectViewport(3)}
                >
                  Sebastian.
                </span>
                &nbsp;A designer of{isMobile ? <br /> : " "}both the physical
                and digital world.
              </Typist>
            </h3>
          ) : (
            <h3>
              Hi, I'm&nbsp;
              <span
                className="link-button link-button-narrow"
                onClick={() => selectViewport(3)}
              >
                Sebastian.
              </span>
              &nbsp;A designer of{isMobile ? <br /> : " "}both the physical and
              digital world.
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
                  If you’re interested in what I’ve
                  {isMobile ? " done, " : " designed, "}please check out
                  my&nbsp;
                  <span
                    className="link-button link-button-narrow"
                    onClick={() => selectViewport(1)}
                  >
                    work.
                  </span>
                </Typist>
              </h3>
            )
          ) : (
            <h3>
              If you’re interested in what I’ve
              {isMobile ? " done, " : " designed, "}please check out my&nbsp;
              <span
                className="link-button link-button-narrow"
                onClick={() => selectViewport(1)}
              >
                work.
              </span>
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default DesignerSection;
