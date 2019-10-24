import React from "react";
import classNames from "classnames";

const kaarnaDesignProject = {
  title: "Kaarna",
  description: "The electrical foldable scooter for people who care",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility"],
  displayableCategory: 1,
  backgroundImage: "kaarna.jpg",
  themeColor: "black"
};

const kaarnaStyle = {
  backgroundImage: `url('./assets/kaarna.jpg')`,
  color: "white"
};

const project = kaarnaDesignProject;
function ProjectCard({ animateIn }) {
  return (
    <div
      className={classNames(
        "project-card",
        { "animate-card-in": animateIn },
        { "animate-card-out": !animateIn }
      )}
      style={kaarnaStyle}
    >
      <div className="project-card-description">
        <h1>01</h1>
        <h1>{project.title}</h1>
        <h4>{project.description}</h4>
      </div>
      <div className="project-card-footer"></div>
    </div>
  );
}

export default ProjectCard;
