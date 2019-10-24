import React from "react";

function DesignerSection({ selectDesignArea }) {
  return (
    <div>
      <button onClick={() => selectDesignArea(0)}>Industrial</button>
      <h1>Sebastian Design</h1>
      <button onClick={() => selectDesignArea(1)}>Digital</button>
    </div>
  );
}

export default DesignerSection;
