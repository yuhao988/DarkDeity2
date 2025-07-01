import sample from "../Datas/simSample.json";
import classSample from "../Datas/simClassSmp.json";
import "./Sim.css";

const [unitList, enemyList] = Array.isArray(sample)
  ? sample.reduce(
      ([units, enemies], obj) =>
        obj.hasOwnProperty("tier3")
          ? [[...units, obj], enemies]
          : [units, [...enemies, obj]],
      [[], []]
    )
  : [[], []];

export function scoreCalc1(unitName, isUnit) {
  let unit;
  if (isUnit) {
    unit = unitList.find((units) => units.Class === unitName);
  } else {
    unit = Object.values(classSample).find(
      (classes) => classes.Class === unitName
    );
  }

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
}

export function tankCalc(unitName, isUnit) {
  let unit;
  if (isUnit) {
    unit = unitList.find((units) => units.Class === unitName);
  } else {
    unit = Object.values(classSample).find(
      (classes) => classes.Class === unitName
    );
  }

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

  const score = (
    (((eneDmg / cnt) * (eneHit / 100 / cnt) * (1 + wCnt / cnt)) / unit.HP) *
    100
  ).toFixed(1);

  return score;
}

export function battleForecast(unit, enemy) {
  const TspdDiff = unit.TSpd - enemy.TSpd;
  let unitW = false;
  let enemyW = false;
  if (TspdDiff >= 5) {
    unitW = true;
  } else if (TspdDiff <= -5) {
    enemyW = true;
  }

  let unitDmg = 0;
  let eneDmg = 0;
  if (unit["Phy/Mag"] === "Physical") {
    unitDmg = Math.max(0, unit.Pwr - enemy.Def).toFixed(0);
  } else if (unit["Phy/Mag"] === "Magical") {
    unitDmg = Math.max(0, unit.Pwr - enemy.For).toFixed(0);
  }
  if (enemy["Phy/Mag"] === "Physical") {
    eneDmg = Math.max(0, enemy.Pwr - unit.Def).toFixed(0);
  } else if (enemy["Phy/Mag"] === "Magical") {
    eneDmg = Math.max(0, enemy.Pwr - unit.For).toFixed(0);
  }

  const unitHit = Math.max(0, Math.min(100, unit.Acc - enemy.Ddg)).toFixed(0);
  const eneHit = Math.max(0, Math.min(100, enemy.Acc - unit.Ddg)).toFixed(0);
  const unitCrit = Math.max(0, Math.min(100, unit.Crit - enemy.CAvo)).toFixed(
    0
  );

  return (
    <table className="battle-stat">
      <tbody>
        <tr>
          <td>{unit.Class}</td>
          <td></td>
          <td>{enemy.Class}</td>
        </tr>
        <tr>
          <td>{unit.HP.toFixed(0)}</td>
          <td>HP</td>
          <td>{enemy.HP.toFixed(0)}</td>
        </tr>
        <tr>
          <td>{unitHit}</td>
          <td>Hit</td>
          <td>{eneHit}</td>
        </tr>
        <tr>
          <td>
            {unitDmg}
            {unitW ? " X2" : ""}
          </td>
          <td>Damage</td>
          <td>
            {eneDmg}
            {enemyW ? "X2" : ""}
          </td>
        </tr>
        <tr>
          <td>{unitCrit}</td>
          <td>Critical</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}

export function simulateBattle(unit, enemy) {
  // let unit;
  // let enemy;
  // if (isUnit) {
  //   unit = unitList.find((units) => units.Class === unitName);
  // } else {
  //   unit = Object.values(classSample).find(
  //     (classes) => classes.Class === unitName
  //   );
  // }
  // enemy = enemyList.find((units) => units.Class === enemyName);

  let unitW = false;
  let enemyW = false;
  if (unit.TSpd - enemy.TSpd >= 5) {
    unitW = true;
  } else if (unit.TSpd - enemy.TSpd <= -5) {
    enemyW = true;
  }

  let winloseCnt = [0, 0, 0, 0];

  let unitDmg = 0;
  let eneDmg = 0;
  if (unit["Phy/Mag"] === "Physical") {
    unitDmg = Math.max(0, unit.Pwr - enemy.Def).toFixed(0);
  } else if (unit["Phy/Mag"] === "Magical") {
    unitDmg = Math.max(0, unit.Pwr - enemy.For).toFixed(0);
  }
  if (enemy["Phy/Mag"] === "Physical") {
    eneDmg = Math.max(0, enemy.Pwr - unit.Def).toFixed(0);
  } else if (enemy["Phy/Mag"] === "Magical") {
    eneDmg = Math.max(0, enemy.Pwr - unit.For).toFixed(0);
  }

  const unitHit = Math.max(0, Math.min(100, unit.Acc - enemy.Ddg)).toFixed(0);
  const eneHit = Math.max(0, Math.min(100, enemy.Acc - unit.Ddg)).toFixed(0);
  const unitCrit = Math.max(0, Math.min(100, unit.Crit - enemy.CAvo)).toFixed(
    0
  );

  if ((unitDmg === 0 && eneDmg === 0) || (unitHit === 0 && eneHit === 0)) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 500; i++) {
      let unitCurHP = unit.HP;
      let eneCurHP = enemy.HP;
      while (unitCurHP > 0 && eneCurHP > 0) {
        //Player unit attacks
        if (Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //Enemy counters
        if (Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //If player unit doubles
        if (unitW && Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        if (enemyW && Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //Enemy attacks
        if (Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //Player unit counters
        if (Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        if (enemyW && Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //If player unit doubles
        if (unitW && Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        
      }
    }
    //Enemy strikes first
    for (let j = 0; j < 500; j++) {
      let unitCurHP = unit.HP;
      let eneCurHP = enemy.HP;
      while (unitCurHP > 0 && eneCurHP > 0) {
        //Enemy attacks
        if (Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }

        //Player unit counters
        if (Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW && Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW && Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //Player unit attacks
        if (Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //Enemy counters
        if (Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW && Math.floor(Math.random() * 100) < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            eneCurHP -= unitDmg * 2;
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW && Math.floor(Math.random() * 100) < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
      }
    }
    return (
      <div>
        <p>
          {unit.Class} defeats {enemy.Class} {winloseCnt[0]} times and loses{" "}
          {winloseCnt[1]} times when attacking first.
        </p>
        <p>
          {unit.Class} defeats {enemy.Class} {winloseCnt[2]} times and loses{" "}
          {winloseCnt[3]} times when {enemy.Class} attacks first.
        </p>
      </div>
    );
  }
}
