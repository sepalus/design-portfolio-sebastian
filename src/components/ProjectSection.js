import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import Navigator from "./Navigator.js";
import { industrialProjects } from "./ProjectDataIndustrial";
import { digitalProjects } from "./ProjectDataDigital";

function ProjectSection({
  projectRef,
  designArea,
  currentViewport,
  selectViewport,
  sections,
  activeProjectFirstLast,
  setActiveProjectFirstLast,
  isScrollSnapped,
  windowWidth,
  windowHeight,
  isMobileExtraSmall,
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
  const [toggleMenuClass, setToggleMenuClass] = useState(0);

  const projects =
    designArea === 2
      ? industrialProjects(catalogIsCompressed)
      : digitalProjects(catalogIsCompressed);

  const activeProject = projects[activeProjectIndex];

  const filterImages = (projects) =>
    isMobile && projects.firstImageIsDuplicate
      ? projects.images.slice(1)
      : projects.images;

  const filteredImages = filterImages(activeProject);

  const filteredImageStyleIndividualMobile =
    activeProject.imageStyleMobile && activeProject.imageStyleMobile.individual
      ? isMobile && activeProject.firstImageIsDuplicate
        ? activeProject.imageStyleMobile.individual.slice(1)
        : activeProject.imageStyleMobile.individual
      : undefined;

  useEffect(() => {
    if (activeProjectFirstLast < 0) return;
    if (activeProjectFirstLast === 1)
      setActiveProjectIndex(projects.length - 1);
    else if (activeProjectFirstLast === 0) setActiveProjectIndex(0);
    setActiveProjectFirstLast(-1);
  }, [activeProjectFirstLast]);

  useEffect(() => {
    setActiveImageIndex(0);
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

  const previousProject = (viewport) => {
    if (viewport !== designArea) return;
    if (activeProjectIndex < 1) selectViewport(currentViewport - 1, 1);
    else selectProject(activeProjectIndex - 1);
  };

  const nextProject = (viewport) => {
    if (viewport !== designArea) return;
    if (activeProjectIndex >= projects.length - 1)
      selectViewport(currentViewport + 1, 0);
    else selectProject(activeProjectIndex + 1);
  };

  const selectProject = (projectIndex, imageIndex) => {
    setCatalogIsOpenMobile(false);
    if (projectIndex === activeProjectIndex && activeImageIndex === 0) return;
    setToggleCardImageClass(0);
    setActiveImageIndex(imageIndex || 0);
    setActiveProjectIndex(projectIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(toggleDescriptionClass === 1 ? -1 : 1);
  };

  const scrollImagesPrevious = (imageIndex, viewport) => {
    if (typeof viewport !== "undefined" && viewport !== designArea) return;
    if (imageIndex > 0) selectImage(imageIndex - 1);
    else {
      const previousProjectIndex =
        activeProjectIndex === 0 ? projects.length - 1 : activeProjectIndex - 1;
      const previousProjectImageAmount = filterImages(
        projects[previousProjectIndex]
      ).length;
      selectProject(previousProjectIndex, previousProjectImageAmount - 1);
    }
  };

  const scrollImagesNext = (imageIndex, viewport) => {
    if (typeof viewport !== "undefined" && viewport !== designArea) return;
    if (imageIndex < imageAmount - 1) selectImage(imageIndex + 1);
    else {
      const nextProjectIndex =
        activeProjectIndex === projects.length - 1 ? 0 : activeProjectIndex + 1;
      selectProject(nextProjectIndex);
    }
  };

  const selectImage = (imageIndex) => {
    const updatedImageIndex = updateImageIndex(imageIndex);
    setToggleCardImageClass(0);
    setActiveImageIndex(updatedImageIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(updatedImageIndex === 0 || isMobile ? 2 : 0);
  };

  return (
    <section ref={projectRef} className="project-section-container">
      <Navigator
        navigatorViewport={designArea}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        sections={sections}
        isScrollSnapped={isScrollSnapped}
        catalogIsCompressed={catalogIsCompressed}
      />
      <div
        className={classNames(
          "project-section",
          {
            "project-section-digital": designArea === 1,
          },
          {
            "project-section-industrial": designArea === 2,
          },
          {
            "project-section-animation-static": isMobile,
          },
          {
            "project-section-animation-enter":
              !isMobile && currentViewport === designArea,
          },
          {
            "project-section-animation-exit":
              !isMobile && currentViewport !== designArea,
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
          toggleMenuClass={toggleMenuClass}
          setToggleMenuClass={setToggleMenuClass}
          isMobile={isMobile}
        />
        {projects.map((project, index) => {
          return index === activeProjectIndex ? (
            <ProjectCard
              currentViewport={currentViewport}
              activeProjectIndex={activeProjectIndex}
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
              setToggleMenuClass={setToggleMenuClass}
              catalogIsOpenMobile={catalogIsOpenMobile}
              setCatalogIsOpenMobile={setCatalogIsOpenMobile}
              selectImage={selectImage}
              scrollImagesPrevious={scrollImagesPrevious}
              scrollImagesNext={scrollImagesNext}
              selectProject={selectProject}
              previousProject={previousProject}
              nextProject={nextProject}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
              isMobileExtraSmall={isMobileExtraSmall}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ) : (
            <></>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
