import React from "react";

function DesignerSection({ designerRef, selectDesignArea }) {
  return (
    <section ref={designerRef}>
      <button onClick={() => selectDesignArea(0)}>Industrial</button>
      <h1>Sebastian Design</h1>
      <button onClick={() => selectDesignArea(1)}>Digital</button>
    </section>
  );
}

export default DesignerSection;
