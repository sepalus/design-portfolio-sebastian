import React from "react";

function InformationSection({ informationRef }) {
  return (
    <section ref={informationRef} className="information-section-container">
      <h1>This is me</h1>
    </section>
  );
}

export default InformationSection;
