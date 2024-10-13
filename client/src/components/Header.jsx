// src/components/Header.js
import React from 'react';

const Header = ({ deviceID, timestamp }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold italic text-black mb-4 dark:text-white">
        Predictive Maintenance Dashboard
      </h2>
      <header className="bg-blue-600 text-white p-4 mb-8 rounded-lg shadow-lg dark:bg-blue-800">
        <h1 className="text-3xl">Device ID: {deviceID}</h1>
        <p className="text-lg">Last Updated: {new Date(timestamp).toLocaleString()}</p>
      </header>
    </div>
  );
};

export default Header;
