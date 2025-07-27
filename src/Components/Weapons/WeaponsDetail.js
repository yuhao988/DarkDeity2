import { Link , useParams} from "react-router-dom";
//import charActive from "../Datas/charActive.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Weapons.css";

function WeaponDetail() {
  const imageContextW = require.context(
    "../Datas/Pictures/Weapons", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const imagesW = imageContextW.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContextW(key);
    return acc;
  }, {});

  const imageContextR = require.context(
    "../Datas/Pictures/Runes", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const imagesR = imageContextR.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContextR(key);
    return acc;
  }, {});

  const { name } = useParams();

  return (
    <div>
      <header className="page-header">
        <h1>Characters</h1>
      </header>
      <div className="page-body">
        <img src={imagesW[name]} alt={name} className="character-image" />
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
        
        <Link to="/weapons">Back to Weapons</Link>{" "}
      </div>
    </div>
  );
}

export default WeaponDetail;