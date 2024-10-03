import React from 'react';

const Resume = ({ resumeData }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">{resumeData.professionalSummary.split('\n')[0]}</h1>
        <p className="text-lg text-gray-600">{resumeData.professionalSummary.split('\n').slice(1).join(' ')}</p>
      </div>

      <hr className="my-6" />

      {/* Contact Info */}
      <div className="text-center mb-6">
        <p className="text-lg text-gray-800 font-semibold">Contact Information</p>
        <p>{resumeData.email}</p>
        <p>{resumeData.phone}</p>
      </div>

      <hr className="my-6" />

      {/* Education Section */}
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <p className="mb-2">{resumeData.education}</p>

      <hr className="my-6" />

      {/* Skills Section */}
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <p className="mb-2">{resumeData.skills}</p>

      <hr className="my-6" />

      {/* Achievements Section */}
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <p className="mb-2">{resumeData.achievements}</p>

      <hr className="my-6" />

      {/* Experience Section */}
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <p className="mb-2">{resumeData.experience}</p>

      <hr className="my-6" />

      {/* Internships Section */}
      <h2 className="text-2xl font-bold mb-4">Internships</h2>
      <p className="mb-2">{resumeData.internships}</p>

      <hr className="my-6" />

      {/* Projects Section */}
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="mb-2">{resumeData.projects}</p>
    </div>
  );
};

export default Resume;
