import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";
import variables from "../variables.js";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'product', 2 === 'service', 3 === 'aesthetics', 4 === 'information'
  const [skipProjectSection, setSkipProjectSection] = useState(false);
  const showFirstTimeViewport0 = useRef(true);
  const showFirstTimeViewport1 = useRef(true);
  const designerRef = useRef(null);
  const productRef = useRef(null);
  const serviceRef = useRef(null);
  const informationRef = useRef(null);
  const rootElement = document.getElementById("root");

  const { mobileMaxBreakpoint, tabletMaxBreakpoint } = variables;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const isTablet = windowWidth <= tabletMaxBreakpoint;
  const isMobile = windowWidth <= mobileMaxBreakpoint;

  useEffect(() => {
    const detectViewportOnScroll = () => {
      const currentYOffset = rootElement.scrollTop;
      const designerRefOffset = designerRef.current.offsetTop;
      const projductRefOffset = productRef.current.offsetTop;
      const serviceRefOffset = serviceRef.current.offsetTop;
      const informationRefOffset = informationRef.current.offsetTop;
      const offsetBreakpoints = [
        designerRefOffset,
        projductRefOffset,
        serviceRefOffset,
        informationRefOffset,
      ];

      setPreviousYOffset(currentYOffset);

      const nextViewport =
        currentYOffset <= offsetBreakpoints[currentViewport - 3]
          ? currentViewport - 3
          : currentYOffset >= offsetBreakpoints[currentViewport + 3]
          ? currentViewport + 3
          : currentYOffset <= offsetBreakpoints[currentViewport - 2]
          ? currentViewport - 2
          : currentYOffset >= offsetBreakpoints[currentViewport + 2]
          ? currentViewport + 2
          : currentYOffset <= offsetBreakpoints[currentViewport - 1]
          ? currentViewport - 1
          : currentYOffset >= offsetBreakpoints[currentViewport + 1]
          ? currentViewport + 1
          : currentViewport;

      if (nextViewport !== currentViewport) {
        if (currentViewport === 0) showFirstTimeViewport0.current = false;
        if (currentViewport === 1 && !skipProjectSection)
          showFirstTimeViewport1.current = false;
        setCurrentViewport(nextViewport);
        if (nextViewport === 3) setSkipProjectSection(false);
      }
    };
    rootElement.addEventListener("scroll", detectViewportOnScroll);
    return () =>
      rootElement.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, previousYOffset, rootElement]);

  const selectViewport = (viewport) => {
    const ref =
      viewport === 3
        ? informationRef
        : viewport === 2
        ? serviceRef
        : viewport === 1
        ? productRef
        : designerRef;

    rootElement.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <DesignerSection
        designerRef={designerRef}
        selectViewport={selectViewport}
        showTypist={showFirstTimeViewport0.current}
        setSkipProjectSection={setSkipProjectSection}
        isMobile={isMobile}
      />
      <ProjectSection
        projectRef={productRef}
        designArea={1}
        currentViewport={currentViewport}
        skipProjectSection={skipProjectSection}
        windowHeight={windowHeight}
        isTablet={isTablet}
        isMobile={isMobile}
      />
      <ProjectSection
        projectRef={serviceRef}
        designArea={2}
        currentViewport={currentViewport}
        skipProjectSection={skipProjectSection}
        windowHeight={windowHeight}
        isTablet={isTablet}
        isMobile={isMobile}
      />
      <InformationSection
        informationRef={informationRef}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        windowWidth={windowWidth}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </>
  );
}
