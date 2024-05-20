import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here!");
  const handleUpperClick = (e) => {
   let newText = text.toUpperCase()
    setText(newText);
  };

  const handleOnChnage = (event) => {

    setText(event.target.value);
  };
  return (
    <>
      <h2 className="my-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="txtArea"
          rows="3"
          value={text}
          onChange={handleOnChnage}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpperClick}>
          Convert to UpperCase
        </button><br/>
        <strong>You text summary:</strong>
        <small> {text.split(" ").length} word and {text.length} characrer</small> <br />
        <small>Time to read: {0.008 * text.split('').length}</small>
      </div>
    </>
  );
}
