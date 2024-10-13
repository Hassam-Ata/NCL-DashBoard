// src/components/VibrationCard.js
import React from 'react';

const VibrationCard = ({ axis, value }) => {
  return (
    <div className="bg-green-500 text-white p-6 rounded-lg shadow-md dark:bg-green-700">
      <h2 className="text-xl font-bold">Vibration ({axis})</h2>
      <p className="text-4xl">{value}</p>
    </div>
  );
};

export default VibrationCard;
