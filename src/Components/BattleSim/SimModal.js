import Modal from "react-modal";
import { useState } from "react";
import {
  battleForecast,
  battleForecast2,
  simulateBattle,
  simulateBattle2,
} from "./SimCalc";
import classSample from "../Datas/simClassSmp.json";
import eneMortal from "../Datas/eneMortal.json";
import eneHeroic from "../Datas/eneHeroic.json";
import eneDeity from "../Datas/eneDeity.json";
import eneDemonic from "../Datas/eneDemonic.json";
import "./Sim.css";
import "../../App.css";

function effectWriteup(class1) {
  switch (class1) {
    case "test1":
      return "Buff examplekkkk kkkkkkkkkkkk kkkkkkkkkkkkkk kkkkkkkkkkkk kkkkkkkkk";
    case "Devoted":
      return "+8 Crit from Executioner";
    case "Nightblade":
      return "+20 Ddg from Shadowstep";
    case "Seeker":
      return "+4 Vulnerable to opponent from Exposing Light";
    case "Gallant":
      return "+5 Dmg from Honorclad";
    case "Ranger":
      return "+8 Heavy Block from Shield Stance";
    case "Cutthroat":
      return "+1 Ddge for every point of Lck from Scrapper";
    case "Aegis":
      return "+20% Dmg from Reflection";
    case "Scholar":
      return "+2 Frt from Building Knowledge";
    case "Elementalist":
      return "+4 Pwr from Invoke Spirits";
    case "Gale":
      return "+6 Dmg from Turbine";
    case "Conduit":
      return "+6 Crit from Flux Overload";
    case "Frigillan":
      return "+5 Pwr and 25 Acc from Defensive Fighter";
    case "Monk":
      return "+4 Weak to opponent from Nerve Strike";
    case "Reaper":
      return "+100% Crit Dmg to full HP opponent from Visage of Death";
    case "Ancarant":
      return "+25 Ddg from Midnight Ride";
    case "Ellisant":
      return "+25 Blind to opponent from Blinding Light";
    case "Champion":
      return "-4 TSpd, +25% Pwr from Titanic";
      case "Warden":
      return "+6 Def from Protector";
      case "Slayer":
      return "20% chance for extra attack from Ricochet";
      case "Relic Knight":
      return "+6 Def and Frt from Unstoppable";
      case "Dreadnought":
      return "Cannot dodge or miss from Relentless";
      case "Hemomancer":
      return "+1 Pwr and Crit for every 5 missing HP from Dark Magic";
      case "Tempest":
      return "+1 Dmg for every excess TSpd on follow-up attacks from Swift Strike";
      case "Ascendant":
      return "+25 Ddg, Acc or Crit from Elemental Fist";
    default:
      return null;
  }
}

export default function SimModal(prop) {
  const { isOpen, onClose, unit, isEnemy } = prop;
  const [unitActive, setUnitActive] = useState(
    unit
      ? eneMortal.find((item) => item.Class === unit.Class && item.Boss === "")
      : null
  );
  const [enemyActive, setEnemyActive] = useState("");
  const [enmDiff, setEnmDiff] = useState("Mortal");
  //const [isBoss, setIsBoss]=useState("");
  const [oppoClass, setOppoClass] = useState("");

  // Get enemies based on current difficulty
 const enemyMap = {
  "Mortal": eneMortal,
  "Heroic": eneHeroic,
  "Deity": eneDeity,
  "Demonic": eneDemonic
};

const currentEnemies = enemyMap[enmDiff] || eneMortal;

  const handleCloseModal = () => {
    onClose();
    setEnemyActive("");
    setUnitActive(null);
  };
  const handleEnemyChange = (e) => {
    const selectedEnemy = currentEnemies.find(
      (enemy) => enemy.Class === e.target.value && enemy.Boss === ""
    );
    setEnemyActive(selectedEnemy || null);
    setOppoClass("");
  };

  const handleDiffChange = (e) => {
    const diff = e.target.value;
    setEnmDiff(diff);
    //const currentDiff = diff === "Heroic" ? eneHeroic : eneDeity;
    const currentDiff = enemyMap[diff] || eneMortal;
    const selectUnitActive = currentDiff.find(
      (item) => item.Class === unit.Class && item.Boss === ""
    );
    
    setUnitActive(selectUnitActive);
    setEnemyActive(null); // Reset selected enemy when difficulty changes
  };
  const handleOppoChange = (e) => {
    const selectedOppo = classSample.find(
      (opponent) => opponent.Class === e.target.value
    );
    setEnemyActive("");
    setOppoClass(selectedOppo || null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="sim-modal"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 9999, // Higher than everything else
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "90vw",
          height: "90vh",
          maxWidth: "90vw",
          maxHeight: "90vh",
          zIndex: 10000, // Even higher than overlay
        },
      }}
    >
      <button
        onClick={handleCloseModal}
        className="modal-close-button"
      ></button>

      {unit &&
        (isEnemy ? (
          <div className="modal-content">
            {(!unitActive || unitActive.Class !== unit.Class) &&
              setUnitActive(unit)}
            <h2>{unit.Class}</h2>
            <h4>Game difficulty:</h4>
            <select
              onChange={handleDiffChange}
              value={enmDiff}
              className="enemy-select"
              style={{ width: "20vw" }}
            >
              <option value="Mortal">Mortal</option>
              <option value="Heroic">Heroic</option>
              <option value="Deity">Deity</option>              
              <option value="Demonic">Demonic</option>
            </select>
            <h4>Enemy Class:</h4>
            <select
              onChange={handleEnemyChange}
              value={enemyActive?.Class || ""}
              className="enemy-select"
              style={{ width: "20vw" }}
            >
              <option value="">Select an enemy</option>
              {currentEnemies.map(
                (enemy) =>
                  enemy.Boss === "" && (
                    <option key={`${enemy.Class}`} value={enemy.Class}>
                      {enemy.Class}
                    </option>
                  )
              )}
            </select>
            {/* Battle Display - Will update immediately on any change */}
            {enemyActive && unitActive && (
              <div className="battle-container">
                <div>
                  <div className="selected-enemy">
                    <h3>Selected Enemy: {enemyActive.Class}</h3>
                  </div>

                  <div>{battleForecast(unitActive, enemyActive)}</div>
                </div>
                <div className="right-content">
                  <p>
                    For 10000 simulated battles in which each side attacks first
                    for half of the time:
                  </p>
                  <div>{simulateBattle(unitActive, enemyActive)}</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="modal-content">
            <h2>{unit.Class}</h2>

            {/* Difficulty Selector */}
            <h4>Game difficulty:</h4>
            <select
              onChange={handleDiffChange}
              value={enmDiff}
              className="enemy-select"
              style={{ width: "20vw" }}
            >
              <option value="Mortal">Mortal</option>
              <option value="Heroic">Heroic</option>
              <option value="Deity">Deity</option>              
              <option value="Demonic">Demonic</option>
            </select>

            {/* Enemy Selector - Now uses currentEnemies */}
            <h4>Enemy Class:</h4>
            <select
              onChange={handleEnemyChange}
              value={enemyActive?.Class || ""}
              className="enemy-select"
              style={{ width: "20vw" }}
            >
              <option value="">Select an enemy</option>
              {currentEnemies.map(
                (enemy) =>
                  enemy.Boss === "" && (
                    <option key={`${enemy.Class}`} value={enemy.Class}>
                      {enemy.Class}
                    </option>
                  )
              )}
            </select>
            <h4>Playable class opponent</h4>
            <select
              onChange={handleOppoChange}
              value={oppoClass?.Class || ""}
              className="enemy-select"
              style={{ width: "20vw" }}
            >
              <option value="">Select an opponent</option>
              {classSample.map((opponent) => (
                <option key={`${opponent.Class}`} value={opponent.Class}>
                  {opponent.Class}
                </option>
              ))}
            </select>

            {/* Battle Display - Will update immediately on any change */}
            {(enemyActive || oppoClass) && (
              <div className="battle-container">
                <div style={{ maxWidth: "20vw" }}>
                  <div className="selected-enemy">
                    <h3>
                      Selected {enemyActive ? "Enemy" : "Opponent"}:
                      {enemyActive ? enemyActive.Class : oppoClass.Class}
                    </h3>
                  </div>

                  {enemyActive ? (
                    <div>
                      {battleForecast(unit, enemyActive)}
                      <p>Unit buff: {effectWriteup(unit.Class)}</p>
                    </div>
                  ) : (
                    <div>
                      {battleForecast2(unit, oppoClass)}
                      <p>Unit buff: {effectWriteup(unit.Class)}</p>
                      <p>Opponent buff: {effectWriteup(oppoClass.Class)}</p>
                    </div>
                  )}
                </div>
                <div className="right-content">
                  <p>
                    For 10000 simulated battles in which each side attacks first
                    for half of the time:
                  </p>
                  <div>
                    {enemyActive
                      ? simulateBattle(unit, enemyActive)
                      : simulateBattle2(unit, oppoClass)}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </Modal>
  );
}
