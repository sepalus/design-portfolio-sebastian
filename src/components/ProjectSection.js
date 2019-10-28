import React, { useState, useEffect } from "react";
import classNames from "classnames";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";

const kaarnaDesignProject = {
  title: "Kaarna",
  description: "The electrical foldable scooter for people who care",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility"],
  displayableCategory: 1,
  style: {
    backgrounColor: "black",
    backgroundImage: `url('./assets/kaarna.jpg')`,
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
  style: {
    backgrounColor: "black",
    backgroundImage: `url('./assets/tyyni.png')`,
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
  style: {
    backgrounColor: "black",
    backgroundImage: `url('./assets/kuu.png')`,
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
  style: {
    backgroundImage: `url('./assets/muse.png')`,
    backgroundColor: "#5ac4ae",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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
  style: {
    backgroundImage: `url('./assets/anneliina.png')`,
    backgroundColor: "#8abad4",
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
  style: {
    backgroundImage: `url('./assets/scoot.png')`,
    backgroundColor: "#fff450",
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
  style: {
    backgroundImage: `url('./assets/axiom.png')`,
    backgroundColor: "#edf7fd",
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
  isSlide,
  setIsSlide,
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
          },
          {
            "project-section-slide": isSlide
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
          activeProject={activeProject}
          activeProjectNumber={activeProjectIndex + 1}
          animationDirectionIn={currentViewport === 1}
        />
      </div>
      <div
        className={classNames("project-section-button-wrapper", {
          "project-section-button-wrapper-left": currentDesignArea === 1
        })}
        style={{ color: activeProject.style.color }}
      >
        <button
          className={classNames(
            "link-button project-section-button project-section-button-home",
            {
              "project-section-button-left": currentDesignArea === 1
            }
          )}
          onClick={() => selectViewport(0)}
        >
          <h4>Home</h4>
          <KeyboardArrowUpIcon />
        </button>
        <button
          className={classNames("link-button project-section-button", {
            "project-section-button-left": currentDesignArea === 0
          })}
          onClick={() => {
            selectDesignArea(currentDesignArea === 1 ? 0 : 1, true);
            setIsSlide(true);
          }}
        >
          {currentDesignArea === 1 ? (
            <>
              <h4>Product</h4>
              <KeyboardArrowRightIcon />
            </>
          ) : (
            <>
              <h4>Digital</h4>
              <KeyboardArrowLeftIcon />
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default ProjectSection;
