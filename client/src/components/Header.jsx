import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ deviceID, timestamp }) => {
  return (
    <div className="relative text-center mb-8">
      <h2 className="text-4xl md:text-5xl font-bold italic text-black my-8 dark:text-white">
        Predictive Maintenance Dashboard
      </h2>
      <div className="absolute top-0 right-0 transform -translate-y-2.5">
        <ThemeToggle />
      </div>
      <header className="bg-blue-600 text-white p-4 mt-12 rounded-lg shadow-lg dark:bg-blue-800">
        <h1 className="text-2xl md:text-3xl">Device ID: {deviceID}</h1>
        <p className="text-lg">Last Updated: {new Date(timestamp).toLocaleString()}</p>
      </header>
    </div>
  );
};

export default Header;
