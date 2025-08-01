import { Link, useParams } from "react-router-dom";
import weaponInfo from "./Weapons.json";
import React, { useState } from "react";
import "../../App.css";
import "./Weapons.css";
import { WeaponWriteUps, outputEffect,outputStat } from "./WeaponMisc";

function WeaponDetail() {
  const [attachedRunes, setAttachedRunes] = useState({});

  const toggleRune = (runeName) => {
    setAttachedRunes((prev) => {
      // If the rune is already selected, remove it
      if (prev[runeName]) {
        const newRunes = { ...prev };
        delete newRunes[runeName];
        return newRunes;
      }
      // Otherwise, check if we can add it (max 2)
      else {
        const currentCount = Object.values(prev).filter(Boolean).length;
        if (currentCount < 2) {
          return {
            ...prev,
            [runeName]: true,
          };
        }
        // If already at max, return unchanged
        return prev;
      }
    });
  };
  const resetRunes = () => {
    setAttachedRunes({});
  };

  const imageContextW = require.context(
    "../../../public/Images/Pictures/Weapons", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const imagesW = imageContextW.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContextW(key);
    return acc;
  }, {});

  const imageContextR = require.context(
    "../../../public/Images/Pictures/Runes", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const imagesR = imageContextR.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContextR(key);
    return acc;
  }, {});

  const { name } = useParams();
  const weaponData = Object.values(weaponInfo).find(
    (weapon) => weapon.Name.replace(/\s+/g, "").toLowerCase() === name
  );
  const weaponName = weaponData.Name;

  const rows = [];
  for (let i = 0; i < weaponData.Runes.length; i += 5) {
    rows.push(weaponData.Runes.slice(i, i + 5));
  }

  return (
    <div>
      <header className="page-header">
        <h1>{weaponName}</h1>
      </header>
      <div className="page-body">
        <img src={imagesW[name]} alt={name} className="big-image" />
        <div style={{ width: "75vw" }}>
          <h3>Obtainable:</h3>
          <div>{weaponData.Obtain}</div>
        </div>
        <div>
          <h3>Weapon Stats:</h3>
          <table className="detail-table">
            <thead>
              <tr>
                <th>Power</th>
                <th>Critical</th>
                <th>Accuracy</th>
                <th>Weight</th>
                <th style={{ width: "40vw" }}>Additional Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{outputStat(attachedRunes,weaponData)[0]}</td>
                <td>{outputStat(attachedRunes,weaponData)[1]}</td>
                <td>{outputStat(attachedRunes,weaponData)[2]}</td>
                <td>{outputStat(attachedRunes,weaponData)[3]}</td>
                <td style={{ width: "40vw" }}>
                  {outputEffect(Object.keys(attachedRunes)[0])}
                  {outputEffect(Object.keys(attachedRunes)[0]) ? <br /> : ""}
                  {outputEffect(Object.keys(attachedRunes)[1])}
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <div>
            <h3>Avavilable Rune effects:</h3>
            <table className="rune-table">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((rune, colIndex) => (
                      <td
                        key={`rune-${rowIndex}-${colIndex}`}
                        style={{
                          width: "15vw",
                          backgroundColor: attachedRunes[rune]
                            ? "#e6f2ff"
                            : "transparent",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        <div className="rune-item">
                          <Link to={`/weapons/runes/${rune.toLowerCase()}`}>
                            <img
                              src={
                                imagesR[rune.replace(/\s+/g, "").toLowerCase()]
                              }
                              alt={rune}
                              className="weapon-image"
                            />
                            {rune}
                          </Link>
                          <button
                            onClick={() => toggleRune(rune)}
                            style={{
                              marginTop: "8px",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              backgroundColor: attachedRunes[rune]
                                ? "#ff6b6b"
                                : "#4caf50",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              alignSelf: "flex-end", // Flush to right
                              marginLeft: "auto", // Push to right
                              marginRight: "auto", // Center horizontally
                              display: "block",
                            }}
                          >
                            {attachedRunes[rune] ? "Remove" : "Attach"}
                          </button>
                        </div>
                      </td>
                    ))}

                    {row.length < 5 &&
                      Array(5 - row.length)
                        .fill()
                        .map((_, i) => (
                          <td key={`empty-${rowIndex}-${i}`}></td>
                        ))}
                  </tr>
                ))}
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    <button
                      style={{
                        width: "200px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                      onClick={() => resetRunes()}
                    >
                      Reset
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h3>Tips:</h3>
        <div style={{width:"75vw"}}>{WeaponWriteUps(weaponName, "detail")}</div>
        <Link to="/weapons" className="home-link">
          Back to Weapons
        </Link>{" "}
      </div>
    </div>
  );
}

export default WeaponDetail;
