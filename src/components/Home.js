import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [isInitialViewPort, setIsInitialViewPort] = useState(true);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'

  const designerRef = useRef(null);
  const projectRef = useRef(null);
  const informationRef = useRef(null);
  const rootElement = document.getElementById("root");

  useEffect(() => {
    const detectViewportOnScroll = () => {
      const currentYOffset = rootElement.scrollTop;
      const designerRefOffset = designerRef.current.offsetTop;
      const projectRefOffset = projectRef.current.offsetTop;
      const informationRefOffset = informationRef.current.offsetTop;

      setPreviousYOffset(currentYOffset);

      const isScrollDown = currentYOffset > previousYOffset;
      const scrollDownNextViewport =
        currentYOffset >= informationRefOffset
          ? 2
          : currentYOffset >= projectRefOffset
          ? 1
          : 0;
      const scrollUpNextViewport =
        currentYOffset <= designerRefOffset
          ? 0
          : currentYOffset <= projectRefOffset
          ? 1
          : 2;
      const nextViewport = isScrollDown
        ? scrollDownNextViewport
        : scrollUpNextViewport;

      if (currentViewport !== nextViewport) {
        setCurrentViewport(nextViewport);
        setTimeout(() => setIsInitialViewPort(false), 500);
      }
    };
    rootElement.addEventListener("scroll", detectViewportOnScroll);
    return () =>
      rootElement.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, previousYOffset, rootElement]);

  const selectViewport = viewport => {
    const ref =
      viewport === 2
        ? informationRef
        : viewport === 1
        ? projectRef
        : designerRef;

    rootElement.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  const selectDesignArea = area => {
    setCurrentDesignArea(area);
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
        shouldAnimate={true}
      />
      <InformationSection informationRef={informationRef} />
    </>
  );
}
