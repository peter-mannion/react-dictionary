// Use map to define list of WordCards

import "./App.css";
import WordCard from "./components/WordCard/WordCard";
import React from "react";

function App() {
  const [words, setWords] = React.useState([
    { front: "translation", back: "ubersetzung" },
    { front: "egg", back: "Ei" },
    { front: "taxi", back: "Taxi" },
    { front: "paper", back: "Papier" },
    { front: "square", back: "Platz" },
  ]);

  const cardList = words.map((word) => (
    // This is an array of JSX elements
    <WordCard
      front={word.front}
      back={word.back}
      key={`${word.front}`} // in case cards are added or deleted, make key unqique using just word.front since word.front and word.back are the same element
    />
  ));

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main className="cards-container">{cardList}</main>
    </div>
  );
}

export default App;
