import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [definition, setDefinition] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.word.value);
    const word = e.target.word.value.toLowerCase();
    const matchingEntry = dictionary.find(
      (entry) => entry.word.toLowerCase() === word
    );
    if (matchingEntry) {
      setDefinition(matchingEntry.meaning);
    } else {
      setDefinition("");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="word" placeholder="Search for a word..." />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      {definition ? (
        <p>{definition}</p>
      ) : (
        <p>Word not found in the dictionary.</p>
      )}
    </div>
  );
}

export default App;