import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import classStat from "../Datas/classStats.json";
import charStat from "../Datas/charStatPass.json";
import classSkills from "../Datas/classSkills.json";
import {
  ClassIntro,
  classSkillDes,
  classSkillCost,
  classSkillRng,
  classWriteUps,
} from "./ClassMisc";
import "../../App.css";
import "./Class.css";

function ClassDetail() {
  const { name } = useParams();
  const [activeUpgrades1, setActiveUpgrades1] = useState({
    upgrade1: false,
    upgrade2: false,
    upgrade3: false,
    upgrade4: false,
  });
  const [activeUpgrades2, setActiveUpgrades2] = useState({
    upgrade1: false,
    upgrade2: false,
    upgrade3: false,
    upgrade4: false,
  });

  const nameClass = Object.values(classStat).find(
    (class2) => class2.Name.replace(/\s+/g, "").toLowerCase() === name
  );
  const skillClass = Object.values(classSkills).find(
    (class2) => class2.Name.replace(/\s+/g, "").toLowerCase() === name
  );
  const Name1 = nameClass.Name;
  const line = nameClass.Classline;
  let baseValue1 = skillClass.S1Base;
  let scaleValue1 = skillClass.S1Scale;
  let baseValue2 = skillClass.S2Base;
  let scaleValue2 = skillClass.S2Scale;

  const growths = [
    "HP_Grow",
    "Mgt_Grow",
    "Spd_Grow",
    "Dex_Grow",
    "Def_Grow",
    "Frt_Grow",
    "Mas_Grow",
    "Lck_Grow",
  ].map((stat) => nameClass[stat]);

  const imageContext = require.context(
    "./Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );
  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "").replace(/\s+/g, "");

    acc[name] = imageContext(key);

    return acc;
  }, {});

  if (!nameClass) return <div>Class not found</div>;

  const modHeader = (key) => {
    const trimmed = key.replace(/_(Grow|Mod)$/, "");
    return trimmed;
  };

  const getSkillColor = (skillType) => {
    const colorMap = {
      Red: "rgb(160, 3, 3)",
      Blue: "rgb(36, 3, 156)",
      Green: "rgb(3, 128, 50)",
      default: "#f5f6fa", // Fallback
    };
    return colorMap[skillType] || colorMap.default;
  };

  const toggleUpgrade = (skillNum, upgradeKey) => {
    let cnt = 0;
    for (const key in skillNum) {
      if (key !== upgradeKey && skillNum[key] === true) {
        cnt++;
      }
    }
    if (cnt < 2) {
      switch (skillNum) {
        case activeUpgrades1:
          setActiveUpgrades1((prev) => ({
            ...prev,
            [upgradeKey]: !prev[upgradeKey],
          }));
          break;
        case activeUpgrades2:
          setActiveUpgrades2((prev) => ({
            ...prev,
            [upgradeKey]: !prev[upgradeKey],
          }));
          break;
        default:
          break;
      }
    }
  };

  const resetUpgrades = (skillNum) => {
    switch (skillNum) {
      case activeUpgrades1:
        setActiveUpgrades1({
          upgrade1: false,
          upgrade2: false,
          upgrade3: false,
          upgrade4: false,
        });
        baseValue1 = skillClass.S1Base;
        scaleValue1 = skillClass.S1Scale;

        break;
      case activeUpgrades2:
        setActiveUpgrades2({
          upgrade1: false,
          upgrade2: false,
          upgrade3: false,
          upgrade4: false,
        });
        baseValue2 = skillClass.S2Base;
        scaleValue2 = skillClass.S2Scale;
        break;
      default:
        break;
    }

    //baseValue = character1.skillBase;
    //scaleValue = character1.skillScale;
  };

  return (
    <div>
      <header className="page-header">{nameClass.Name}</header>
      <div className="page-body">
        <img
          src={images[name.toLowerCase()]}
          alt={name}
          className="class-image"
        />
        <div>
          {ClassIntro(Name1)}
          <br />
          Characters that can be made into the {nameClass.Name} includes:{" "}
          <ul>
            {Object.values(charStat)
              .filter((charName) => charName.classLine === nameClass.Classline)
              .map((char) => (
                <li>{char.Name}</li>
              ))}
          </ul>
          <h3>Class Stats Modifier:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(classStat[0])
                  .filter((key) =>
                    [
                      "HP_Mod",
                      "Mgt_Mod",
                      "Spd_Mod",
                      "Dex_Mod",
                      "Def_Mod",
                      "Frt_Mod",
                      "Mas_Mod",
                      "Lck_Mod",
                    ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{modHeader(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  const character = classStat.find(
                    (clas) => clas.Name === nameClass.Name
                  );
                  let total = 0;
                  return (
                    <>
                      {Object.entries(character)
                        .filter(([key]) =>
                          [
                            "HP_Mod",
                            "Mgt_Mod",
                            "Spd_Mod",
                            "Dex_Mod",
                            "Def_Mod",
                            "Frt_Mod",
                            "Mas_Mod",
                            "Lck_Mod",
                          ].includes(key)
                        )
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
          <h3>Class Growth Modifier:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(classStat[0])
                  .filter((key) =>
                    [
                      "HP_Grow",
                      "Mgt_Grow",
                      "Spd_Grow",
                      "Dex_Grow",
                      "Def_Grow",
                      "Frt_Grow",
                      "Mas_Grow",
                      "Lck_Grow",
                    ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{modHeader(key)}</th>
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
                        classStat.find((clas) => clas.Name === nameClass.Name)
                      )
                        .filter(([key]) =>
                          [
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
                          value = value * 100;
                          total += value;
                          return <td key={key}>{`${value}%`}</td>;
                        })}
                      <td>{`${total}%`}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
          <h4>Stat Score:</h4>
          <table className="stat-table">
            <thead>
              <tr>
                <td>Bulk</td>
                <td>Power</td>
                <td>Skill Num</td>
                <td>True Speed</td>
                <td>Dodge</td>
                <td>Accuracy</td>
                <td>Crit</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {(
                    (nameClass.HP_Grow +
                      nameClass.Def_Grow +
                      nameClass.Frt_Grow +
                      0.5) *
                      4 -
                    5 / 3 +
                    (nameClass.HP_Mod + nameClass.Def_Mod + nameClass.Frt_Mod) *
                      0.2 +
                    1.4
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    nameClass.Mgt_Grow * 13.5 -
                    0.625 +
                    nameClass.Mgt_Mod * 0.625 +
                    1.25
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    nameClass.Mas_Grow * 11 +
                    nameClass.Mas_Mod * (5 / 9) +
                    10 / 9
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    nameClass.Spd_Grow * 14.1 +
                    nameClass.Spd_Mod * (5 / 11) +
                    25 / 11
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    (nameClass.Spd_Grow * 2 +
                      nameClass.Dex_Grow * 0.5 +
                      nameClass.Lck_Grow) *
                      4.2 +
                    (nameClass.Spd_Mod * 2 +
                      nameClass.Dex_Mod * 0.5 +
                      nameClass.Lck_Mod) *
                      (2 / 9) +
                    16 / 9
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    (nameClass.Dex_Grow * 2.5 + nameClass.Lck_Grow * 0.5) *
                      5.6 -
                    0.625 +
                    (nameClass.Dex_Mod * 2.5 + nameClass.Lck_Mod * 0.5) *
                      0.294 +
                    1.324
                  ).toFixed(1)}
                </td>
                <td>
                  {(
                    (nameClass.Dex_Grow * 0.25 + nameClass.Lck_Grow * 1.25) *
                      8.9 +
                    0.42 +
                    (nameClass.Dex_Mod * 0.25 + nameClass.Lck_Mod * 1.25) *
                      0.465 +
                    1.28
                  ).toFixed(1)}
                </td>
              </tr>
            </tbody>
          </table>
          {classWriteUps(Name1, "stats")}
          <h4>Individual Character growth in {nameClass.Name}</h4>
          <table className="stat-table">
            <thead>
              <tr>
                <th>Character</th>
                {Object.keys(classStat[0])
                  .filter((key) =>
                    [
                      "HP_Grow",
                      "Mgt_Grow",
                      "Spd_Grow",
                      "Dex_Grow",
                      "Def_Grow",
                      "Frt_Grow",
                      "Mas_Grow",
                      "Lck_Grow",
                    ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{modHeader(key)}</th>
                  ))}

                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(charStat)
                .filter((entry) => entry.classLine === line)
                .map((entry) => {
                  let total = 0;
                  let i = 0;
                  return (
                    <tr key={entry.Name}>
                      {Object.entries(entry)
                        .filter(([key]) =>
                          [
                            "Name",
                            "hp",
                            "mgt",
                            "spd",
                            "dex",
                            "def",
                            "frt",
                            "mas",
                            "lck",
                          ].includes(key)
                        )
                        .map(([key, value]) => {
                          let numValue;

                          if (key === "Name") {
                            return <td key={key}>{value}</td>;
                          } else {
                            const charGrow = parseFloat(value);

                            numValue = growths[i] * 100 + charGrow;

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
          {classWriteUps(Name1, "char")}
          <h3>Class rating (/5):</h3>
          {classWriteUps(Name1, "rating")}
          {classWriteUps(Name1, "tips")}
          <br />
          {classWriteUps(Name1, "first")}
          <h3>Class Passive:</h3>
          <table className="passive-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{nameClass.Passive}</td>
              </tr>
              <tr>
                <th>Effect</th>
                <td>{skillClass.Passive}</td>
              </tr>
            </tbody>
          </table>
          <h3>Class Skills:</h3>
          <table className="active-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td
                  colSpan="4"
                  style={{
                    backgroundColor: getSkillColor(skillClass.S1Type),
                    color: "#FFFFFF",
                  }}
                >
                  {nameClass.Skill1}
                </td>
              </tr>
              <tr>
                <th>Cost</th>
                <td colSpan="4">
                  {classSkillCost(Name1, skillClass.S1Cost, 1, activeUpgrades1)}
                </td>
              </tr>
              <tr>
                <th>Range</th>
                <td colSpan="4">
                  {classSkillRng(Name1, skillClass.S1Rng, 1, activeUpgrades1)}
                </td>
              </tr>
              <tr>
                <th>Effect</th>
                <td colSpan="4">
                  {classSkillDes(
                    Name1,
                    baseValue1,
                    scaleValue1,
                    1,
                    activeUpgrades1
                  )}
                </td>
              </tr>
              <tr>
                <th>Upgrades</th>
                <td
                  className={`upgrade-box ${
                    activeUpgrades1.upgrade1 ? "active" : ""
                  }`}
                >
                  {skillClass.S1Buff1}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades1, "upgrade1")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades1.upgrade2 ? "active" : ""
                  }`}
                >
                  {skillClass.S1Buff2}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades1, "upgrade2")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades1.upgrade3 ? "active" : ""
                  }`}
                >
                  {skillClass.S1Buff3}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades1, "upgrade3")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades1.upgrade4 ? "active" : ""
                  }`}
                >
                  {skillClass.S1Buff4}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades1, "upgrade4")}
                  >
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
                    onClick={() => resetUpgrades(activeUpgrades1)}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          {classWriteUps(Name1, "upgrade1")}
          <br />
          <table className="active-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td
                  colSpan="4"
                  style={{
                    backgroundColor: getSkillColor(skillClass.S2Type),
                    color: "#FFFFFF",
                  }}
                >
                  {nameClass.Skill2}
                </td>
              </tr>
              <tr>
                <th>Cost</th>
                <td colSpan="4">
                  {classSkillCost(Name1, skillClass.S2Cost, 2, activeUpgrades2)}
                </td>
              </tr>
              <tr>
                <th>Range</th>
                <td colSpan="4">
                  {classSkillRng(Name1, skillClass.S2Rng, 2, activeUpgrades2)}
                </td>
              </tr>
              <tr>
                <th>Effect</th>
                <td colSpan="4">
                  {classSkillDes(
                    Name1,
                    baseValue2,
                    scaleValue2,
                    2,
                    activeUpgrades2
                  )}
                </td>
              </tr>
              <tr>
                <th>Upgrades</th>
                <td
                  className={`upgrade-box ${
                    activeUpgrades2.upgrade1 ? "active" : ""
                  }`}
                >
                  {skillClass.S2Buff1}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades2, "upgrade1")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades2.upgrade2 ? "active" : ""
                  }`}
                >
                  {skillClass.S2Buff2}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades2, "upgrade2")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades2.upgrade3 ? "active" : ""
                  }`}
                >
                  {skillClass.S2Buff3}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades2, "upgrade3")}
                  >
                    Upgrade
                  </button>
                </td>
                <td
                  className={`upgrade-box ${
                    activeUpgrades2.upgrade4 ? "active" : ""
                  }`}
                >
                  {skillClass.S2Buff4}
                  <br />
                  <button
                    onClick={() => toggleUpgrade(activeUpgrades2, "upgrade4")}
                  >
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
                    onClick={() => resetUpgrades(activeUpgrades2)}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          {classWriteUps(Name1, "upgrade2")}
          <br />
          {classWriteUps(Name1, "skills")}
          <h3>Rings and weapons recommendations:</h3>
          {classWriteUps(Name1, "rings")}
          {classWriteUps(Name1, "weapons")}
        </div>
        <Link to="/classes">Back</Link>{" "}
      </div>
    </div>
  );
}

export default ClassDetail;
