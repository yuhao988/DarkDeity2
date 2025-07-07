import { Link } from "react-router-dom";
import weaponInfo from "./Weapons.json";
//import runeInfo from "./Runes.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Weapons.json";

function WeaponMain() {
  const imageContext = require.context(
    "../Datas/Pictures/Weapons", // Folder path
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
        <h1>Weapons</h1>
      </header>
      <div className="page-body">
        <p>Weapons write-up placeholder</p>
        <div className="weapon-list">
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Axe</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Axe")
                      .map((axe, index) => (
                        <li key={index}>{axe.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Bow</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Bow")
                      .map((bow, index) => (
                        <li key={index}>{bow.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Dagger</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Dagger")
                      .map((dagger, index) => (
                        <li key={index}>{dagger.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Focus</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Focus")
                      .map((focus, index) => (
                        <li key={index}>{focus.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Relic</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Relic")
                      .map((relic, index) => (
                        <li key={index}>{relic.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="weapon-table">
            <thead>
              <tr>
                <td>Sword</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {Object.values(weaponInfo)
                      .filter((weapon) => weapon.Type === "Sword")
                      .map((sword, index) => (
                        <li key={index}>{sword.Name}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default WeaponMain;
