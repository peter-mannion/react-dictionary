// Using props

import React from "react";

export default function WordCard(props) {
  return (
    <div className="word-card">
      <p>English: {props.en}</p>
      <p>German: {props.de}</p>
    </div>
  );
}
