import React, { useState } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer selection', 1 === 'project selection'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial, 1 === 'digital'

  const selectViewport = section => {
    setCurrentViewport(section);
  };

  const selectDesignArea = section => {
    console.log("selectDesignArea");

    setCurrentViewport(1);
    setCurrentDesignArea(section);
  };

  return (
    <div>
      {currentViewport === 1 ? (
        <ProjectSection
          currentDesignArea={currentDesignArea}
          selectViewport={selectViewport}
        />
      ) : (
        <DesignerSection selectDesignArea={selectDesignArea} />
      )}
    </div>
  );
}
