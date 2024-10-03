import React, { useState } from 'react';

const ProfessionalSummary = ({ onNext, onNextStep }) => {
  const [summary, setSummary] = useState('');

  const handleNext = () => {
    onNext('professionalSummary', summary);
    onNextStep();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Professional Summary</h2>
      <textarea
        className="w-full p-4 border rounded-lg"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Write your professional summary here..."
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleNext}>
        Save and Next
      </button>
    </div>
  );
};

export default ProfessionalSummary;
