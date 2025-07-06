import Modal from "react-modal";
import { useState } from "react";
import { battleForecast, simulateBattle } from "./SimCalc";
import eneHeroic from "../Datas/eneHeroic.json";
import eneDeity from "../Datas/eneDeity.json";
import "./Sim.css";

export default function SimModal(prop) {
  const { isOpen, onClose, unit } = prop;
  const [enemyActive, setEnemyActive] = useState("");
  const [enmDiff, setEnmDiff] = useState("Heroic");
  //const [isBoss, setIsBoss]=useState("");

  // Get enemies based on current difficulty
  const currentEnemies = enmDiff === "Heroic" ? eneHeroic : eneDeity;

  const handleCloseModal = () => {
    onClose();
    setEnemyActive("");
  };
  const handleEnemyChange = (e) => {
    const selectedEnemy = currentEnemies.find(
      (enemy) => enemy.Class === e.target.value && enemy.Boss === ""
    );
    setEnemyActive(selectedEnemy || null);
  };

  const handleDiffChange = (e) => {
    const diff = e.target.value;
    setEnmDiff(diff);
    setEnemyActive(null); // Reset selected enemy when difficulty changes
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
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
      <button onClick={handleCloseModal} className="modal-close-button">
        ×
      </button>

      {unit && (
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

          {/* Battle Display - Will update immediately on any change */}
          {enemyActive && (
            <div className="battle-container">
              <div>
                <div className="selected-enemy">
                  <h3>Selected Enemy: {enemyActive.Class}</h3>
                </div>
                {battleForecast(unit, enemyActive)}
              </div>
              <div className="right-content">
                <p>
                  For 1000 simulated battles in which each side attacks first
                  for half of the time:
                </p>
                {simulateBattle(unit, enemyActive)}
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
