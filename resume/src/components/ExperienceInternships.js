import React, { useState } from 'react';

const ExperienceInternships = ({ onNext, onNextStep }) => {
  const [experience, setExperience] = useState('');
  const [internships, setInternships] = useState('');

  const handleNext = () => {
    onNext('experience', experience);
    onNext('internships', internships);
    onNextStep();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Experience & Internships</h2>
      <textarea
        className="w-full p-4 border rounded-lg"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Describe your work experience..."
      />
      <textarea
        className="w-full p-4 border rounded-lg mt-4"
        value={internships}
        onChange={(e) => setInternships(e.target.value)}
        placeholder="Describe your internships..."
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
};

export default ExperienceInternships;
