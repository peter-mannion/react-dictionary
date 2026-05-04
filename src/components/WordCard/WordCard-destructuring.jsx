// Using destructuring to substitute for props

import React from "react";
import "./WordCard.css";

export default function WordCard({ front, back }) {
  return (
    <div className="word-card">
      <div className="card-front">English: {front}</div>
      <div className="card-back">German: {back}</div>
    </div>
  );
}
