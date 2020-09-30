import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'
  const [firstAreaEntry, setFirstAreaEntry] = useState(true);
  const showFirstTimeViewport0 = useRef(true);
  const showFirstTimeViewport1 = useRef(true);
  const designerRef = useRef(null);
  const projectRef = useRef(null);
  const informationRef = useRef(null);
  const rootElement = document.getElementById("root");

  useEffect(() => {
    setFirstAreaEntry(true);
  }, [currentViewport]);

  useEffect(() => {
    const detectViewportOnScroll = () => {
      const currentYOffset = rootElement.scrollTop;
      const designerRefOffset = designerRef.current.offsetTop;
      const projectRefOffset = projectRef.current.offsetTop;
      const informationRefOffset = informationRef.current.offsetTop;
      const offsetBreakpoints = [
        designerRefOffset,
        projectRefOffset,
        informationRefOffset,
      ];

      setPreviousYOffset(currentYOffset);

      const nextViewport =
        currentYOffset <= offsetBreakpoints[currentViewport - 2]
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
        if (currentViewport === 1) showFirstTimeViewport1.current = false;
        setCurrentViewport(nextViewport);
      }
    };
    rootElement.addEventListener("scroll", detectViewportOnScroll);
    return () =>
      rootElement.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, previousYOffset, rootElement]);

  const selectViewport = (viewport) => {
    const ref =
      viewport === 2
        ? informationRef
        : viewport === 1
        ? projectRef
        : designerRef;

    rootElement.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const selectDesignArea = (area) => {
    setCurrentDesignArea(area);
    selectViewport(1);
    setFirstAreaEntry(false);
  };

  return (
    <>
      <DesignerSection
        designerRef={designerRef}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
        showTypist={showFirstTimeViewport0.current}
      />
      <ProjectSection
        projectRef={projectRef}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
        firstSectionEntry={showFirstTimeViewport1.current}
        firstAreaEntry={firstAreaEntry}
        setFirstAreaEntry={setFirstAreaEntry}
      />
      <InformationSection informationRef={informationRef} />
    </>
  );
}
