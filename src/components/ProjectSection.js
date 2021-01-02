import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import Navigator from "./Navigator.js";
import {
  aestheticsDesignProjects,
  industrialProjects,
  digitalProjects,
} from "./ProjectData";

function ProjectSection({
  projectRef,
  designArea,
  currentViewport,
  selectViewport,
  sections,
  isScrollSnapped,
  skipProjectSection,
  windowHeight,
  isMobile,
  isTablet,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [catalogIsCompressed, setCatalogIsCompressed] = useState(false);
  const [catalogIsOpenMobile, setCatalogIsOpenMobile] = useState(false);
  const [toggleCardClass, setToggleCardClass] = useState(0);
  const [toggleCardImageClass, setToggleCardImageClass] = useState(0);
  const [toggleDescriptionClass, setToggleDescriptionClass] = useState(0);

  const projects =
    designArea === 3
      ? aestheticsDesignProjects
      : designArea === 2
      ? digitalProjects(catalogIsCompressed)
      : industrialProjects(catalogIsCompressed);

  const activeProject = projects[activeProjectIndex];

  const filteredImages =
    isMobile && activeProject.firstImageIsDuplicate
      ? activeProject.images.slice(1)
      : activeProject.images;

  const filteredImageStyleIndividualMobile =
    activeProject.imageStyleMobile && activeProject.imageStyleMobile.individual
      ? isMobile && activeProject.firstImageIsDuplicate
        ? activeProject.imageStyleMobile.individual.slice(1)
        : activeProject.imageStyleMobile.individual
      : undefined;

  useEffect(() => {
    setToggleCardClass(currentViewport === designArea ? 1 : 0);
    setToggleCardImageClass(0);
    setToggleDescriptionClass(
      currentViewport === designArea && (activeImageIndex === 0 || isMobile)
        ? 1
        : 0
    );
    setCatalogIsOpenMobile(false);
  }, [currentViewport]);

  const imageAmount = filteredImages.length;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);

  const updateImageIndex = (imageIndex) => {
    if (imageIndex < 0) return imageAmount - 1;
    if (imageIndex > imageAmount - 1) return 0;
    return imageIndex;
  };

  const selectProject = (projectIndex) => {
    setCatalogIsOpenMobile(false);
    if (projectIndex === activeProjectIndex && activeImageIndex === 0) return;
    setToggleCardImageClass(0);
    setActiveImageIndex(0);
    setActiveProjectIndex(projectIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(toggleDescriptionClass === 1 ? -1 : 1);
  };

  const selectImage = (imageIndex) => {
    const updatedImageIndex = updateImageIndex(imageIndex);
    setToggleCardImageClass(0);
    setActiveImageIndex(updatedImageIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(updatedImageIndex === 0 || isMobile ? 2 : 0);
  };

  if (skipProjectSection)
    return <section ref={projectRef} className="project-section-container" />;

  return (
    <section ref={projectRef} className="project-section-container">
      <Navigator
        navigatorViewport={designArea}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
      />
      <div
        className={classNames(
          "project-section",
          {
            "project-section-digital": designArea === 2,
          },
          {
            "project-section-industrial": designArea === 1,
          },
          {
            "project-section-animation-enter": currentViewport === designArea,
          },
          {
            "project-section-animation-exit": currentViewport !== designArea,
          }
        )}
      >
        <ProjectCatalog
          designArea={designArea}
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          catalogIsCompressed={catalogIsCompressed}
          setCatalogIsCompressed={setCatalogIsCompressed}
          setToggleCardImageClass={setToggleCardImageClass}
          selectProject={selectProject}
          catalogIsOpenMobile={catalogIsOpenMobile}
          setCatalogIsOpenMobile={setCatalogIsOpenMobile}
          isMobile={isMobile}
        />
        <ProjectCard
          currentViewport={currentViewport}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
          filteredImages={filteredImages}
          filteredImageStyleIndividualMobile={
            filteredImageStyleIndividualMobile
          }
          imageAmount={imageAmount}
          designArea={designArea}
          catalogIsCompressed={catalogIsCompressed}
          toggleCardClass={toggleCardClass}
          toggleCardImageClass={toggleCardImageClass}
          toggleDescriptionClass={toggleDescriptionClass}
          setToggleDescriptionClass={setToggleDescriptionClass}
          setCatalogIsOpenMobile={setCatalogIsOpenMobile}
          selectImage={selectImage}
          windowHeight={windowHeight}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
