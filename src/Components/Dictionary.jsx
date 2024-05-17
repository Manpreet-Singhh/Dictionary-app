import React, { useState } from 'react';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function Dictionary() {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setResult("");
      return;
    }

    const found = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word"
          aria-label="Search term"
        />
        <button type="button" onClick={handleSearch}>Search</button>
        <p><b>Definition:</b></p>
      </div>
      <div className="result">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default Dictionary;
