// src/components/TemperatureCard.js
import React from 'react';

const TemperatureCard = ({ temperature }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-red-500 text-white p-6 rounded-lg shadow-md dark:bg-red-700 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold">Temperature</h2>
      <p className="text-8xl font-bold tracking-wider">{temperature}°C</p>
      
      {/* Downward Arrow */}
      <div className="mt-6 cursor-pointer animate-bounce" onClick={handleScroll}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"  
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default TemperatureCard;
