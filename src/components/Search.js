// src/components/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    const response = await fetch('https://travelgenie-gpt-backend.herokuapp.com/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.response);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your search prompt"
      />
      <button onClick={handleSearch}>Search</button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Search;
