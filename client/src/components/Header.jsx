// src/components/Header.js
import React from 'react';

const Header = ({ deviceID, timestamp }) => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center rounded-lg">
      <h1 className="text-2xl">Device ID: {deviceID}</h1>
      <p className="text-sm">Last Updated: {new Date(timestamp).toLocaleString()}</p>
    </header>
  );
};

export default Header;
