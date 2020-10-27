import Project from './Project.js';
import React, { useState } from 'react';

const ProjectsList = () => {
  const personalProjects = [
    {
      description: 'Functional Front End replica of lululemon main product section',
      img: '/client/dist/images/lululemon_clone.png',
      siteLink: 'https://lululemon-clone.netlify.app',
      title: 'Lululemon Clone',
    },
    {
      description: `Front End work that I'm currently contributing
      toward the Civic Tech Index at Hack for LA`,
      img: '/client/dist/images/civic_tech_index.png',
      siteLink: 'http://civictechindex.org',
      title: 'Civic Tech Index',
    },
    {
      description: 'Portfolio site built for a client for marketing purposes',
      img: '/client/dist/images/sollypop_site.png',
      siteLink: 'https://www.sollypop.xyz',
      title: 'Sollypop.xyz',
    },
    {
      description: 'A Full Stack app designed to connect video game players.',
      img: '/client/dist/images/best_monk.png',
      siteLink: 'https://best-monk.netlify.app',
      title: 'Best Monk',
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
