import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";
import variables from "../variables.js";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'product', 2 === 'service', 3 === 'aesthetics', 4 === 'information'
  const showFirstTimeViewport0 = useRef(true);
  const sections = ["Home", "Digital", "Product", "About"];
  const designerRef = useRef(null);
  const serviceRef = useRef(null);
  const productRef = useRef(null);
  const informationRef = useRef(null);
  const rootElement = document.getElementById("root");
  const [isScrollSnapped, setIsScrollSnapped] = useState(true);
  const [activeDigitalProjectFirstLast, setActiveDigitalProjectFirstLast] =
    useState(-1); // -1 === none, 0 === first, 1 === last
  const [activeProductProjectFirstLast, setActiveProductProjectFirstLast] =
    useState(-1); // -1 === none, 0 === first, 1 === last

  const {
    mobileMaxBreakpoint,
    tabletMaxBreakpoint,
    mobileExtraSmallMaxBreakpoint,
    mobileSmallMaxBreakpoint,
  } = variables;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const isTablet = windowWidth <= tabletMaxBreakpoint;
  const isMobile = windowWidth <= mobileMaxBreakpoint;
  const isMobileExtraSmall = windowWidth <= mobileExtraSmallMaxBreakpoint;
  const isMobileSmall = windowWidth <= mobileSmallMaxBreakpoint;

  useEffect(() => {
    const detectViewportOnScroll = () => {
      setIsScrollSnapped(false);
      const currentYOffset = rootElement.scrollTop;
      const designerRefOffset = designerRef.current.offsetTop;
      const serviceRefOffset = serviceRef.current.offsetTop;
      const productRefOffset = productRef.current.offsetTop;
      const informationRefOffset = informationRef.current.offsetTop;
      const offsetBreakpoints = [
        designerRefOffset,
        serviceRefOffset,
        productRefOffset,
        informationRefOffset,
      ];

      if (offsetBreakpoints.includes(currentYOffset)) setIsScrollSnapped(true);
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
        setCurrentViewport(nextViewport);
      }
    };
    rootElement.addEventListener("scroll", detectViewportOnScroll);
    return () =>
      rootElement.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, previousYOffset, rootElement]);

  const selectViewport = (viewport, activeProjectFirstLast) => {
    if (typeof activeProjectFirstLast !== "undefined") {
      if (viewport === 1)
        setActiveDigitalProjectFirstLast(activeProjectFirstLast);
      else if (viewport === 2)
        setActiveProductProjectFirstLast(activeProjectFirstLast);
    }

    const ref =
      viewport === 3
        ? informationRef
        : viewport === 2
        ? productRef
        : viewport === 1
        ? serviceRef
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
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
        showTypist={showFirstTimeViewport0.current}
        isMobile={isMobile}
      />
      <ProjectSection
        projectRef={serviceRef}
        designArea={1}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        activeProjectFirstLast={activeDigitalProjectFirstLast}
        setActiveProjectFirstLast={setActiveDigitalProjectFirstLast}
        isScrollSnapped={isScrollSnapped}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        isTablet={isTablet}
        isMobile={isMobile}
        isMobileExtraSmall={isMobileExtraSmall}
      />
      <ProjectSection
        projectRef={productRef}
        designArea={2}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        activeProjectFirstLast={activeProductProjectFirstLast}
        setActiveProjectFirstLast={setActiveProductProjectFirstLast}
        isScrollSnapped={isScrollSnapped}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        isTablet={isTablet}
        isMobile={isMobile}
        isMobileExtraSmall={isMobileExtraSmall}
      />
      <InformationSection
        informationRef={informationRef}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
        windowWidth={windowWidth}
        isTablet={isTablet}
        isMobile={isMobile}
        isMobileExtraSmall={isMobileExtraSmall}
        isMobileSmall={isMobileSmall}
      />
    </>
  );
}
