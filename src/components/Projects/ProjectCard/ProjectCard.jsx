import React from "react";
// import Button from "../../Button/Button";
import TechnologyPill from "./TechnologyPill";

const ProjectCard = ({
  title,
  imageSource,
  imageAlt,
  technologies,
  text,
  sourceCodeURL,
}) => {
  return (
    <article className="project-card">
      <img src={imageSource} className="card-image" alt={imageAlt} />

      <div className="card-body">
        <div className="technologies">
          {technologies.map((technology) => (
            <TechnologyPill key={technology} title={technology} />
          ))}
        </div>

        <div className="card-title">{title}</div>

        <div className="card-text">{text}</div>

        <div className="card-buttons">
          <a className="btn btn-primary" href={sourceCodeURL} target="_blank">Source Code</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
