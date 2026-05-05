// Addind and deleting a card to/from a list of cards

import React from "react";
import "./CardsContainer.css";
import WordCard from "../WordCard/WordCard";

export default function CardsContainer({ words, deleteWord }) {
  const cardList = words.map((word) => (
    // This is an array of JSX elements
    <WordCard
      front={word.front}
      back={word.back}
      key={`${word.front}`} // in case cards are added or deleted, make key unqique using just word.front since word.front and word.back are the same element
      deleteWord={deleteWord}
    />
  ));
  return <section className="cards-container">{cardList}</section>;
}
