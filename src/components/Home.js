import React, { useState, useRef } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";

export default function Home() {
  const [isInitialViewPort, setIsInitialViewPort] = useState(true);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const designerRef = useRef(null);
  const projectRef = useRef(null);
  const informationRef = useRef(null);

  const selectViewport = viewport => {
    const ref =
      viewport === 2
        ? informationRef
        : viewport === 1
        ? projectRef
        : designerRef;

    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });
    setCurrentViewport(viewport);
  };

  const selectDesignArea = (area, animateOnChange) => {
    setCurrentDesignArea(area);
    setShouldAnimate(animateOnChange);
    selectViewport(1);
  };

  return (
    <>
      <DesignerSection
        designerRef={designerRef}
        isInitialViewPort={isInitialViewPort}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
      />
      <ProjectSection
        projectRef={projectRef}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
        shouldAnimate={shouldAnimate}
      />
      <InformationSection informationRef={informationRef} />
    </>
  );
}
