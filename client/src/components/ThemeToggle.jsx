import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex justify-end p-4">
      <button 
        onClick={toggleTheme} 
        className={`flex items-center justify-center p-2 rounded-md transition duration-300 
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
          hover:opacity-80`}
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? '🔆 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
