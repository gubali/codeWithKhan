import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
     <Navbar title='Css Utils Dashboard'></Navbar>
    <div className="container">
    <TextForm heading="Enter the form with valida value"></TextForm>
    </div>
      
    </>
  );
}

export default App;
