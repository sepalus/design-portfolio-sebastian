import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import "./InformationSection.scss";

function InformationSection({
  informationRef,
  currentViewport,
  selectViewport,
}) {
  const [textExpanded, setTextExpanded] = useState(false);
  const [performAnimation, setPerformAnimation] = useState(false);

  useEffect(() => {
    setPerformAnimation(!textExpanded);
  }, [currentViewport]);

  const toggleTextExpanded = () => {
    setTextExpanded(!textExpanded);
  };

  const changeViewport = (viewport) => {
    if (!textExpanded) return;
    selectViewport(viewport);
  };

  return (
    <section ref={informationRef} className="information-section-container">
      <div
        className={classNames(
          "information-section-content",
          {
            "information-section-static": !performAnimation,
          },
          {
            "information-section-animation-enter":
              currentViewport === 3 && performAnimation,
          },
          {
            "information-section-animation-exit":
              currentViewport !== 3 && performAnimation,
          }
        )}
      >
        <div class="information-section-about">
          <div class="information-section-about-content-wrapper">
            <div>
              <img
                src="./assets/face.png"
                alt="Sebastian"
                class="information-section-about-image"
              />
            </div>
            <div className="information-section-about-text-wrapper">
              <button
                className="link-button link-button-narrow icon-button"
                onClick={() => {
                  toggleTextExpanded();
                }}
              >
                <h3> Sebastian Högnabba</h3>
                {textExpanded ? <ExpandLess /> : <ExpandMore />}
              </button>
              <button
                className={classNames(
                  "information-section-about-introduction-title",
                  {
                    "animate-title-element-1 link-button link-button-narrow": textExpanded,
                  },
                  {
                    "animate-title-element-1-reverse no-style-button": !textExpanded,
                  }
                )}
                onClick={() => {
                  changeViewport(1);
                }}
              >
                Industrial Designer
              </button>
              <button
                className={classNames(
                  "information-section-about-introduction-title",
                  {
                    "animate-title-element-2 link-button link-button-narrow": textExpanded,
                  },
                  {
                    "animate-title-element-2-reverse no-style-button": !textExpanded,
                  }
                )}
                onClick={() => {
                  changeViewport(2);
                }}
              >
                Digital Creator
              </button>
              <button
                className={classNames(
                  "information-section-about-introduction-title",
                  {
                    "animate-title-element-3 link-button link-button-narrow": textExpanded,
                  },
                  {
                    "animate-title-element-3-reverse no-style-button": !textExpanded,
                  }
                )}
                onClick={() => {
                  return;
                }}
              >
                Genuine Aesthete
              </button>
              <div
                className={classNames("vertical-line", {
                  "animate-vertical-line": textExpanded,
                })}
              ></div>
              <p
                style={{ position: "absolute" }}
                className={classNames(
                  "information-section-about-introduction-text",
                  {
                    "animate-text-element": textExpanded,
                  },
                  {
                    "animate-text-element-out": !textExpanded,
                  }
                )}
              >
                With the problem-solving skills of an engineer and visual eye of
                an artist, equipped with Master’s Degrees in both UX Design
                (M.Sc.) and Industrial Design (M.A.), I design functional,
                aesthetically pleasing solutions that are delightful to use. I
                am a passionate
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                who believes that beauty and the capability to produce aesthetic
                pleasure are immensely important qualities of successful
                products and pieces of furniture. With a background in
                programming and UX design, I have produced elegant digital
                solutions as a
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                in various industries. My research in design aesthetics
                highlights the significance of aesthetic experiences in our
                everyday lives and provides tools for measuring them. As a
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                I am a strong advocate for the importance of aesthtetics in all
                designed solutions.
              </p>
            </div>
          </div>
        </div>
        <div class="information-section-contact">
          <div class="information-section-contact-content-wrapper">
            <div class="information-section-contact-icon-wrapper">
              <p>Check me out:</p>
              <img src="./assets/icons/linkedin.png" alt="LinkedIn" />
              <img src="./assets/icons/instagram.png" alt="Instagram" />
              <img
                src="./assets/icons/finnishdesigners.png"
                alt="Finnish Designers"
              />
            </div>
            <div class="information-section-contact-icon-wrapper">
              <p>Hit me up:</p>
              <img src="./assets/icons/phone.png" alt="Phone" />
              <img src="./assets/icons/email.png" alt="email" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
