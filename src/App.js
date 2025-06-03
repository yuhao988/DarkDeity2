import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component
import "./App.css";
import Error from "./Error";
import Home from "./Home";

function App() {
  // Set the app element when the component mounts
  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with your actual root element id
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
