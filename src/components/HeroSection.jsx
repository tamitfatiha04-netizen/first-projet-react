import React, { useState, useEffect } from 'react';

const HeroSection = ({ title, description }) => {
  const [buttonText, setButtonText] = useState('Get Started');

  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  return (
    <section className="hero bg-blue-500 text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-6">{description}</p>
      <button
        className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-100"
        onClick={() => setButtonText('Clicked!')}
      >
        {buttonText}
      </button>
    </section>
  );
};

export default HeroSection;