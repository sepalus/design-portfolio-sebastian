import React, { useState } from "react";
import classNames from "classnames";
import "./InformationSection.scss";

function InformationSection({ informationRef }) {
  const [toggleOn, setToggleOn] = useState(false);

  const runAnimation = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <section ref={informationRef} className="information-section-container">
      <div class="information-section">
        <div className="information-section-image-wrapper">
          <img
            src="./assets/face.png"
            alt="Sebastian"
            class="information-section-image"
          />
        </div>
        <div className="information-section-text-wrapper">
          <div className="information-section-introduction">
            <h3>Sebastian Högnabba</h3>
            <button
              className={classNames(
                "information-section-introduction-title link-button link-button-narrow",
                {
                  "animate-title-element-1": toggleOn,
                },
                {
                  "animate-title-element-1-reverse": !toggleOn,
                }
              )}
              onClick={() => {
                runAnimation();
              }}
            >
              Industrial Designer
            </button>
            <button
              className={classNames(
                "information-section-introduction-title link-button link-button-narrow",
                {
                  "animate-title-element-2": toggleOn,
                },
                {
                  "animate-title-element-2-reverse": !toggleOn,
                }
              )}
              onClick={() => {
                runAnimation();
              }}
            >
              Digital Creator
            </button>
            <button
              className={classNames(
                "information-section-introduction-title link-button link-button-narrow",
                {
                  "animate-title-element-3": toggleOn,
                },
                {
                  "animate-title-element-3-reverse": !toggleOn,
                }
              )}
              onClick={() => {
                runAnimation();
              }}
            >
              Aethetician
            </button>
            <div
              className={classNames("verticle-line", {
                "animate-verticle-line": toggleOn,
              })}
            ></div>
            <p
              style={{ position: "absolute" }}
              className={classNames(
                "information-section-introduction-text",
                {
                  "animate-text-element": toggleOn,
                },
                {
                  "hide-element": !toggleOn,
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

          <div class="information-section-contact hide-element">
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
        </div>
      </div>
      <div class="information-section-contact-wrapper"></div>
      <button
        style={{ position: "absolute", bottom: "100px" }}
        onClick={() => {
          runAnimation();
        }}
      >
        Toggle
      </button>
    </section>
  );
}

export default InformationSection;
