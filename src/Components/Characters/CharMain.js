import { Link } from "react-router-dom";
import charActive from "../Datas/charActive.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Char.css";

function CharMain() {
  const imageContext = require.context(
    "./Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContext(key);
    return acc;
  }, {});

  return (
    <div>
      <header className="page-header">
        <h1>Characters</h1>
      </header>
      <div className="page-body">
        <div className="character-list">
          {Object.values(charActive).map((character, index) => (
            <div key={index} className="character-card">
              <img
                src={images[character.Name.toLowerCase()]}
                alt={character.Name}
                className="character-image"
              />
              <Link to={`/characters/${character.Name.toLowerCase()}`}>
                <h3>{character.Name}</h3>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default CharMain;
