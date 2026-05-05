// Addind and deleting a card to/from a list of cards

import React, { useRef } from "react";
import "./WordForm.css";

const WordForm = ({ addWord }) => {
  const enRef = useRef(null);
  const deRef = useRef(null);

  const hanldeSubmit = (e) => {
    e.preventDefault();

    const enField = enRef.current;
    const deField = deRef.current;

    //const enField = document.querySelector("[name=en]");
    //const deField = document.querySelector("[name=de]");

    const enValue = enField.value;
    const deValue = deField.value;

    enField.value = "";
    deField.value = "";

    addWord(enValue, deValue);
  };

  return (
    <section className="card-form">
      <h2>New Card</h2>
      <form action="#" method="GET" onSubmit={hanldeSubmit}>
        <div className="form-row">
          <label>
            English:
            <input
              type="text"
              name="en"
              placeholder="English"
              ref={enRef}
            ></input>
          </label>
        </div>
        <div className="form-row">
          <label>
            German:
            <input
              type="text"
              name="de"
              placeholder="German"
              ref={deRef}
            ></input>
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Add Word</button>
        </div>
      </form>
    </section>
  );
};

export default WordForm;
