// Adding and deleting a card to/from a list of cards
// Add useEffect to load words.json file

import "./App.css";
import React, { useState, useEffect } from "react";
import WordForm from "./components/WordForm/WordForm";
import CardsContainer from "./components/CardsContainer/CardsContainer";

function App() {
  const [words, setWords] = useState([]);

  useEffect(
    () => {
      fetch("/constants/words.json")
        .then((x) => x.json())
        .then((data) => setWords(data));

      console.log("App useEffect");
    },
    [], // Second argument of UseEffect(). This is a dependency array and in this case the empty array only executes once when "words.json" loads.
  );

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  };

  const deleteWord = (front) => {
    const newWords = words.filter((word) => word.front !== front);
    setWords(newWords);
  };

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main className="cards-container">
        <WordForm addWord={addWord} />
        <CardsContainer words={words} deleteWord={deleteWord} />
      </main>
    </div>
  );
}

export default App;
