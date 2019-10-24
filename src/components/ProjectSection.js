import React, { useState } from "react";
import classNames from "classnames";

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
  backgroundImage: "kaarna.jpg",
  themeColor: "black",
  style: {
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
  backgroundImage: "kuu.jpg",
  themeColor: "black",
  style: {
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
  backgroundImage: "kuu.jpg",
  themeColor: "black",
  style: {
    backgroundImage: `url('./assets/kuu.png')`,
    color: "white"
  }
};

const museDesignProject = {
  title: "Muse",
  description: "Make Unique Successful Experiences",
  year: 2014,
  isTeam: false,
  categories: ["Service Design", "Web Design", "UX Design"],
  displayableCategory: 0,
  backgroundImage: "muse.jpg",
  themeColor: "#5ac4ae",
  style: {
    backgroundImage: `url('./assets/muse.png')`,
    color: "black"
  }
};

const industrialProjects = [
  kaarnaDesignProject,
  tyyniDesignProject,
  kuuDesignProject
];
const digitalProjects = [museDesignProject];

function ProjectSection({
  projectRef,
  currentDesignArea,
  currentViewport,
  selectViewport
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projects =
    currentDesignArea === 1 ? digitalProjects : industrialProjects;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);

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
          }
        )}
      >
        <ProjectCatalog
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          setActiveProjectIndex={setActiveProjectIndex}
          animateIn={currentViewport === 1}
        />
        <ProjectCard
          activeProject={projects[activeProjectIndex]}
          activeProjectNumber={activeProjectIndex + 1}
          animateIn={currentViewport === 1}
        />
      </div>
      <button
        style={{ position: "absolute", bottom: "100px", left: " 100px" }}
        onClick={() => selectViewport(0)}
      >
        Home
      </button>
    </section>
  );
}

export default ProjectSection;
