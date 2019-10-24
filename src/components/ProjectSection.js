import React, { useState } from "react";

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
  year: 2014,
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

const projects = [kaarnaDesignProject, tyyniDesignProject, kuuDesignProject];

function ProjectSection({
  projectRef,
  currentDesignArea,
  currentViewport,
  selectViewport
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section ref={projectRef} className="project-section-container">
      <div className="project-section">
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
