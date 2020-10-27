import React, { useState } from 'react';

const Project = ({ project }) => {
  return (
    <>
      <div className="project">
        <h3 className="project-title">{project.title}</h3>
        <a href={project.siteLink}>
          <img
            className="project-image"
            src={project.img}
          />
        </a>
        <p className="project-description">{project.description}</p>
      </div>
    </>
  )
}

export default Project;
