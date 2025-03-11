import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Navigator from "./Navigator.js";
import ProgressiveImage from "./ProgressiveImage";
import "./InformationSection.scss";

function InformationSection({
  informationRef,
  currentViewport,
  selectViewport,
  sections,
  isScrollSnapped,
  isTablet,
  isMobile,
  isMobileExtraSmall,
  isMobileSmall,
  windowWidth,
}) {
  const [textExpanded, setTextExpanded] = useState(false);
  const [textExpandedAnimated, setTextExpandedAnimated] = useState(false);
  const [performAnimation, setPerformAnimation] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showEmailAddress, setShowEmailAddress] = useState(false);
  const [emailElementIsRight, setEmailElementIsRight] = useState(false);
  const [togglePhoneCopied, setTogglePhoneCopied] = useState(0);
  const [toggleEmailCopied, setToggleEmailCopied] = useState(0);

  const hideContactDetails = () => {
    setShowPhoneNumber(false);
    setShowEmailAddress(false);
    setTogglePhoneCopied(0);
    setToggleEmailCopied(0);
    setEmailElementIsRight(false);
  };

  const mouseClickedInformation = (event) => {
    if (event.clientY > window.innerHeight - 140) return;
    hideContactDetails();
  };

  useEffect(() => {
    hideContactDetails();
  }, [currentViewport]);

  useEffect(() => {
    window.addEventListener("click", mouseClickedInformation);
    return () => {
      window.removeEventListener("click", mouseClickedInformation);
    };
  }, [mouseClickedInformation]);

  const phoneNumber = "+358 40 7752722";
  const emailAddress = "jenssebastian.design@gmail.com";

  const expandedImageWidth = 314;
  const textWidth = 510;
  const paddingWidth = 32;

  const imageWidthTablet = 164;
  const textWidthTablet = 410;
  const paddingWidthTablet = 28;

  const leftEdge =
    (windowWidth - expandedImageWidth - textWidth - paddingWidth) / 2 +
    expandedImageWidth +
    paddingWidth;

  const leftEdgeTablet =
    (windowWidth - imageWidthTablet - textWidthTablet - paddingWidthTablet) /
      2 +
    imageWidthTablet +
    paddingWidthTablet;

  useEffect(() => {
    setPerformAnimation(!textExpanded);
  }, [currentViewport]);

  useEffect(() => {
    setTimeout(
      () => setTextExpandedAnimated(textExpanded),
      isTablet ? 200 : textExpanded ? 500 : 200
    );
  }, [textExpanded]);

  const toggleTextExpanded = () => {
    setTextExpanded(!textExpanded);
  };

  const changeViewport = (viewport) => {
    if (!isMobile && !textExpanded) return;
    selectViewport(viewport);
  };

  const introductionLabelClasses = classNames(
    "information-section-about-introduction-label",
    { "link-button link-button-narrow": textExpandedAnimated || isMobile },
    { "no-style-button": !textExpandedAnimated && !isMobile }
  );

  const hidePhoneNumber = () => {
    setShowEmailAddress(false);
    setToggleEmailCopied(0);
    setShowPhoneNumber(true);
    setEmailElementIsRight(true);
  };

  const hideEmailAddress = () => {
    setShowPhoneNumber(false);
    setTogglePhoneCopied(0);
    setShowEmailAddress(true);
  };

  const PhoneIcon = () => (
    <img src="./assets/icons/phone.png" alt="Phone" onClick={hidePhoneNumber} />
  );

  const EmailIcon = () => (
    <img
      src="./assets/icons/email.png"
      alt="Email"
      onClick={hideEmailAddress}
    />
  );

  return (
    <section ref={informationRef} className="information-section-container">
      <Navigator
        navigatorViewport={3}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
      />
      <div
        className={classNames(
          "information-section-content",
          {
            "information-section-static": isMobile || !performAnimation,
          },
          {
            "information-section-animation-enter":
              !isMobile && currentViewport === 3 && performAnimation,
          },
          {
            "information-section-animation-exit":
              !isMobile && currentViewport !== 3 && performAnimation,
          }
        )}
      >
        <div className="information-section-about">
          <div className="information-section-about-content-wrapper">
            <div className="information-section-about-header-wrapper">
              <div
                className={classNames(
                  "information-section-about-image-wrapper",
                  {
                    "information-section-about-image-wrapper-open":
                      textExpanded,
                  },
                  {
                    "information-section-about-image-wrapper-closed":
                      !textExpanded,
                  }
                )}
              >
                <ProgressiveImage
                  src={"./assets/sebastian.jpg"}
                  alt="Sebastian"
                  className="information-section-about-image"
                />
              </div>
            </div>
            <div className="information-section-about-text-wrapper-placeholder"></div>
            <div
              className={classNames(
                "information-section-about-text-wrapper",

                {
                  "information-section-about-text-wrapper-expanded animate-text-wrapper-element":
                    !isMobile && textExpanded,
                },
                {
                  "animate-text-wrapper-element-reverse":
                    !isMobile && !textExpanded,
                }
              )}
              style={{
                left: isTablet ? leftEdgeTablet : leftEdge,
              }}
            >
              <button
                className={classNames(
                  "information-section-about-introduction-title link-button link-button-narrow icon-button",
                  {
                    "no-style-button": isMobile,
                  }
                )}
                onClick={() => {
                  toggleTextExpanded();
                }}
                disabled={isMobile}
              >
                <h3> Sebastian Högnabba</h3>
                {!isMobile && (textExpanded ? <ExpandLess /> : <ExpandMore />)}
              </button>
              <button
                className={`${introductionLabelClasses} ${classNames(
                  {
                    "animate-title-element-1": !isMobile && textExpanded,
                  },
                  {
                    "animate-title-element-1-reverse":
                      !isMobile && !textExpanded,
                  }
                )}`}
                onClick={() => changeViewport(1)}
              >
                <p>
                  {isMobileExtraSmall
                    ? "Product Designer"
                    : "Industrial and Furniture Designer"}
                </p>
              </button>
              <button
                className={`${introductionLabelClasses} ${classNames(
                  {
                    "animate-title-element-2": !isMobile && textExpanded,
                  },
                  {
                    "animate-title-element-2-reverse":
                      !isMobile && !textExpanded,
                  }
                )}`}
                onClick={() => changeViewport(2)}
              >
                <p>UX and Service Designer</p>
              </button>
              <div
                className={classNames(
                  "information-section-about-introduction-text-wrapper",
                  {
                    "scrollable-element": isMobile,
                  }
                )}
              >
                <p
                  className={classNames(
                    "information-section-about-introduction-text",
                    { "animate-element-static": isMobile },
                    {
                      "animate-text-element-in": !isMobile && textExpanded,
                    },
                    {
                      "animate-text-element-out": !isMobile && !textExpanded,
                    }
                  )}
                >
                  {isMobileSmall ? (
                    <>
                      Design is my means of contributing to the world. Equipped
                      with master’s degrees in both UX Design (M.Sc.) and
                      Industrial Design (M.A.), I design with the
                      problem-solving skills of an engineer and visual eye of an
                      artist. Meaningful user experience is my purpose, design
                      aesthetics my passion and technical expertise my
                      foundation. As a UX and Service Designer, I use my broad
                      design toolkit to create delightful user experiences
                      across all service touchpoints. As an Industrial and
                      Furniture Designer, I design elegant products, where
                      function and beauty go hand in hand. The aesthetics are
                      often born out of a technical or functional innovation.
                    </>
                  ) : isMobile ? (
                    <>
                      Design is my means of contributing to the world. Equipped
                      with master’s degrees in both UX Design (M.Sc.) and
                      Industrial Design (M.A.), I design with the
                      problem-solving skills of an engineer and visual eye of an
                      artist. Meaningful user experience is my purpose, design
                      aesthetics my passion and solid technical expertise my
                      foundation. As a UX and Service Designer, I create
                      beautiful user interfaces that are delightful to use for
                      many different industries. I use my broad design toolkit
                      to ensure that my digital products match the users' needs
                      across all service touchpoints. As an Industrial and
                      Furniture Designer, I design elegant products, where
                      function and beauty go hand in hand. The aesthetics are
                      often born out of a technical or functional innovation. My
                      designs are minimal and elegant, while possessing strong
                      character.
                    </>
                  ) : isTablet ? (
                    <>
                      Design is my means of contributing to the world. I design
                      with the problem&#8209;solving skills of an engineer and
                      visual eye of an artist and come equipped with master’s
                      degrees in both UX Design (M.Sc.) and Industrial Design
                      (M.A.). Meaningful user experience is my purpose, design
                      aesthetics my passion and solid technical expertise my
                      foundation. As an
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      I believe that function and beauty go hand&nbsp;in hand.
                      My products' aesthetics are often born out of a technical
                      or functional innovation. My designs are minimal and
                      elegant, while&nbsp;possessing strong character. As a
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      I have created beautiful user interfaces that are
                      delightful to use for several industries. I have a broad
                      design toolkit at my disposal, which I use to ensure that
                      my digital products match the users' needs across all
                      touchpoints.
                    </>
                  ) : (
                    <>
                      Design is my means of contributing to the world. I design
                      with the problem-solving skills of an engineer and visual
                      eye of an artist and come equipped with master’s degrees
                      in both UX Design (M.Sc.) and Industrial Design (M.A.).
                      Meaningful user experience is my purpose, design
                      aesthetics my passion and solid technical expertise my
                      foundation. As an
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      I believe that function and beauty go hand in hand. My
                      products' aesthetics are often born out of a technical or
                      functional innovation. My designs are minimal and elegant,
                      while&nbsp;possessing strong character. As a
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      I have created beautiful user interfaces that are
                      delightful to use for several industries. I have a broad
                      design toolkit at my disposal, which I use to ensure that
                      my digital products match the users' needs across all
                      touchpoints.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="information-section-contact">
          <div className="information-section-contact-content-wrapper">
            <div className="information-section-contact-icon-wrapper">
              <p className="text-large">Check me out:</p>
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
            <div className="information-section-contact-icon-wrapper">
              <p className="text-large">Hit me up:</p>
              <div
                className={classNames(
                  "information-section-contact-icon-expandable-icon-wrapper",
                  {
                    "information-section-contact-icon-expandable-icon-wrapper-hide":
                      showPhoneNumber && !isMobile,
                  },
                  {
                    "animate-move-element-left": showEmailAddress,
                  }
                )}
              >
                <PhoneIcon />
                <div className="information-section-contact-icon-expandable-button-wrapper">
                  <span
                    className={classNames(
                      "text-small",
                      {
                        "animate-copied-text-1": togglePhoneCopied === -1,
                      },
                      {
                        "animate-copied-text-2": togglePhoneCopied === 1,
                      }
                    )}
                  >
                    Copied
                  </span>
                  <button
                    className={classNames(
                      "link-button icon-button",
                      {
                        "animate-button-enter": showPhoneNumber,
                      },
                      {
                        "animate-button-exit": !showPhoneNumber,
                      }
                    )}
                    disabled={!showPhoneNumber}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        phoneNumber.replace(/ /g, "")
                      );
                      setTogglePhoneCopied(
                        togglePhoneCopied === 0 ? 1 : -togglePhoneCopied
                      );
                    }}
                  >
                    <PhoneIcon />
                    <p className={isMobile ? "" : "text-large"}>
                      {phoneNumber}
                    </p>
                  </button>
                </div>
              </div>
              <div
                className={classNames(
                  "information-section-contact-icon-expandable-icon-wrapper",
                  {
                    "information-section-contact-icon-expandable-icon-wrapper-hide":
                      showEmailAddress && !isMobile,
                  },
                  {
                    "animate-move-element-right": showPhoneNumber,
                  }
                )}
              >
                <EmailIcon />
                <div className="information-section-contact-icon-expandable-button-wrapper information-section-contact-icon-expandable-button-wrapper-email">
                  <span
                    className={classNames(
                      "text-small",
                      {
                        "animate-copied-text-1": toggleEmailCopied === -1,
                      },
                      {
                        "animate-copied-text-2": toggleEmailCopied === 1,
                      }
                    )}
                  >
                    Copied
                  </span>
                  <button
                    className={classNames(
                      "link-button icon-button",
                      {
                        "animate-button-enter":
                          showEmailAddress && !emailElementIsRight,
                      },
                      {
                        "animate-button-enter-left":
                          showEmailAddress && emailElementIsRight,
                      },
                      {
                        "animate-button-exit": !showEmailAddress,
                      }
                    )}
                    disabled={!showEmailAddress}
                    onClick={() => {
                      navigator.clipboard.writeText(emailAddress);
                      setToggleEmailCopied(
                        toggleEmailCopied === 0 ? 1 : -toggleEmailCopied
                      );
                    }}
                  >
                    <EmailIcon />
                    <p className={isMobile ? "" : "text-large"}>
                      {emailAddress}
                    </p>
                  </button>
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
