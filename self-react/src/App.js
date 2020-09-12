import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Counter from "./components/Counter";
// import Navbar from "./components/navbar";
// import PopUpOpener from "./components/PopUpOpener";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
