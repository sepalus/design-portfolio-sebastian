import React, { useState, useEffect } from "react";
import classNames from "classnames";

import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";

const kaarnaDesignProject = {
  title: "Kaarna",
  description: "An electrical foldable scooter for laid-back cruising",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility Design"],
  displayableCategory: 1,
  image: "./assets/kaarna.jpg",
  styleDarkColor: false,
  style: {
    backgroundColor: "black",
  },
};

const tyyniDesignProject = {
  title: "Tyyni",
  description:
    "An acoustic sound diffuser, with functional acoustic qualities and beautiful form",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Acoustic Design", "Wall Panel Design"],
  displayableCategory: 1,
  image: "./assets/tyyni.png",
  styleDarkColor: false,
  style: {
    backgroundColor: "black",
  },
};

const kuutamoDesignProject = {
  title: "Kuutamo",
  description: "A directional night light that doesn't bother your partner",
  year: 2016,
  isTeam: false,
  categories: ["Product Design", "Furniture Design", "Lamp Design"],
  displayableCategory: 2,
  image: "./assets/kuu.png",
  styleDarkColor: false,
  style: {
    backgroundColor: "black",
  },
};

const kiskoDesignProject = {
  title: "Kisko",
  description:
    "Elegant industrial seating for people who value confort with an edge",
  year: 2019,
  isTeam: false,
  categories: ["Furniture Design", "Chair Design", "Component Design"],
  displayableCategory: 2,
  image: "./assets/kisko.png",
  styleDarkColor: true,
  style: {
    backgroundColor: "white",
  },
};

const kolmioillaDesignProject = {
  title: "Kohdataan Kolmioilla",
  description: "Creating cultural encounters",
  year: 2019,
  isTeam: true,
  categories: ["Street Furniture Design", "Chair Design", "Spatial Design"],
  displayableCategory: 2,
  image: "./assets/kolmioilla.png",
  styleDarkColor: false,
  style: {
    backgroundColor: "black",
  },
};

const pyorreDesignProject = {
  title: "Pyörre",
  description:
    "An electrical toothbrush designed for  recyclability and the circular economy",
  year: 2020,
  isTeam: true,
  categories: [
    "How Appliance Design Design",
    "Design for Recyclability",
    "Design for the Circular Economy",
  ],
  displayableCategory: 2,
  image: "./assets/pyorre.png",
  classes: "contain",
  styleDarkColor: true,
  style: {
    backgroundColor: "white",
  },
};

const museDesignProject = {
  title: "Muse",
  description:
    "A community connecting UBS bank, millennials and startups through unique experiences",
  year: 2014,
  isTeam: true,
  categories: ["Service Design", "Web Design", "Concept Design"],
  displayableCategory: 0,
  image: "./assets/muse.png",
  classes: "contain",
  styleDarkColor: true,
  style: {
    backgroundColor: "#6bc9b7",
  },
};

const anneliinaDesignProject = {
  title: "Anneliina",
  description:
    "A brand identity, that communicates the caring service's core values",
  year: 2016,
  isTeam: false,
  categories: ["Brand Identity Design", "Web Design", "Graphic Design"],
  displayableCategory: 0,
  image: "./assets/anneliina.png",
  classes: "contain",
  styleDarkColor: true,
  style: {
    backgroundColor: "#96c1d9",
  },
};

const scootDesignProject = {
  title: "Scoot",
  description: "A webpage showcasing designs for electrical foldable scooters",
  year: 2017,
  isTeam: false,
  categories: ["Web Design", "UX Design", "UI Design"],
  displayableCategory: 0,
  image: "./assets/scoot.png",
  classes: "contain",
  styleDarkColor: true,
  style: {
    backgroundColor: "#f8f379",
  },
};

const axiomDesignProject = {
  title: "Axiom",
  description:
    "A network that brings students, university and industry together in doctoral research",
  year: 2019,
  isTeam: true,
  categories: ["Service Design", "Co-Design", "Concept Design"],
  displayableCategory: 0,
  image: "./assets/axiom.png",
  classes: "contain",
  styleDarkColor: true,
  style: {
    backgroundColor: "#d2ebf9",
  },
};

const aesthteticsDesignProject = {
  title: "Aesthteics",
  description: "Aesthteics",
  year: 2020,
  isTeam: false,
  categories: ["Beauty", "Cuteness", "Hotness"],
  displayableCategory: 0,
  image: "",
  styleDarkColor: true,
  style: {
    backgroundColor: "black",
  },
};

const industrialProjects = [
  kaarnaDesignProject,
  kiskoDesignProject,
  tyyniDesignProject,
  kuutamoDesignProject,
  pyorreDesignProject,
  kolmioillaDesignProject,
];

const digitalProjects = [
  museDesignProject,
  anneliinaDesignProject,
  scootDesignProject,
  axiomDesignProject,
];

function ProjectSection({
  projectRef,
  designArea,
  currentViewport,
  selectViewport,
  firstSectionEntry,
  firstAreaEntry,
  setFirstAreaEntry,
  skipProjectSection,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projects =
    designArea === 3
      ? [aesthteticsDesignProject]
      : designArea === 2
      ? digitalProjects
      : industrialProjects;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    setActiveProjectIndex(0);
  }, [designArea]);

  if (skipProjectSection)
    return <section ref={projectRef} className="project-section-container" />;

  return (
    <section ref={projectRef} className="project-section-container">
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
            "project-section-animate-slide": !firstAreaEntry,
          },
          {
            "project-section-static": firstAreaEntry && !firstSectionEntry,
          },
          {
            "project-section-animate-compress":
              firstAreaEntry && firstSectionEntry,
          }
        )}
      >
        <ProjectCatalog
          designArea={designArea}
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
      </div>
    </section>
  );
}

export default ProjectSection;
