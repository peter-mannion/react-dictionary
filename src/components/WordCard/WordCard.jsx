// Add onClick event handler

import React from "react";
import "./WordCard.css";

export default function WordCard({ front, back }) {
  const [isFront, setFront] = React.useState(true); // set initial card state

  const cardContent = isFront ? (
    <div className="card-front">English: {front}</div>
  ) : (
    <div className="card-back">German: {back}</div>
  );

  // arrow function
  const handleClick = () => {
    // Event.preventDefault(); // in case of form fields, this fucntion prevents form submission prior to user completing the form
    setFront(!isFront);
  };

  return (
    <div className="word-card" onClick={handleClick}>
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
