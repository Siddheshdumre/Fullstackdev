import React, { useState } from 'react';

const Education = ({ onNext, onNextStep }) => {
  const [education, setEducation] = useState('');

  const handleNext = () => {
    onNext('education', education);
    onNextStep();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Education</h2>
      <input
        type="text"
        className="w-full p-4 border rounded-lg"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        placeholder="Enter your education details..."
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
};

export default Education;
