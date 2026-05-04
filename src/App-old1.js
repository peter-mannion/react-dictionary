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
    { front: "seven", back: "sieben" },
  ]);

  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <main className="cards-container">
        <WordCard front={words[0].front} back={words[0].back} />
        <WordCard front={words[1].front} back={words[1].back} />
        <WordCard front={words[2].front} back={words[2].back} />
        <WordCard front={words[3].front} back={words[3].back} />
        <WordCard front={words[4].front} back={words[4].back} />
        <WordCard front={words[5].front} back={words[5].back} />
      </main>
    </div>
  );
}

export default App;
