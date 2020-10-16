import React from "react";
import "./InformationSection.scss";

function InformationSection({ informationRef }) {
  return (
    <section ref={informationRef} className="information-section-container">
      <div class="information-section">
        <div class="information-section-image-wrapper">
          <img
            src="./assets/face.png"
            alt="Sebastian"
            class="information-section-image"
          />
        </div>
        <div class="information-section-text-wrapper">
          <div class="information-section-introduction">
            <h3>Sebastian Högnabba</h3>
            <p>Industrial Designer</p>
            <p>Digital Evangelist</p>
            <p>Aethetician</p>
          </div>
          <div class="horizontal-line" />
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
        </div>
      </div>
      <div class="information-section-contact-wrapper"></div>
    </section>
  );
}

export default InformationSection;
