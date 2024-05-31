import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  let [mode, setMode] = useState("dark"); //wheather dark mode is enable or not.
  let [alert, setAlertState] = useState(null);
  const getAlert = (msg, type) => {
    setAlertState({
      msg: msg,
      type: type,
    });
  };
  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
    if (mode === "dark") {
      document.body.style.backgroundColor = "red";
      getAlert('Dark mode enable!', "success")
    } else {
      document.body.style.backgroundColor = "green";
      getAlert('light mode enable', "danger")
    }
  };

  return (
    <>
      <Navbar
        title="Css Utils Dashboard"
        mode={mode}
        toggle={toggleMode}
      ></Navbar>
      <Alert
        heading="Deleted items!"
        events={getAlert}
        alert={alert}
      />
      <div className="container">
        <About />
        <TextForm
          heading="Enter the form with valida value"
          mode={mode}
          getAlertBox={getAlert}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
