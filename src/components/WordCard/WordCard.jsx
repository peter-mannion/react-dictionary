// Addind and deleting a card to/from a list of cards

import React from "react";
import "./WordCard.css";

export default function WordCard({ front, back, deleteWord }) {
  const [isFront, setFront] = React.useState(true); // set initial card state

  const cardContent = isFront ? (
    <div className="card-front">English: {front}</div>
  ) : (
    <div className="card-back">German: {back}</div>
  );

  // arrow function for flipping cards
  const handleFlip = (e) => {
    e.preventDefault(); // in case of form fields, this function prevents form submission prior to user completing the form
    setFront(!isFront);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteWord(front);
  };

  return (
    <div className="word-card" onClick={handleFlip}>
      <span className="delete-card" onClick={handleDelete}>
        X
      </span>
      {cardContent}
    </div>
  );

  /* Alternative to arrow function - function with keyword
   function handleClickAlternative() {
      setFront(!isFront);
  }

  return (
  <div className="word-card" onClick={handleClickAlternative}>
  {cardContent}
  </div>
  ); */
}
