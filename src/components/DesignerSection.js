import React from "react";

function DesignerSection({ designerRef, selectDesignArea }) {
  return (
    <section ref={designerRef}>
      <button
        onClick={() => selectDesignArea({ area: 0, isSlide: false }, false)}
      >
        Product
      </button>
      <h1>Sebastian Design</h1>
      <button
        onClick={() => selectDesignArea({ area: 1, isSlide: false }, false)}
      >
        Digital
      </button>
    </section>
  );
}

export default DesignerSection;
