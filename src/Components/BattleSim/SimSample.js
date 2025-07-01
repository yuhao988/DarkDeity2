import sample from "../Datas/simSample.json";
import classSample from "../Datas/simClassSmp.json";
import { useState } from "react";
import SimModal from "./SimModal";
import { scoreCalc1, tankCalc } from "./SimCalc";
import "../../App.css";
import "./Sim.css";

function SimSample1() {
  const [isModal, setIsModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isUnit, setIsUnit]=useState(false);

  const [unitList, enemyList] = Array.isArray(sample)
    ? sample.reduce(
        ([units, enemies], obj) =>
          obj.hasOwnProperty("tier3")
            ? [[...units, obj], enemies]
            : [units, [...enemies, obj]],
        [[], []]
      )
    : [[], []];

  const openModal = (unit,isU) => {
    setSelectedUnit(unit);
    setIsUnit(isU);
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
        <div className="list-container">
          <h3>Units</h3>
          <ul>
            {unitList.map((unit, index) => (
              <li key={index}>
                <button onClick={() => openModal(unit,true)}>{unit.Class}</button>
                <br />
                Attack score: {scoreCalc1(unit.Class,true)} <br />
                Tank score: {tankCalc(unit.Class,true)}%
              </li>
            ))}
          </ul>
          <SimModal
            isOpen={isModal}
            onClose={closeModal}
            unit={selectedUnit}
            isUnit={isUnit}
            enemies={enemyList}
          />
        </div>
        <div className="list-container">
          <h3>Classes</h3>
          <ul>
            {Object.values(classSample).map((classes, index) => (
              <li key={index}>
                <button onClick={() => openModal(classes,false)}>
                  {classes.Class}
                </button>
                <br />
                Attack score: {scoreCalc1(classes.Class,false)} <br />
                Tank score: {tankCalc(classes.Class,false)}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SimSample1;
