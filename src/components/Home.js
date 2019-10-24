import React, { useState, useRef } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'

  const designerRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });

  const selectViewport = viewport => {
    setCurrentViewport(viewport);
    scrollToRef(viewport === 0 ? designerRef : projectRef);
  };

  const selectDesignArea = area => {
    selectViewport(1);
    setCurrentDesignArea(area);
  };

  return (
    <div>
      <DesignerSection
        designerRef={designerRef}
        selectDesignArea={selectDesignArea}
      />
      <ProjectSection
        projectRef={projectRef}
        currentDesignArea={currentDesignArea}
        selectViewport={selectViewport}
        currentViewport={currentViewport}
      />
    </div>
  );
}
