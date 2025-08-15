import Modal from "react-modal";
import { useState } from "react";
import {
  battleForecast,
  battleForecast2,
  simulateBattle,
  simulateBattle2,
} from "./SimCalc";
import classSample from "../Datas/simClassSmp.json";
import eneHeroic from "../Datas/eneHeroic.json";
import eneDeity from "../Datas/eneDeity.json";
import "./Sim.css";
import "../../App.css";

function effectWriteup() {
  let test = "test1";
  switch (test) {
    case "test1":
      return <div>Buff example</div>;
    default:
      return null;
  }
}

export default function SimModal(prop) {
  const { isOpen, onClose, unit, isEnemy } = prop;
  const [unitActive, setUnitActive] = useState(
    unit
      ? eneHeroic.find((item) => item.Class === unit.Class && item.Boss === "")
      : null
  );
  const [enemyActive, setEnemyActive] = useState("");
  const [enmDiff, setEnmDiff] = useState("Heroic");
  //const [isBoss, setIsBoss]=useState("");
  const [oppoClass, setOppoClass] = useState("");

  // Get enemies based on current difficulty
  const currentEnemies = enmDiff === "Heroic" ? eneHeroic : eneDeity;

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
    const currentDiff = diff === "Heroic" ? eneHeroic : eneDeity;
    const selectUnitActive = currentDiff.find(
      (item) => item.Class === unit.Class && item.Boss === ""
    );
    console.log(selectUnitActive);
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
              <option value="Heroic">Heroic</option>
              <option value="Deity">Deity</option>
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
              <option value="Heroic">Heroic</option>
              <option value="Deity">Deity</option>
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
                <div>
                  <div className="selected-enemy">
                    {enemyActive ? (
                      <h3>Selected Enemy: {enemyActive.Class}</h3>
                    ) : (
                      <h3>Selected Opponent: {oppoClass.Class}</h3>
                    )}
                  </div>
                  {enemyActive ? (
                    <div>{battleForecast(unit, enemyActive)}</div>
                  ) : (
                    <div>{battleForecast2(unit, oppoClass)}</div>
                  )}
                  {effectWriteup()}
                  {effectWriteup()}
                </div>
                <div className="right-content">
                  <p>
                    For 10000 simulated battles in which each side attacks first
                    for half of the time:
                  </p>
                  {enemyActive ? (
                    <div>{simulateBattle(unit, enemyActive)}</div>
                  ) : (
                    <div>{simulateBattle2(unit, oppoClass)}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
    </Modal>
  );
}
