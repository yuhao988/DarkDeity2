import sample from "../Datas/simSample.json";
import { useState } from "react";
import SimModal from "./SimModal";
import "../../App.css";

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

  const scoreCalc1 = (unitName) => {
    const unit = unitList.find((units) => units.Class === unitName);
    let cnt = 0;
    let eneDdg = 0;
    let wCnt = 0;
    let eneCAvo = 0;
    let eneRes = 0;

    for (const i in enemyList) {
      cnt++;
      eneDdg += Math.min(enemyList[i].Ddg, unit.Acc);
      if (unit.TSpd - enemyList[i].TSpd >= 5) {
        wCnt++;
      }
      eneCAvo += Math.min(enemyList[i].CAvo, unit.Crit);
      if (unit["Phy/Mag"] === "Physical") {
        eneRes += Math.min(enemyList[i].Def, unit.Pwr);
      } else if (unit["Phy/Mag"] === "Magical") {
        eneRes += Math.min(enemyList[i].For, unit.Pwr);
      }
    }

    const unitAcc = Math.min(unit.Acc - eneDdg / cnt, 100).toFixed(1);
    const unitCrit = Math.min(unit.Crit - eneCAvo / cnt, 100).toFixed(1);
    const unitDmg = Math.max(unit.Pwr - eneRes / cnt, 0).toFixed(1);

    const score = (
      unitDmg *
      (unitAcc / 100) *
      (1 + wCnt / cnt) *
      (1 + unitCrit / 100)
    ).toFixed(1);

    return score;
  };

  const tankCalc = (unitName) => {
    const unit = unitList.find((units) => units.Class === unitName);

    let cnt = 0;
    let eneHit = 0;
    let eneDmg = 0;
    let wCnt = 0;

    for (const i in enemyList) {
      cnt++;
      eneHit += Math.max(0, Math.min(100, enemyList[i].Acc - unit.Ddg));
      if (enemyList[i]["Phy/Mag"] === "Physical") {
        eneDmg += Math.max(0, enemyList[i].Pwr - unit.Def);
      } else if (enemyList[i]["Phy/Mag"] === "Magical") {
        eneDmg += Math.max(0, enemyList[i].Pwr - unit.For);
      }
      if (enemyList[i].TSpd - unit.TSpd >= 5) {
        wCnt++;
      }
    }
console.log(`eneDmg: ${eneDmg/cnt}, eneHit:${eneHit/cnt}, wcnt:${wCnt}`)
    const score = (      
      (
        ((eneDmg / cnt) * ((eneHit / 100) / cnt) * (1 + wCnt / cnt)) 
      / unit.HP) *      100
    ).toFixed(1);

    return score;
  };

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
        <SimModal isOpen={isModal} onClose={closeModal} unit={selectedUnit} />
      </div>
    </div>
  );
}

export default SimSample1;
