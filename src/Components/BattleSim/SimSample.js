import sample from "../Datas/simSample.json";
import { useState } from "react";
import SimModal from "./SimModal";
import { scoreCalc1, tankCalc } from "./SimCalc";
import "../../App.css";
import "./Sim.css"; 

function SimSample1() {
  const [isModal, setIsModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const [unitList, enemyList] = Array.isArray(sample)
    ? sample.reduce(
        ([units, enemies], obj) =>
          obj.hasOwnProperty("tier3")
            ? [[...units, obj], enemies]
            : [units, [...enemies, obj]],
        [[], []]
      )
    : [[], []];

  const openModal = (unit) => {
    setSelectedUnit(unit);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <header className="page-header">
        <h1>Sample battle sim</h1>
      </header>
      <div className="page-body">
        <h2>Units</h2>
        <ul>
          {unitList.map((unit, index) => (
            <li key={index}>
              <button onClick={() => openModal(unit)}>{unit.Class}</button>
              <br />
              Attack score: {scoreCalc1(unit.Class)} <br />
              Tank score: {tankCalc(unit.Class)}%
            </li>
          ))}
        </ul>
        <SimModal
          isOpen={isModal}
          onClose={closeModal}
          unit={selectedUnit}
          enemies={enemyList}
        />
      </div>
    </div>
  );
}

export default SimSample1;
