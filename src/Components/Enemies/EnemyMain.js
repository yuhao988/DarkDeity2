import { Link } from "react-router-dom";
import enemyActive from "../Datas/eneDeity.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Enemy.css";

function EnemyMain() {
  const imageContext = require.context(
    "../../../public/Images/Pictures/Enemies", // Folder path
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
        <h1>Enemy Classes</h1>
      </header>
      <div className="page-body">
        <div>
          <p style={{ width: "75vw" }}>
            There are a grand total of 21 generic enemy types, 5 of them are monsters
            and other 16 humans. Monster enemies can only be found in Story or
            Challenge missions, while human types can also be found in Training
            skirmishes.
          </p>
        </div>
        <div className="character-list">
          {Object.values(enemyActive)
            .filter((enemy) => enemy.Boss === "Boss")
            .map((enemy, index) => (
              <div key={index} className="character-card">
                <img
                  src={images[enemy.Class]}
                  alt={enemy.Class}
                  className="character-image"
                />
                <Link to={`${enemy.Class.toLowerCase()}`}>
                  <h3>{enemy.Class}</h3>
                </Link>
              </div>
            ))}
          <div key="17" className="character-card">
            <img src={images["Bear"]} alt="Bear" className="character-image" />
            <Link to={`bear`}>
              <h3>Bear</h3>
            </Link>
          </div>
          <div key="18" className="character-card">
            <img src={images["Wolf"]} alt="Wolf" className="character-image" />
            <Link to={`wolf`}>
              <h3>Wolf</h3>
            </Link>
          </div>
          <div key="19" className="character-card">
            <img
              src={images["Treant"]}
              alt="Treant"
              className="character-image"
            />
            <Link to={`treant`}>
              <h3>Treant</h3>
            </Link>
          </div>
          <div key="20" className="character-card">
            <img
              src={images["OakTreant"]}
              alt="Oak Treant"
              className="character-image"
            />
            <Link to={`oaktreant`}>
              <h3>Oak Treant</h3>
            </Link>
          </div>
          <div key="21" className="character-card">
            <img
              src={images["Hellhound"]}
              alt="Hellhound"
              className="character-image"
            />
            <Link to={`hellhound`}>
              <h3>Hellhound</h3>
            </Link>
          </div>
        </div>
        <Link to={`${process.env.PUBLIC_URL}`} className="home-link">
          Back to Home
        </Link>{" "}
      </div>
    </div>
  );
}

export default EnemyMain;
