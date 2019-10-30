import React, { useState, useEffect } from "react";
import classNames from "classnames";

import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import NavigationButtons from "./NavigationButtons";
import "./ProjectSection.scss";

const kaarnaDesignProject = {
  title: "Kaarna",
  description: "The electrical foldable scooter for people who care",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility"],
  displayableCategory: 1,
  image: "./assets/kaarna.jpg",
  style: {
    backgroundColor: "black",
    color: "white"
  }
};

const tyyniDesignProject = {
  title: "Tyyni",
  description: "Form meets function. Science meets art. Sound meets visual.",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Acoustic Design", "Wall Panel"],
  displayableCategory: 1,
  image: "./assets/tyyni.png",
  style: {
    backgroundColor: "black",
    color: "white"
  }
};

const kuuDesignProject = {
  title: "Kuu",
  description: "Smart nightlight for smart people",
  year: 2016,
  isTeam: false,
  categories: ["Product Design", "Light Design", "Smart Furniture"],
  displayableCategory: 1,
  image: "./assets/kuu.png",
  style: {
    backgroundColor: "black",
    color: "white"
  }
};

const museDesignProject = {
  title: "Muse",
  description: "Make Unique Successful Experiences",
  year: 2014,
  isTeam: true,
  categories: ["Service Design", "Web Design", "UX Design"],
  displayableCategory: 0,
  image: "./assets/muse.png",
  classes: "contain",
  style: {
    backgroundColor: "#6bc9b7",
    color: "black"
  }
};

const anneliinaDesignProject = {
  title: "Anneliina",
  description: "Kotihoitoa läheltäsi",
  year: 2016,
  isTeam: false,
  categories: ["Web Design", "Brand Design", "UX Design"],
  displayableCategory: 0,
  image: "./assets/anneliina.png",
  classes: "contain",
  style: {
    backgroundColor: "#96c1d9",
    color: "black"
  }
};

const scootDesignProject = {
  title: "Scoot",
  description: "Re-inventing urban mobility",
  year: 2017,
  isTeam: false,
  categories: ["Web Design", "UI Design", "UX Design"],
  displayableCategory: 0,
  image: "./assets/scoot.png",
  classes: "contain",
  style: {
    backgroundColor: "#f8f379",
    color: "black"
  }
};

const axiomDesignProject = {
  title: "Axiom",
  description: "Bringing university and industry together",
  year: 2019,
  isTeam: true,
  categories: ["Service Design", "UX Design", "Concept Design"],
  displayableCategory: 0,
  image: "./assets/axiom.png",
  classes: "contain",
  style: {
    backgroundColor: "#d2ebf9",
    color: "black"
  }
};

const industrialProjects = [
  kaarnaDesignProject,
  tyyniDesignProject,
  kuuDesignProject
];
const digitalProjects = [
  museDesignProject,
  anneliinaDesignProject,
  scootDesignProject,
  axiomDesignProject
];

function ProjectSection({
  projectRef,
  currentDesignArea,
  currentViewport,
  selectDesignArea,
  selectViewport,
  setIsButtonSticky,
  shouldAnimate
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projects =
    currentDesignArea === 1 ? digitalProjects : industrialProjects;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    setActiveProjectIndex(0);
  }, [currentDesignArea]);

  return (
    <section ref={projectRef} className="project-section-container">
      <div
        className={classNames(
          "project-section",
          {
            "project-section-digital": currentDesignArea === 1
          },
          {
            "project-section-industrial": currentDesignArea === 0
          },
          {
            "project-section-animate": shouldAnimate
          }
        )}
      >
        <ProjectCatalog
          currentDesignArea={currentDesignArea}
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
          animationDirectionIn={currentViewport === 1}
        />
        <ProjectCard
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          animationDirectionIn={currentViewport === 1}
        />
        <NavigationButtons
          activeProject={activeProject}
          currentDesignArea={currentDesignArea}
          selectDesignArea={selectDesignArea}
          selectViewport={selectViewport}
          setIsButtonSticky={setIsButtonSticky}
          animationFadeIn={currentDesignArea === 1 && currentViewport === 1}
        />
        <NavigationButtons
          activeProject={activeProject}
          currentDesignArea={currentDesignArea}
          selectDesignArea={selectDesignArea}
          selectViewport={selectViewport}
          setIsButtonSticky={setIsButtonSticky}
          animationFadeIn={currentDesignArea === 0 && currentViewport === 1}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
