import Project from './Project.js';
import React, { useState } from 'react';

const ProjectsList = () => {
  const personalProjects = [
    {
      title: 'Lululemon Clone',
      img: '/client/dist/images/lululemon_clone.png',
      description: 'Functional Front End replica of lululemon main product section',
    },
    {
      title: 'Civic Tech Index',
      img: '/client/dist/images/civic_tech_index.png',
      description: `Front End work that I'm currently contributing
      toward the Civic Tech Index at Hack for LA`,
    },
    {
      title: 'Sollypop.xyz',
      img: '/client/dist/images/sollypop_site.png',
      description: 'Portfolio site built for a client for marketing purposes',
    },
    {
      title: 'Best Monk',
      img: '/client/dist/images/best_monk.png',
      description: 'A Full Stack app designed to connect video game players.',
    },
  ];
  return (
    <div className="project-container">
      <h2 className="project-header">Check out my projects below!</h2>
      <div className="projects-list">
        {personalProjects.map((project, index) => {
         return <Project project={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectsList;
