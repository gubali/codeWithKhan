import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
// https://convertcase.net/big-text-generator/ : Make like this cssUtils
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = (e) => {
    let lower = text.toLowerCase();
    setText(lower);
  };
  const clearTextBox = (e) => {
    setText("");
  };
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  // copy clipboard by id
  const handleCopyClipBoard = () => {
    let text = document.getElementById("txtArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  // speech text logic
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };
  return (
    <div style={{color: props.mode === "dark" ? "#fff" : "#000" }}>
      <h2 className="my-4">{props.heading}</h2>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-secondary mx-1"
          onClick={clearTextBox}
        >
          <FaRegTrashAlt />
          <p>Clear</p>
        </button>
        <button type="button" className="btn btn-secondary mx-1">
          Middle
        </button>
        <button type="button" className="btn btn-secondary mx-1">
          Right
        </button>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="txtArea"
          rows="3"
          value={text}
          style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "#fff" : "green" }}
          onChange={handleOnChnage}
        ></textarea>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleUpperClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-success my-2 mx-2"
          onClick={handleLowerClick}
        >
          Convert to lowerCase
        </button>
        <button
          className="btn btn-success my-2 mx-2"
          onClick={handleCopyClipBoard}
        >
          Copy Clip board
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
        <br />
        <strong>You text summary:</strong>
        <small>
          {" "}
          {text.split(" ").length} word and {text.length} characrer
        </small>{" "}
        <br />
        <small>Time to read: {0.008 * text.split("").length}</small>
        <h4>Preview:</h4>
        
        <p>{text.length > 0 ? text : 'Enter you text!'}</p>
      </div>
    </div>
  );
}
