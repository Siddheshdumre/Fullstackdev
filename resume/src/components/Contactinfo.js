import React, { useState } from 'react';

const ContactInfo = ({ onNext, onNextStep }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    onNext('email', email);
    onNext('phone', phone);
    onNextStep();
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Contact Information</h2>
      <input
        type="email"
        className="w-full p-4 border rounded-lg mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email..."
      />
      <input
        type="tel"
        className="w-full p-4 border rounded-lg mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number..."
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleNext}>
        Save and Complete
      </button>
    </div>
  );
};

export default ContactInfo;
