import React from "react";

const productDesignProjects = [
  { title: "Kaarna", subtitle: "Vehicle Design" },
  { title: "Puro", subtitle: "Acoustic Design" },
  { title: "Kuu", subtitle: "Light Design" }
];

function ProjectCatalog() {
  return (
    <div className="project-catalog">
      <h2>Product Design</h2>
      <ul className="project-catalog-projects">
        {productDesignProjects.map(project => (
          <CatalogueItem title={project.title} subtitle={project.subtitle} />
        ))}
      </ul>
    </div>
  );
}

function CatalogueItem({ title, subtitle }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </li>
  );
}

export default ProjectCatalog;
