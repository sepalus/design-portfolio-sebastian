import React, { useState } from "react";
import classNames from "classnames";
import "./InformationSection.scss";

function InformationSection({ informationRef }) {
  const [textExpanded, setTextExpanded] = useState(false);

  const toggleTextExpanded = () => {
    setTextExpanded(!textExpanded);
  };

  const openMoreInfo = () => {
    if (!textExpanded) return;
    console.log("Open more info");
  };

  return (
    <section ref={informationRef} className="information-section-container">
      <div class="information-section-about">
        <div className="information-section-image-wrapper">
          <img
            src="./assets/face.png"
            alt="Sebastian"
            class="information-section-image"
          />
        </div>
        <div className="information-section-text-wrapper">
          <div className="information-section-introduction">
            <h3>
              <button
                className="link-button link-button-narrow"
                onClick={() => {
                  toggleTextExpanded();
                }}
              >
                Sebastian Högnabba
              </button>
            </h3>
            <button
              className={classNames(
                "information-section-introduction-title ",
                {
                  "animate-title-element-1 link-button link-button-narrow": textExpanded,
                },
                {
                  "animate-title-element-1-reverse no-style-button": !textExpanded,
                }
              )}
              onClick={() => {
                openMoreInfo();
              }}
            >
              Industrial Designer
            </button>
            <button
              className={classNames(
                "information-section-introduction-title ",
                {
                  "animate-title-element-2 link-button link-button-narrow": textExpanded,
                },
                {
                  "animate-title-element-2-reverse no-style-button": !textExpanded,
                }
              )}
              onClick={() => {
                openMoreInfo();
              }}
            >
              Digital Creator
            </button>
            <button
              className={classNames(
                "information-section-introduction-title ",
                {
                  "animate-title-element-3 link-button link-button-narrow": textExpanded,
                },
                {
                  "animate-title-element-3-reverse no-style-button": !textExpanded,
                }
              )}
              onClick={() => {
                openMoreInfo();
              }}
            >
              Aethetician
            </button>
            <div
              className={classNames("verticle-line", {
                "animate-verticle-line": textExpanded,
              })}
            ></div>
            <p
              style={{ position: "absolute" }}
              className={classNames(
                "information-section-introduction-text",
                {
                  "animate-text-element": textExpanded,
                },
                {
                  "hide-element": !textExpanded,
                }
              )}
            >
              With master degrees in both art and science (M.A. and M.Sc.)
              <br /> I am well equipped as an
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              to design products that are funcitonal as well as beautiful. I
              don’t beleive that these are two unrealted qualities, but rather
              that beauty comes from function. With a background in programming
              and UX design i have worked as a &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              for various fields. Through my Master’s Thesis I dove into the
              fields of
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              and was super duper.
            </p>
          </div>
        </div>
      </div>

      <div class="information-section-contact">
        <div class="information-section-icon-wrapper">
          <p>Check me out:</p>
          <img src="./assets/icons/linkedin.png" alt="LinkedIn" />
          <img src="./assets/icons/instagram.png" alt="Instagram" />
          <img
            src="./assets/icons/finnishdesigners.png"
            alt="Finnish Designers"
          />
        </div>
        <div class="information-section-icon-wrapper">
          <p>Hit me up:</p>
          <img src="./assets/icons/phone.png" alt="Phone" />
          <img src="./assets/icons/email.png" alt="email" />
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
