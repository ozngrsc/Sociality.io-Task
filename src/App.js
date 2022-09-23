import React from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
