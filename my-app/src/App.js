import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  let [mode, setMode] = useState("dark"); //wheather dark mode is enable or not.
  const toggleMode = () => {
    debugger;
    mode === "dark" ? setMode("light") : setMode("dark");
    if(mode==='dark'){
      document.body.style.backgroundColor="red";
    }
    else{
      document.body.style.backgroundColor="green";
    }
  };

  return (
    <>
      <Navbar
        title="Css Utils Dashboard"
        mode={mode}
        toggle={toggleMode}
      ></Navbar>
      <Alert title="Alert" heading="Deleted items!" />
      <div className="container">
        <About />
        <TextForm heading="Enter the form with valida value" mode={mode}></TextForm>
      </div>
    </>
  );
}

export default App;
