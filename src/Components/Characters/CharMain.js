import { Link } from "react-router-dom";
import charActive from "../Datas/charActive.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Char.css";

function CharMain() {
  const imageContext = require.context(
    "../../../public/Images/Characters/Pictures", // Folder path
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
        <div>
          <p style={{ width: "75vw" }}>
            There are a grand total of 21 recruitable playable characters in
            Dark Deity 2. They are recruited at various point in the story. All
            characters come with their own innate growth rates, as well as an
            unique personal passive and skill. <br />Each character can later obtain
            up to 2 more passives and 4 active skills from their classes, giving
            all of them a grand total of 3 passives and 5 active skills. Players
            can mix and match these skills for optimal synergy and make the most
            use of the character's stats in their gameplay.
          </p>
        </div>
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
        <Link to="/" className="home-link">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default CharMain;
