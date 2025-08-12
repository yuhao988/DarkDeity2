import sample from "../Datas/simSample.json";
import classSample from "../Datas/simClassSmp.json";
import eneHeroic from "../Datas/eneHeroic.json";
import { useState } from "react";
import SimModal from "./SimModal";
import { scoreCalc1, tankCalc } from "./SimCalc";

import "../../App.css";
import "./Sim.css";

function SimSample1() {
  const [isModal, setIsModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isUnit, setIsUnit] = useState(false);
  const [isEne, setIsEne]=useState(false);

  const unitList = Array.isArray(sample)
    ? sample.filter((obj) => obj.hasOwnProperty("tier3"))
    : [];

  const eneList = Array.isArray(eneHeroic)
    ? eneHeroic.filter((obj) => obj.Boss === "")
    : [];

  const openModal = (unit, isU,isE) => {
    setSelectedUnit(unit);
    setIsUnit(isU);
    setIsModal(true);
    setIsEne(isE);
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
        <table className="units-table">
          <thead>
            <tr>
              <th style={{ width: "30%", textAlign: "center" }}>Units</th>
              <th style={{ width: "30%" }}>Classes</th>
            </tr>
          </thead>
          <tbody>
            {/* Determine max length for proper row pairing */}
            {Array.from({
              length: Math.max(
                unitList.length + eneList.length + 1,
                Object.values(classSample).length
              ),
            }).map((_, index) => (
              <tr key={index}>
                {/* Unit Column */}
                <td>
                  {unitList[index] && (
                    <div className="unit-item">
                      <button
                        onClick={() => openModal(unitList[index], true, false)}
                      >
                        {unitList[index].Class}
                      </button>
                      <div className="unit-stats">
                        Attack score: {scoreCalc1(unitList[index].Class, true)}
                        <br />
                        Tank score: {tankCalc(unitList[index].Class, true)}%
                      </div>
                    </div>
                  )}
                  {index === 19 && (
                    <div>
                      <h4>Enemy Classes:</h4>
                    </div>
                  )}
                  {index >= 20 && eneList[index - 20] && (
                    <div className="unit-item">
                      <button
                        onClick={() =>
                          openModal(eneList[index - 20], true, true)
                        }
                      >
                        {eneList[index - 20].Class}
                      </button>
                      {/* <div className="unit-stats">
                        Attack score: {scoreCalc1(eneList[index-19].Class, true)}
                        <br />
                        Tank score: {tankCalc(eneList[index-19].Class, true)}%
                      </div> */}
                    </div>
                  )}
                </td>

                {/* Class Column */}
                <td>
                  {Object.values(classSample)[index] && (
                    <div className="class-item">
                      <button
                        onClick={() =>
                          openModal(
                            Object.values(classSample)[index],
                            false,
                            false
                          )
                        }
                      >
                        {Object.values(classSample)[index].Class}
                      </button>
                      <div className="class-stats">
                        Attack score:{" "}
                        {scoreCalc1(
                          Object.values(classSample)[index].Class,
                          false
                        )}
                        <br />
                        Tank score:{" "}
                        {tankCalc(
                          Object.values(classSample)[index].Class,
                          false
                        )}
                        %
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SimModal
          isOpen={isModal}
          onClose={closeModal}
          unit={selectedUnit}
          isUnit={isUnit}
          isEnemy={isEne}
        />
      </div>
    </div>
  );
}

export default SimSample1;
