import React from 'react';
import Project from './Project'; // Import your Project component

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.keyValue} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
