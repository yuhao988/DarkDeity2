import { Link, useParams } from "react-router-dom";
//import { useState } from "react";
import mortalDetail from "./Growth/mortalGrowth.json";
import heroicDetail from "./Growth/heroicGrowth.json";
import deityDetail from "./Growth/deityGrowth.json";
import demonicDetail from "./Growth/demonicGrowth.json";
import "../../App.css";
import "./Enemy.css";

function EneClassDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const class1 = Object.values(mortalDetail).find(
    (ene) => ene.Class.toLowerCase() === name
  );

  if (!class1) return <div>Character not found</div>;

  const imageContext = require.context(
    "../../../public/Images/Pictures/Enemies", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name1 = key.replace("./", "").replace(/\..+$/, "");
    acc[name1] = imageContext(key);
    return acc;
  }, {});

  return (
    <div>
      <header className="page-header">
        <h1>{class1.Class}</h1>
      </header>
      <div className="page-body">
        <div className="class-detail">
          <img
            src={images[class1.Class]}
            alt={name}
            className="character-image"
          />

          <h3>Base stats:</h3>

          <h3>Growth:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                <td>Difficulty</td>
                <td>HP</td>
                <td>Pwr</td>
                <td>TSpd</td>
                <td>Def</td>
                <td>Frt</td>
                <td>Ddg</td>
                <td>Acc</td>
                <td>CAvo</td>
              </tr>
            </thead>
            <tbody>
              {Object.values(mortalDetail)
                .filter((enemy) => enemy.Class === class1.Class)
                .map((enemy, index) => (
                  <tr>
                    <td>Mortal</td>
                    <td>{enemy.HP}</td>
                    <td>{enemy.Pwr}</td>
                    <td>{enemy.Spd}</td>
                    <td>{enemy.Def}</td>
                    <td>{enemy.For}</td>
                    <td>{enemy.Ddg}</td>
                    <td>{enemy.Acc}</td>
                    <td>{enemy.CAvo}</td>
                  </tr>
                ))}
              {Object.values(heroicDetail)
                .filter((enemy) => enemy.Class === class1.Class)
                .map((enemy, index) => (
                  <tr>
                    <td>Heroic</td>
                    <td>{enemy.HP}</td>
                    <td>{enemy.Pwr}</td>
                    <td>{enemy.Spd}</td>
                    <td>{enemy.Def}</td>
                    <td>{enemy.For}</td>
                    <td>{enemy.Ddg}</td>
                    <td>{enemy.Acc}</td>
                    <td>{enemy.CAvo}</td>
                  </tr>
                ))}
              {Object.values(deityDetail)
                .filter((enemy) => enemy.Class === class1.Class)
                .map((enemy, index) => (
                  <tr>
                    <td>Deity</td>
                    <td>{enemy.HP}</td>
                    <td>{enemy.Pwr}</td>
                    <td>{enemy.Spd}</td>
                    <td>{enemy.Def}</td>
                    <td>{enemy.For}</td>
                    <td>{enemy.Ddg}</td>
                    <td>{enemy.Acc}</td>
                    <td>{enemy.CAvo}</td>
                  </tr>
                ))}
              {Object.values(demonicDetail)
                .filter((enemy) => enemy.Class === class1.Class)
                .map((enemy, index) => (
                  <tr>
                    <td>Demonic</td>
                    <td>{enemy.HP}</td>
                    <td>{enemy.Pwr}</td>
                    <td>{enemy.Spd}</td>
                    <td>{enemy.Def}</td>
                    <td>{enemy.For}</td>
                    <td>{enemy.Ddg}</td>
                    <td>{enemy.Acc}</td>
                    <td>{enemy.CAvo}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <div>{charIntro(nameNoMark, "base")}</div> */}
        </div>
        <Link to={`${process.env.PUBLIC_URL}/enemies`} className="home-link">
          Back
        </Link>{" "}
      </div>
    </div>
  );
}

export default EneClassDetail;
