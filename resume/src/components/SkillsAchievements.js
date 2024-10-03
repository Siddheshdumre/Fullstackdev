import React, { useState } from 'react';

const SkillsAchievements = ({ onNext, onNextStep }) => {
  const [skills, setSkills] = useState('');
  const [achievements, setAchievements] = useState('');

  const handleNext = () => {
    onNext('skills', skills);
    onNext('achievements', achievements);
    onNextStep();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Skills & Achievements</h2>
      <textarea
        className="w-full p-4 border rounded-lg"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Enter your skills..."
      />
      <textarea
        className="w-full p-4 border rounded-lg mt-4"
        value={achievements}
        onChange={(e) => setAchievements(e.target.value)}
        placeholder="Enter your achievements..."
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
};

export default SkillsAchievements;
