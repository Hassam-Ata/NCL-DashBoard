import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  useEffect(() => {
    // Check if dark mode is enabled based on the current class
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeEnabled);
  }, []);

  return (
    <div className="flex justify-end p-2">
    <button 
      onClick={toggleTheme} 
      className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
  );
};

export default ThemeToggle;
