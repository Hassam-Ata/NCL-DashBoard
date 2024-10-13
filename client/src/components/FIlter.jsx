// src/components/Filter.js
import React from 'react';

const Filter = ({ options, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    onFilterChange(selectedOption);
  };

  return (
    <div className="w-full md:w-1/3">
      <label className="block text-gray-700 dark:text-gray-300 mb-2">Filter By:</label>
      <select
        onChange={handleFilterChange}
        className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 dark:focus:ring-indigo-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
