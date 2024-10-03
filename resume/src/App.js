import React, { useState } from 'react';
import ProfessionalSummary from './components/ProfessionalSummary';
import Education from './components/Education';
import SkillsAchievements from './components/SkillsAchievements';
import ExperienceInternships from './components/ExperienceInternships';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactInfo from './components/Contactinfo';
function App() {
  const [resumeData, setResumeData] = useState({
    professionalSummary: '',
    education: '',
    skills: '',
    achievements: '',
    experience: '',
    internships: '',
    projects: '',
    email: '',
    phone: ''
  });

  const [step, setStep] = useState(0);

  const handleDataChange = (section, data) => {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: data,
    }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleComplete = () => {
    setStep(6);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {step === 6 ? (
        <Resume resumeData={resumeData} />
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6">Build Your Resume</h1>
          {step === 0 && <ProfessionalSummary onNext={handleDataChange} onNextStep={handleNextStep} />}
          {step === 1 && <Education onNext={handleDataChange} onNextStep={handleNextStep} />}
          {step === 2 && <SkillsAchievements onNext={handleDataChange} onNextStep={handleNextStep} />}
          {step === 3 && <ExperienceInternships onNext={handleDataChange} onNextStep={handleNextStep} />}
          {step === 4 && <Projects onNext={handleDataChange} onNextStep={handleComplete} />}
          {step === 5 && <ContactInfo onNext={handleDataChange} onNextStep={handleComplete} />} {/* New Step */}
        </div>
      )}
    </div>
  );
}

export default App;
