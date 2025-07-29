import { Link, useParams } from "react-router-dom";
//import { useState } from "react";
import runeInfo from "./Runes.json";
import "../../../App.css";
import weaponInfo from "../Weapons.json";
import {RuneWriteUps} from "../WeaponMisc";

function RuneDetail() {
  const { name } = useParams();
  
  const rune1 = Object.values(runeInfo).find(
    (rune) => rune.Rune.toLowerCase() === name
  );

  const imageContext = require.context(
    "../../Datas/Pictures/Runes", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContext(key);
    return acc;
  }, {});

  const imageContextW = require.context(
    "../../Datas/Pictures/Weapons", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const imagesW = imageContextW.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContextW(key);
    return acc;
  }, {});

  return (
    <div>
      <header className="page-header">
        <h1>{rune1.Rune} Rune</h1>
      </header>
      <div className="page-body">
        <img
          src={images[rune1.Rune.toLowerCase()]}
          alt={rune1.Rune}
          className="rune-image"
          style={{ width: "100px", height: "110px" }}
        />

        <h3>Effect:</h3>
        {rune1.Effect}
        <br />
        <h3>Details:</h3>
        {RuneWriteUps(name, "detail")}
        <h3>Available for:</h3>
        <div className="weapon-list">
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Axe</td>
                <td>Bow</td>
                <td>Dagger</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Axe" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((axe, index) => (
                        <li key={index}>
                          <Link
                            to={`/weapons/${axe.Name.replace(
                              /\s+/g,
                              ""
                            ).toLowerCase()}`}
                          >
                            <img
                              src={
                                imagesW[
                                  axe.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={axe.Name}
                              className="weapon-image"
                            />
                            {axe.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Bow" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((bow, index) => (
                        <li key={index}>
                          <Link
                            to={`/weapons/${bow.Name.replace(
                              /\s+/g,
                              ""
                            ).toLowerCase()}`}
                          >
                            <img
                              src={
                                imagesW[
                                  bow.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={bow.Name}
                              className="weapon-image"
                            />
                            {bow.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Dagger" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((dagger, index) => (
                        <li key={index}>
                          <Link
                            to={`/weapons/${dagger.Name.replace(
                              /\s+/g,
                              ""
                            ).toLowerCase()}`}
                          >
                            <img
                              src={
                                imagesW[
                                  dagger.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={dagger.Name}
                              className="weapon-image"
                            />
                            {dagger.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Focus</td>
                <td>Relic</td>
                <td>Sword</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Focus" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((focus, index) => (
                        <li key={index}>
                          <Link
                            to={`/weapons/${focus.Name.replace(
                              /\s+/g,
                              ""
                            ).toLowerCase()}`}
                          >
                            <img
                              src={
                                imagesW[
                                  focus.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={focus.Name}
                              className="weapon-image"
                            />
                            {focus.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Relic" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((relic, index) => (
                        <li key={index}>
                          <Link
                            to={`/weapons/${relic.Name.replace(
                              /\s+/g,
                              ""
                            ).toLowerCase()}`}
                          >
                            <img
                              src={
                                imagesW[
                                  relic.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={relic.Name}
                              className="weapon-image"
                            />
                            {relic.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter(
                        (weapon) =>
                          weapon.Type === "Sword" &&
                          weapon.Runes.includes(rune1.Rune)
                      )
                      .map((sword, index) => (
                        <li key={index}>
                          <Link to={`/weapons/${sword.Name.toLowerCase()}`}>
                            <img
                              src={
                                imagesW[
                                  sword.Name.replace(/\s+/g, "").toLowerCase()
                                ]
                              }
                              alt={sword.Name}
                              className="weapon-image"
                            />
                            {sword.Name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/weapons" className="home-link">
          Back
        </Link>
      </div>
    </div>
  );
}

export default RuneDetail;
