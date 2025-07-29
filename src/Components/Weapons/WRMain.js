import { Link } from "react-router-dom";
import weaponInfo from "./Weapons.json";
import runeInfo from "./Runes/Runes.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Weapons.css";

function WeaponMain() {
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

  const rows = [];
  for (let i = 0; i < runeInfo.length; i += 6) {
    rows.push(runeInfo.slice(i, i + 6));
  }

  return (
    <div>
      <header className="page-header">
        <h1>Weapons and Runes</h1>
      </header>
      <div className="page-body">
        <h2>Weapons</h2>
        <div>
          <p>
            Weapons are equipment used by units. Each unit can only equip one
            weapon, exchangable before battle but not during. There are 6
            different types of weapon in game, the type of weapon equippable by
            a unit is decided by the unit's class.
          </p>
        </div>
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
                      .filter((weapon) => weapon.Type === "Axe")
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
                      .filter((weapon) => weapon.Type === "Bow")
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
                      .filter((weapon) => weapon.Type === "Dagger")
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
                      .filter((weapon) => weapon.Type === "Focus")
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
                      .filter((weapon) => weapon.Type === "Relic")
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
                      .filter((weapon) => weapon.Type === "Sword")
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
        <h2>Runes</h2>
        <div>
          <p>
            Runes are upgrades that can be applied to a weapon, they follow the
            same types as weapons and can only be attached to a weapon of the
            same type. However, when applied to a weapon, the effect it can
            provide depends solely on what weapon it is, every weapon has a
            unique set of rune effects that can be applied. Runes that are
            applied can be detached with a cost of 300 gold.
          </p>
        </div>
        <table className="rune-table">
          <thead>
            <tr>
              <td colSpan={6}>Runes</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((rune, colIndex) => (
                  <td key={`rune-${rowIndex}-${colIndex}`}>
                    {/* Customize this to display your rune data */}
                    <div className="rune-item">
                      <Link to={`/weapons/runes/${rune.Rune.replace(/\s+/g, "").toLowerCase()}`}>
                        <img
                          src={
                            imagesR[rune.Rune.replace(/\s+/g, "").toLowerCase()]
                          }
                          alt={rune.Rune}
                          className="weapon-image"
                        />
                        {rune.Rune}
                      </Link>

                      {/* Add more rune properties as needed */}
                    </div>
                  </td>
                ))}
                {/* Fill empty cells if last row has fewer than 6 items */}
                {row.length < 6 &&
                  Array(6 - row.length)
                    .fill()
                    .map((_, i) => <td key={`empty-${rowIndex}-${i}`}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default WeaponMain;
