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
  const [textExpandedAnimated, setTextExpandedAnimated] = useState(false);
  const [performAnimation, setPerformAnimation] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const expandedImageWidth = 334;
  const textWidth = 488;
  const marginWidth = 32;

  const leftEdge =
    (window.innerWidth - expandedImageWidth - textWidth - marginWidth) / 2 +
    expandedImageWidth +
    marginWidth;

  useEffect(() => {
    setPerformAnimation(!textExpanded);
  }, [currentViewport]);

  useEffect(() => {
    setTimeout(
      () => setTextExpandedAnimated(textExpanded),
      textExpanded ? 1100 : 200
    );
  }, [textExpanded]);

  const toggleTextExpanded = () => {
    setTextExpanded(!textExpanded);
  };

  const changeViewport = (viewport) => {
    if (!textExpanded) return;
    selectViewport(viewport);
  };

  const introductionLabelClasses = classNames(
    "information-section-about-introduction-label",
    { "link-button link-button-narrow": textExpandedAnimated },
    { "no-style-button": !textExpandedAnimated }
  );

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
        <div className="information-section-about">
          <div className="information-section-about-content-wrapper">
            <div>
              <img
                src="./assets/face.jpg"
                alt="Sebastian"
                className={classNames(
                  "information-section-about-image",
                  { "information-section-about-image-open": textExpanded },
                  { "information-section-about-image-closed": !textExpanded }
                )}
              />
            </div>
            <div className="information-section-about-text-wrapper-placeholder"></div>
            <div
              className={classNames(
                "information-section-about-text-wrapper",
                {
                  "information-section-about-text-wrapper-expanded animate-text-wrapper-element": textExpanded,
                },
                {
                  "animate-text-wrapper-element-reverse": !textExpanded,
                }
              )}
              style={{ left: leftEdge }}
            >
              <button
                className="information-section-about-introduction-title link-button link-button-narrow icon-button"
                onClick={() => {
                  toggleTextExpanded();
                }}
              >
                <h3> Sebastian Högnabba</h3>
                {textExpanded ? <ExpandLess /> : <ExpandMore />}
              </button>
              <button
                className={`${introductionLabelClasses} ${classNames(
                  {
                    "animate-title-element-1": textExpanded,
                  },
                  {
                    "animate-title-element-1-reverse": !textExpanded,
                  }
                )}`}
                onClick={() => {
                  changeViewport(1);
                }}
              >
                Industrial Designer
              </button>
              <button
                className={`${introductionLabelClasses} ${classNames(
                  {
                    "animate-title-element-2": textExpanded,
                  },
                  {
                    "animate-title-element-2-reverse": !textExpanded,
                  }
                )}`}
                onClick={() => {
                  changeViewport(2);
                }}
              >
                Digital Creator
              </button>
              <button
                className={`disabled-button ${introductionLabelClasses} ${classNames(
                  {
                    "animate-title-element-3": textExpanded,
                  },
                  {
                    "animate-title-element-3-reverse": !textExpanded,
                  }
                )}`}
                onClick={() => {
                  return;
                }}
              >
                Genuine Aesthete
              </button>
              <p
                className={classNames(
                  "information-section-about-introduction-text",
                  {
                    "animate-text-element-in": textExpanded,
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
                I am a strong advocate for the importance of aesthetics in all
                designed solutions.
              </p>
            </div>
          </div>
        </div>
        <div
          class="information-section-contact"
          onMouseLeave={() => {
            setShowEmail(false);
            setShowPhoneNumber(false);
          }}
        >
          <div class="information-section-contact-content-wrapper">
            <div class="information-section-contact-icon-wrapper">
              <p>Check me out:</p>
              <a
                href="https://www.linkedin.com/in/sebastian-högnabba-9a45a19b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./assets/icons/linkedin.png" alt="LinkedIn" />
              </a>

              <a className="hide-element">
                <img src="./assets/icons/instagram.png" alt="Instagram" />
              </a>
              <a className="hide-element">
                <img
                  src="./assets/icons/finnishdesigners.png"
                  alt="Finnish Designers"
                />
              </a>
            </div>
            <div class="information-section-contact-icon-wrapper">
              <p>Hit me up:</p>
              <div>
                <div class="information-section-contact-icon-expandable-content-wrapper">
                  <div>
                    <img
                      src="./assets/icons/phone.png"
                      alt="Phone"
                      onMouseEnter={() => {
                        setShowEmail(false);
                        setShowPhoneNumber(true);
                      }}
                    />
                  </div>
                  {showPhoneNumber && (
                    <button className="link-button">040 7752722</button>
                  )}
                  <div>
                    <img
                      src="./assets/icons/email.png"
                      alt="email"
                      onMouseEnter={() => {
                        setShowPhoneNumber(false);
                        setShowEmail(true);
                      }}
                    />
                  </div>
                  {showEmail && (
                    <button className="link-button">
                      sebastian.hognabba@gmail.com
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
