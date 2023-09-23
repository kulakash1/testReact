import React from 'react';
import ProjectsList from './ProjectsList'; // Import your ProjectsList component
import { projectsmade } from './projectData'; // Import your project data

const App = () => {
  return (
    <div>
      {/* Other components and content */}
      <ProjectsList projects={projectsmade} />
    </div>
  );
};

export default App;
