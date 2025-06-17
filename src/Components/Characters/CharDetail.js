import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import charActive from "../Datas/charActive.json";
import charGrowth from "../Datas/charStatPass.json";
import charBase from "../Datas/charBase.json";
import {
  charIntro,
  charSkillDes,
  charSkillCost,
  charSkillRng,
} from "./CharMisc";
import classGrowth from "../Datas/classStats.json";
import "../../App.css";
import "./Char.css";

function CharDetail() {
  const [activeUpgrades, setActiveUpgrades] = useState({
    upgrade1: false,
    upgrade2: false,
    upgrade3: false,
    upgrade4: false,
  });

  const toggleUpgrade = (upgradeKey) => {
    let cnt = 0;
    for (const key in activeUpgrades) {
      if (key !== upgradeKey && activeUpgrades[key] === true) {
        cnt++;
      }
    }
    if (cnt < 2) {
      setActiveUpgrades((prev) => ({
        ...prev,
        [upgradeKey]: !prev[upgradeKey],
      }));
    }
  };

  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const character1 = Object.values(charActive).find(
    (char) => char.Name.toLowerCase() === name
  );
  const nameNoMark = character1.Name.replace(/'/g, "");

  const character2 = Object.values(charGrowth).find(
    (char) => char.Name.toLowerCase() === name
  );

  if (!character2) console.log("charcater2 not found");
  if (!character1) return <div>Character not found</div>;

  let baseValue = character1.skillBase;
  let scaleValue = character1.skillScale;
  const line = character2.classLine;
  const growths = ["hp", "mgt", "spd", "dex", "def", "frt", "mas", "lck"].map(
    (stat) => character2[stat]
  );

  const imageContext = require.context(
    "./Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name1 = key.replace("./", "").replace(/\..+$/, "");
    acc[name1] = imageContext(key);
    return acc;
  }, {});

  const getSkillColor = (skillType) => {
    const colorMap = {
      Red: "rgb(160, 3, 3)",
      Blue: "rgb(36, 3, 156)",
      Green: "rgb(3, 128, 50)",
      default: "#f5f6fa", // Fallback
    };
    return colorMap[skillType] || colorMap.default;
  };

  const turnCap = (key) => {
    if (key === "hp") {
      key = key.toUpperCase();
    } else {
      key = key.charAt(0).toUpperCase() + key.slice(1);
    }
    return key;
  };

  const resetUpgrades = () => {
    setActiveUpgrades({
      upgrade1: false,
      upgrade2: false,
      upgrade3: false,
      upgrade4: false,
    });
    baseValue = character1.skillBase;
    scaleValue = character1.skillScale;
  };

  return (
    <div>
      <header className="page-header">
        <h1>{character1.Name}</h1>
      </header>
      <div className="page-body">
        <img src={images[name]} alt={name} className="character-image" />
        <div className="character-detail">
          <div>{charIntro(nameNoMark, "intro")}</div>

          <h3>Base stats:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(charBase[0])
                  .filter((key) => !["ID", "Name"].includes(key)) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  let total = 0;
                  return (
                    <>
                      {Object.entries(
                        charBase.find((char) => char.Name === character1.Name)
                      )
                        .filter(([key]) => !["ID", "Name"].includes(key))
                        .map(([key, value]) => {
                          const numValue = Number(value) || 0;
                          total += numValue;
                          return <td key={key}>{value}</td>;
                        })}
                      <td>{total}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
          <h3>Personal growth:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(charGrowth[0])
                  .filter(
                    (key) =>
                      ![
                        "ID",
                        "Name",
                        "classLine",
                        "passive",
                        "passiveEff",
                      ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  const character = charGrowth.find(
                    (char) => char.Name === character1.Name
                  );
                  let total = 0;

                  return (
                    <>
                      {Object.entries(character)
                        .filter(
                          ([key]) =>
                            ![
                              "ID",
                              "Name",
                              "classLine",
                              "passive",
                              "passiveEff",
                            ].includes(key)
                        )
                        .map(([key, value]) => {
                          let numValue;
                          if (
                            typeof value === "string" &&
                            value.includes("%")
                          ) {
                            numValue = parseFloat(value);
                          } else {
                            numValue = Number(value) || 0;
                          }
                          total += numValue;
                          return <td key={key}>{value}</td>;
                        })}
                      <td>{`${total}%`}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
          <div>{charIntro(nameNoMark, "base")}</div>
          <h4>Class based growths:</h4>
          <h5>Tier 2:</h5>
          <table className="stat-table">
            <thead>
              <tr>
                <th>Class</th>
                {Object.keys(charGrowth[0])
                  .filter(
                    (key) =>
                      ![
                        "ID",
                        "Name",
                        "classLine",
                        "passive",
                        "passiveEff",
                      ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(classGrowth)
                .filter((entry) => entry.Classline === line && entry.Tier === 2)
                .map((entry) => {
                  let total = 0;
                  let i = 0;
                  return (
                    <tr key={entry.Name}>
                      {Object.entries(entry)
                        .filter(([key]) =>
                          [
                            "Name",
                            "HP_Grow",
                            "Mgt_Grow",
                            "Spd_Grow",
                            "Dex_Grow",
                            "Def_Grow",
                            "Frt_Grow",
                            "Mas_Grow",
                            "Lck_Grow",
                          ].includes(key)
                        )
                        .map(([key, value]) => {
                          let numValue;

                          if (key === "Name") {
                            return <td key={key}>{value}</td>;
                          } else {
                            const charGrow = parseFloat(growths[i]);
                            console.log(charGrow);
                            numValue = value * 100 + charGrow;

                            total += numValue;
                            i++;
                            return <td key={key}>{`${numValue}%`}</td>;
                          }
                        })}
                      <td>{`${total}%`}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h5>Tier 3:</h5>
          <table className="stat-table">
            <thead>
              <tr>
                <th>Class</th>
                {Object.keys(charGrowth[0])
                  .filter(
                    (key) =>
                      ![
                        "ID",
                        "Name",
                        "classLine",
                        "passive",
                        "passiveEff",
                      ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(classGrowth)
                .filter((entry) => entry.Classline === line && entry.Tier === 3)
                .map((entry) => {
                  let total = 0;
                  let i = 0;
                  return (
                    <tr key={entry.Name}>
                      {Object.entries(entry)
                        .filter(([key]) =>
                          [
                            "Name",
                            "HP_Grow",
                            "Mgt_Grow",
                            "Spd_Grow",
                            "Dex_Grow",
                            "Def_Grow",
                            "Frt_Grow",
                            "Mas_Grow",
                            "Lck_Grow",
                          ].includes(key)
                        )
                        .map(([key, value]) => {
                          let numValue;

                          if (key === "Name") {
                            return <td key={key}>{value}</td>;
                          } else {
                            const charGrow = parseFloat(growths[i]);
                            console.log(charGrow);
                            numValue = value * 100 + charGrow;

                            total += numValue;
                            i++;
                            return <td key={key}>{`${numValue}%`}</td>;
                          }
                        })}
                      <td>{`${total}%`}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>{charIntro(nameNoMark, "class")}</div>
          <h3>Passive:</h3>
          <table className="passive-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{character2.passive}</td>
              </tr>
              <tr>
                <th>Effect</th>
                <td>{character2.passiveEff}</td>
              </tr>
            </tbody>
          </table>
          <h3>Personal:</h3>
          <table className="active-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td
                  colSpan="4"
                  style={{
                    backgroundColor: getSkillColor(character1.activeType),
                    color: "#FFFFFF",
                  }}
                >
                  {character1.activeSkill}
                </td>
              </tr>
              <tr>
                <th>Cost</th>
                <td colSpan="4">
                  {charSkillCost(
                    nameNoMark,
                    character1.activeMana,
                    activeUpgrades
                  )}
                </td>
              </tr>
              <tr>
                <th>Range</th>
                <td colSpan="4">
                  {charSkillRng(
                    nameNoMark,
                    character1.activeRng,
                    activeUpgrades
                  )}
                </td>
              </tr>
              <tr>
                <th>Effect</th>
                <td colSpan="4">
                  {charSkillDes(
                    nameNoMark,
                    baseValue,
                    scaleValue,
                    activeUpgrades
                  )}
                </td>
              </tr>
              <tr>
                <th>Upgrades</th>
                <td
                  className={`upgrade-box ${
                    activeUpgrades.upgrade1 ? "active" : ""
                  }`}
                >
                  {character1.activeBuff1}
                  <br />
                  <button onClick={() => toggleUpgrade("upgrade1")}>
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades.upgrade2 ? "active" : ""
                  }`}
                >
                  {character1.activeBuff2}
                  <br />
                  <button onClick={() => toggleUpgrade("upgrade2")}>
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades.upgrade3 ? "active" : ""
                  }`}
                >
                  {character1.activeBuff3}
                  <br />
                  <button onClick={() => toggleUpgrade("upgrade3")}>
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades.upgrade4 ? "active" : ""
                  }`}
                >
                  {character1.activeBuff4}
                  <br />
                  <button onClick={() => toggleUpgrade("upgrade4")}>
                    Upgrade
                  </button>
                </td>
              </tr>
              <tr>
                <th></th>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <button
                    style={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                    onClick={() => resetUpgrades()}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div>{charIntro(nameNoMark, "gameplay")}</div>
        </div>
        <Link to="/characters">Back</Link>{" "}
      </div>
    </div>
  );
}

export default CharDetail;
