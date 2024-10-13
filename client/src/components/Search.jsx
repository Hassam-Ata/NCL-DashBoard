// src/components/Search.js
import React, { useState } from 'react';

const Search = ({ onSearch, searchKey }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-lg w-full max-w-md"
        placeholder={`Search by ${searchKey}`}
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
