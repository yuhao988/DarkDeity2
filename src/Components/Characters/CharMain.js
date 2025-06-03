import { Link } from "react-router-dom";
import charActive from "../Datas/charActive.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Char.css";

function CharMain() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
      </header>
      <body className="App-body">
        <div className="character-list">
          {Object.values(charActive).map((character, index) => (
            <div key={index} className="character-card">
              <Link to={`/characters/${character.Name.toLowerCase()}`}>
                <h3>{character.Name}</h3>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/">Back to Home</Link>{" "}
      </body>
    </div>
  );
}

export default CharMain;
