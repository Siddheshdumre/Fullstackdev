import React, { useState } from 'react';

const Projects = ({ onNext, onNextStep }) => {
  const [projects, setProjects] = useState('');

  const handleComplete = () => {
    onNext('projects', projects);
    onNextStep(); // This will trigger the display of the final resume
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Projects</h2>
      <textarea
        className="w-full p-4 border rounded-lg"
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
        placeholder="Describe your projects..."
      />
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg" onClick={handleComplete}>
        Save and Complete
      </button>
    </div>
  );
};

export default Projects;
