import React from "react";

function DesignerSection({ designerRef, selectDesignArea }) {
  return (
    <section ref={designerRef}>
      <button onClick={() => selectDesignArea(0, false)}>Product</button>
      <h1>Sebastian Design</h1>
      <button onClick={() => selectDesignArea(1, false)}>Digital</button>
    </section>
  );
}

export default DesignerSection;
