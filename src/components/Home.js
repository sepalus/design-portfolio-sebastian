import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'
  const [isSlide, setIsSlide] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const designerRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const detectViewportOnScroll = () => {
      const nextViewport =
        window.pageYOffset < projectRef.current.offsetTop ? 0 : 1;
      if (nextViewport === 0) setIsSlide(false);
      if (currentViewport !== nextViewport) {
        setShouldAnimate(true);
        setCurrentViewport(nextViewport);
      }
    };
    window.addEventListener("scroll", detectViewportOnScroll);
    return () => window.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport]);

  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });

  const selectViewport = viewport =>
    scrollToRef(viewport === 0 ? designerRef : projectRef);

  const selectDesignArea = (area, animateOnChange) => {
    setCurrentDesignArea(area);
    setShouldAnimate(animateOnChange);
    selectViewport(1);
  };

  return (
    <div>
      <DesignerSection
        designerRef={designerRef}
        selectDesignArea={selectDesignArea}
      />
      <ProjectSection
        projectRef={projectRef}
        currentViewport={currentViewport}
        shouldAnimate={shouldAnimate}
        currentDesignArea={currentDesignArea}
        selectViewport={selectViewport}
        selectDesignArea={selectDesignArea}
        isSlide={isSlide}
        setIsSlide={setIsSlide}
      />
    </div>
  );
}
