// src/components/TemperatureCard.js
import React from 'react';

const TemperatureCard = ({ temperature }) => {
  return (
    <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Temperature</h2>
      <p className="text-4xl">{temperature}°C</p>
    </div>
  );
};

export default TemperatureCard;
