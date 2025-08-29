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

function adjustStats(i, self, enemy) {
  let selfDmg = 0;
  let eneDmg = 0;

  //Self damage calculation
  switch (self.Class) {
    case "Elementalist":
      if (enemy.Class === "Scholar") {
        selfDmg = Math.floor(Math.max(0, self.Pwr + 4 - (enemy.For + 2)));
      } else {
        selfDmg = Math.floor(Math.max(0, self.Pwr + 4 - enemy.For));
      }
      break;
    case "Gale":
      switch (enemy.Class) {
        case "Warden":
          selfDmg = Math.floor(Math.max(0, self.Pwr + 6 - (enemy.Def + 6)));
          break;
        default:
          selfDmg = Math.floor(Math.max(0, self.Pwr + 6 - enemy.Def));
          break;
      }
      break;
    case "Champion":
      switch (enemy.Class) {
        case "Warden":
          selfDmg = Math.floor(Math.max(0, self.Pwr * 1.25 - (enemy.Def + 6)));

          break;
        default:
          selfDmg = Math.floor(Math.max(0, self.Pwr * 1.25 - enemy.Def));
          break;
      }
      break;
    default:
      if (self["Phy/Mag"] === "Physical") {
        switch (enemy.Class) {
          case "Warden":
            selfDmg = Math.floor(Math.max(0, self.Pwr - (enemy.Def + 6)));

            break;
          default:
            selfDmg = Math.floor(Math.max(0, self.Pwr - enemy.Def));
            break;
        }
      } else if (self["Phy/Mag"] === "Magical") {
        if (enemy.Class === "Scholar") {
          selfDmg = Math.floor(Math.max(0, self.Pwr - (enemy.For + 2)));
        } else {
          selfDmg = Math.floor(Math.max(0, self.Pwr - enemy.For));
        }
      }
      break;
  }
  //Opponent damage calculation
  switch (enemy.Class) {
    case "Elementalist":
      if (self.Class === "Scholar") {
        eneDmg = Math.floor(Math.max(0, enemy.Pwr + 4 - (self.For + 2)));
      } else {
        eneDmg = Math.floor(Math.max(0, enemy.Pwr + 4 - self.For));
      }
      break;
    case "Gale":
      switch (self.Class) {
        case "Warden":
          eneDmg = Math.floor(Math.max(0, enemy.Pwr + 6 - (self.Def + 6)));
          break;
        default:
          eneDmg = Math.floor(Math.max(0, enemy.Pwr + 6 - self.Def));
          break;
      }
      break;
    case "Champion":
      switch (self.Class) {
        case "Warden":
          eneDmg = Math.floor(Math.max(0, enemy.Pwr * 1.25 - (self.Def + 6)));
          break;
        default:
          eneDmg = Math.floor(Math.max(0, enemy.Pwr * 1.25 - self.Def));
          break;
      }
      break;
    default:
      if (enemy["Phy/Mag"] === "Physical") {
        switch (self.Class) {
          case "Warden":
            eneDmg = Math.floor(Math.max(0, enemy.Pwr - (self.Def + 6)));
            break;
          default:
            eneDmg = Math.floor(Math.max(0, enemy.Pwr - self.Def));
            break;
        }
      } else if (enemy["Phy/Mag"] === "Magical") {
        if (enemy.Class === "Scholar") {
          eneDmg = Math.floor(Math.max(0, enemy.Pwr - (self.For + 2)));
        } else {
          eneDmg = Math.floor(Math.max(0, enemy.Pwr - self.For));
        }
      }
      break;
  }

  //Self hit rate calculation
  let selfHit = 0;
  switch (enemy.Class) {
    case "Nightblade":
      selfHit = Math.floor(
        Math.max(0, Math.min(100, self.Acc - (enemy.Ddg + 20)))
      );
      break;
    case "Cutthroat":
      selfHit = Math.max(
        0,
        Math.floor(Math.min(100, self.Acc - (enemy.Ddg + enemy.Lck)))
      );
      break;
    case "Ancarant":
      selfHit = Math.floor(
        Math.max(0, Math.min(100, self.Acc - (enemy.Ddg + 25)))
      );
      break;
    default:
      selfHit = Math.floor(Math.max(0, Math.min(100, self.Acc - enemy.Ddg)));
      break;
  }

  //Opponent hitrate calculation
  let eneHit = 0;
  switch (self.Class) {
    case "Nightblade":
      eneHit = Math.floor(
        Math.max(0, Math.min(100, enemy.Acc - (self.Ddg + 20)))
      );
      break;
    case "Cutthroat":
      eneHit = Math.max(
        0,
        Math.floor(Math.min(100, enemy.Acc - (self.Ddg + self.Lck)))
      );
      break;
    case "Ancarant":
      eneHit = Math.floor(
        Math.max(0, Math.min(100, enemy.Acc - (self.Ddg + 25)))
      );
      break;
    default:
      eneHit = Math.floor(Math.max(0, Math.min(100, enemy.Acc - self.Ddg)));
      break;
  }

  if (self.Class === "Dreadnought" || enemy.Class === "Dreadnought") {
    selfHit = 100;
    eneHit = 100;
  }

  //Self and opponent critical chance calculation
  let selfCrit = 0,
    eneCrit = 0;
  //for opponent classes with luck
  if (enemy.Lck) {
    switch (self.Class) {
      case "Devoted":
        selfCrit = Math.max(
          0,
          Math.floor(Math.min(100, self.Crit + 8 - enemy.Lck * 2))
        );
        break;
      case "Conduit":
        selfCrit = Math.max(
          0,
          Math.floor(Math.min(100, self.Crit + 6 - enemy.Lck * 2))
        );

        break;
      default:
        selfCrit = Math.max(
          0,
          Math.floor(Math.min(100, self.Crit - enemy.Lck * 2))
        );
        break;
    }
    switch (enemy.Class) {
      case "Devoted":
        eneCrit = Math.max(
          0,
          Math.floor(Math.min(100, enemy.Crit + 8 - self.Lck * 2))
        );
        break;
      case "Conduit":
        eneCrit = Math.max(
          0,
          Math.floor(Math.min(100, enemy.Crit + 6 - self.Lck * 2))
        );
        break;
      default:
        eneCrit = Math.floor(
          Math.max(0, Math.min(100, enemy.Crit - self.Lck * 2))
        );
        break;
    }
  } else {
    //for enemy classes with CAvo but no luck
    switch (self.Class) {
      case "Devoted":
        selfCrit = Math.max(
          0,
          Math.floor(Math.min(100, self.Crit + 8 - enemy.CAvo))
        );
        break;
      case "Conduit":
        selfCrit = Math.max(
          0,
          Math.floor(Math.min(100, self.Crit + 6 - enemy.CAvo))
        );
        break;
      default:
        selfCrit = Math.floor(
          Math.max(0, Math.min(100, self.Crit - enemy.CAvo))
        );
        break;
    }
    eneCrit = 0;
  }

  return [selfDmg, selfHit, selfCrit, eneDmg, eneHit, eneCrit];
}

//Applies a rotating buff to unit if it is Ascendant
function ascendantBuffUp(unit, buffNum) {
  // Create a copy to avoid modifying the original
  const buffedUnit = { ...unit };

  switch (buffNum) {
    case 1:
      buffedUnit.Ddg += 25;
      break;
    case 2:
      buffedUnit.Acc += 25;
      break;
    case 0:
      buffedUnit.Crit += 25;
      break;
    default:
      break;
  }

  return buffedUnit;
}
//Remove the buff Ascendant received after battle
function ascendantBuffDown(unit, buffNum) {
  switch (buffNum) {
    case 1:
      unit.Ddg -= 25;
      break;
    case 2:
      unit.Acc -= 25;
      break;
    case 0:
      unit.Crit -= 25;
      break;
    default:
      break;
  }

  return unit;
}

function adjustHemomancer(unit, currHP, dmg, crit) {
  let unitHP = unit.HP;
  let newUnitDmg = dmg + Math.floor((unitHP - currHP) / 5);
  let newUnitCrit = crit + Math.floor((unitHP - currHP) / 5);

  return [newUnitDmg, newUnitCrit];
}

function adjustFrigillan(check, power, hitrate) {
  let newPwr = power;
  let newHit = hitrate;

  if (check) {
    newPwr += 5;
    newHit += 25;
  }

  return [newPwr, newHit];
}

function attachStatus(unit, status) {
  let newUnitStatus = unit;
  let newStatus = [status[0], 0, status[2]];
  switch (status[1]) {
    case "Light":
      newStatus[1] = 1;
      break;
    case "Heavy":
      newStatus[1] = 2;
      break;
    case "Severe":
      newStatus[1] = 3;
      break;
    default:
      newStatus[1] = 0;
      break;
  }
  newUnitStatus.push(newStatus);
  return newUnitStatus;
}

function removeStatus(unit, cond) {
  let newUnitStatus = unit;
  switch (cond) {
    case "turn":
      break;
    case "attack":
      break;
    case "hit":
      break;
    default:
      break;
  }
  for (let i = newUnitStatus.length - 1; i >= 0; i--) {
    if (newUnitStatus[i][1] === 0) {
      newUnitStatus.splice(i, 1);
    }
  }
  return newUnitStatus;
}

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

  const unitAcc = Math.min(unit.Acc - eneDdg / cnt, 100);
  const unitCrit = Math.min(unit.Crit - eneCAvo / cnt, 100);
  const unitDmg = Math.max(unit.Pwr - eneRes / cnt, 0);

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
  if (unit.Class === "Champion") {
    unit.TSpd = Math.max(0, unit.TSpd - 4);
  }
  const [unitW, enemyW] = determineDoubleAttack(unit.TSpd, enemy.TSpd);

  const [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
    5,
    unit,
    enemy
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

export function battleForecast2(unit, oppo) {
  if (unit.Class === "Champion") {
    unit.TSpd = Math.max(0, unit.TSpd - 4);
  }
  if (oppo.Class === "Champion") {
    oppo.TSpd = Math.max(0, oppo.TSpd - 4);
  }
  const TspdDiff = unit.TSpd - oppo.TSpd;
  let unitW = false;
  let oppoW = false;
  if (TspdDiff >= 5) {
    unitW = true;
  } else if (TspdDiff <= -5) {
    oppoW = true;
  }

  const [unitDmg, unitHit, unitCrit, opDmg, opHit, opCrit] = adjustStats(
    5,
    unit,
    oppo
  );

  return (
    <table className="battle-stat">
      <tbody>
        <tr>
          <td>{unit.Class}</td>
          <td></td>
          <td>{oppo.Class}</td>
        </tr>
        <tr>
          <td>{unit.HP.toFixed(0)}</td>
          <td>HP</td>
          <td>{oppo.HP.toFixed(0)}</td>
        </tr>
        <tr>
          <td>{unitHit}</td>
          <td>Hit</td>
          <td>{opHit}</td>
        </tr>
        <tr>
          <td>
            {unitDmg}
            {unitW ? " X2" : ""}
          </td>
          <td>Damage</td>
          <td>
            {opDmg}
            {oppoW ? "X2" : ""}
          </td>
        </tr>
        <tr>
          <td>{unitCrit}</td>
          <td>Critical</td>
          <td>{opCrit}</td>
        </tr>
      </tbody>
    </table>
  );
}

function determineDoubleAttack(speed1, speed2) {
  const speedDiff = speed1 - speed2;
  return [speedDiff >= 5, speedDiff <= -5];
}

function check2RN(num) {
  const rng =
    (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) / 2;
  return rng < num;
}

function check1RN(num) {
  const rng = Math.floor(Math.random() * 100);
  return rng < num;
}

export function simulateBattle(unit, enemy) {
  // switch (unit.Class) {
  //   case "Seeker":(status)
  //     return "+4 Vulnerable to opponent from Exposing Light";
  //   case "Gallant":(done)
  //     return "+5 Dmg from Honorclad";
  //   case "Ranger":(status)
  //     return "+8 Heavy Block from Shield Stance";
  //   case "Aegis":(done)
  //     return "+20% Dmg from Reflection";
  //   case "Frigillan":(done)
  //     return "+5 Pwr and 25 Acc from Defensive Fighter";
  //   case "Monk":(status)
  //     return "+4 Weak to opponent from Nerve Strike";

  //   case "Ellisant":(status)
  //     return "+25 Blind to opponent from Blinding Light";
  //   case "Slayer":(done)
  //     return "20% chance for extra attack from Ricochet";
  //   case "Relic Knight":(done)
  //     return "+6 Def and Frt from Unstoppable";
  //   case "Hemomancer":(done)
  //     return "+1 Pwr and Crit for every 5 missing HP from Dark Magic";
  //   case "Tempest":(done)
  //     return "+1 Dmg for every excess TSpd on follow-up attacks from Swift Strike";
  //   case "Ascendant":(done)
  //     return "+25 Ddg, Acc or Crit from Elemental Fist";
  // }

  // Initialize win/lose counters
  let [unitWin1, unitLose1, unitWin2, unitLose2] = [0, 0, 0, 0];

  const [unitDmg, unitHit, unitCrit, opDmg, opHit] = adjustStats(
    5,
    unit,
    enemy
  );
  let unitCurHP = unit.HP;
  let eneCurHP = enemy.HP;
  let unitStats = {
    unit: unit,
    status: {},
    currHP: unitCurHP,
    Dmg: unitDmg,
    Hit: unitHit,
    Crit: unitCrit,
  };
  let eneStats = {
    unit: enemy,
    status: {},
    currHP: eneCurHP,
    Dmg: opDmg,
    Hit: opHit,
    Crit: 0,
  };

  // Check for immediate draw conditions
  if (unitDmg * unitHit === 0 && opDmg * opHit === 0) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 5000; i++) {
      let round = 0;
      let turn = 0;
      let boostAegis = 0;
      unitStats.currHP = unit.HP;
      eneStats.currHP = enemy.HP;
      while (unitStats.currHP > 0 && eneStats.currHP > 0) {
        turn += 1;
        //Player attacks
        [unitStats.currHP, eneStats.currHP, round, boostAegis] =
          turnProceeding1(unitStats, eneStats, turn, round, boostAegis, i);

        if (eneStats.currHP <= 0) {
          unitWin1++;
          break;
        }
        if (unitStats.currHP <= 0) {
          unitLose1++;
          break;
        }

        //Enemy attacks
        turn += 1;
        [eneStats.currHP, unitStats.currHP, round, boostAegis] =
          turnProceeding1X(eneStats, unitStats, turn, round, boostAegis, i);

        if (unitStats.currHP <= 0) {
          unitLose1++;
          break;
        }
        if (eneStats.currHP <= 0) {
          unitWin1++;
          break;
        }
      }
    }

    //Enemy strikes first
    for (let j = 0; j < 5000; j++) {
      unitStats.currHP = unit.HP;
      eneStats.currHP = enemy.HP;
      let round = 0;
      let turn = 0;
      let boostAegis = 0;
      while (unitCurHP > 0 && eneCurHP > 0) {
        turn += 1;
        [eneStats.currHP, unitStats.currHP, round, boostAegis] =
          turnProceeding1X(eneStats, unitStats, turn, round, boostAegis, j);

        if (unitStats.currHP <= 0) {
          unitLose2++;
          break;
        }
        if (eneStats.currHP <= 0) {
          unitWin2++;
          break;
        }

        //Player unit attacks
        turn += 1;
        [unitStats.currHP, eneStats.currHP, round, boostAegis] =
          turnProceeding1(unitStats, eneStats, turn, round, boostAegis, j);

        if (eneStats.currHP <= 0) {
          unitWin2++;
          break;
        }
        if (unitStats.currHP <= 0) {
          unitLose2++;
          break;
        }
      }
    }
    return (
      <div>
        <p>
          {unit.Class} defeats {enemy.Class} {unitWin1} times and loses{" "}
          {unitLose1} times when attacking first.
        </p>
        <p>
          {unit.Class} defeats {enemy.Class} {unitWin2} times and loses{" "}
          {unitLose2} times when {enemy.Class} attacks first.
        </p>
        <p>
          Win count: {unitWin1 + unitWin2} Lose count: {unitLose1 + unitLose2}{" "}
          Nett: {unitWin1 + unitWin2 - unitLose1 - unitLose2}
        </p>
      </div>
    );
  }
}

export function simulateBattle2(unit, oppo) {
  // Initialize win/lose counters [unitWinsFirst, unitLosesFirst, unitWinsSecond, unitLosesSecond]
  let [unitWin1, unitLose1, unitWin2, unitLose2] = [0, 0, 0, 0];

  const [unitDmg, unitHit, unitCrit, opDmg, opHit, opCrit] = adjustStats(
    5,
    unit,
    oppo
  );
  let unitCurHP = unit.HP;
  let opCurHP = oppo.HP;
  let unitStats = {
    unit: unit,
    currHP: unitCurHP,
    Dmg: unitDmg,
    Hit: unitHit,
    Crit: unitCrit,
  };
  let oppoStats = {
    unit: oppo,
    currHP: opCurHP,
    Dmg: opDmg,
    Hit: opHit,
    Crit: opCrit,
  };

  if (unitDmg * unitHit === 0 && opDmg * opHit === 0) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 5000; i++) {
      let roundU = 0;
      let roundO = 0;
      let turn = 0;
      let boostAegis = [0, 0];
      unitStats.currHP = unit.HP;
      oppoStats.currHP = oppo.HP;
      while (unitStats.currHP > 0 && oppoStats.currHP > 0) {
        turn += 1;
        [unitStats.currHP, oppoStats.currHP, roundU, roundO, boostAegis] =
          turnProceeding2(
            unitStats,
            oppoStats,
            turn,
            roundU,
            roundO,
            boostAegis,
            i
          );

        if (oppoStats.currHP <= 0) {
          unitWin1++;
          break;
        }
        if (unitStats.currHP <= 0) {
          unitLose1++;
          break;
        }

        //Enemy attacks
        turn += 1;
        [oppoStats.currHP, unitStats.currHP, roundO, roundU, boostAegis] =
          turnProceeding2(
            oppoStats,
            unitStats,
            turn,
            roundO,
            roundU,
            boostAegis,
            i
          );

        if (unitStats.currHP <= 0) {
          unitLose1++;
          break;
        }
        if (oppoStats.currHP <= 0) {
          unitWin1++;
          break;
        }

        // if (turn>=10){
        //   break;
        // }
      }
    }

    //Enemy strikes first
    for (let j = 0; j < 5000; j++) {
      let turn = 0;
      let roundU = 0;
      let roundO = 0;
      let boostAegis = [0, 0];
      unitStats.currHP = unit.HP;
      oppoStats.currHP = oppo.HP;
      while (unitStats.currHP > 0 && oppoStats.currHP > 0) {
        turn++;
        [oppoStats.currHP, unitStats.currHP, roundO, roundU, boostAegis] =
          turnProceeding2(
            oppoStats,
            unitStats,
            turn,
            roundO,
            roundU,
            boostAegis,
            j
          );

        if (unitStats.currHP <= 0) {
          unitLose2++;
          break;
        }
        if (oppoStats.currHP <= 0) {
          unitWin2++;
          break;
        }

        //Player unit attacks
        turn += 1;
        [unitStats.currHP, oppoStats.currHP, roundU, roundO, boostAegis] =
          turnProceeding2(
            unitStats,
            oppoStats,
            turn,
            roundU,
            roundO,
            boostAegis,
            j
          );

        if (oppoStats.currHP <= 0) {
          unitWin2++;
          break;
        }
        if (unitStats.currHP <= 0) {
          unitLose2++;
          break;
        }

        // if (turn>=10){
        //   break;
        // }
      }
    }
  }
  return (
    <div>
      <p>
        {unit.Class} defeats {oppo.Class} {unitWin1} times and loses {unitLose1}{" "}
        times when attacking first.
      </p>
      <p>
        {unit.Class} defeats {oppo.Class} {unitWin2} times and loses {unitLose2}{" "}
        times when {oppo.Class} attacks first.
      </p>
      <p>
        Win count: {unitWin1 + unitWin2} Lose count: {unitLose1 + unitLose2}{" "}
        Nett: {unitWin1 + unitWin2 - unitLose1 - unitLose2}
      </p>
    </div>
  );
}

function turnProceeding1(unitStats, oppoStats, turnNum, round, ag, i) {
  // Determine if either unit gets a double attack based on speed difference
  let [unitW, enemyW] = determineDoubleAttack(
    unitStats.unit.TSpd,
    oppoStats.unit.TSpd
  );
  round += 1;
  let rotation = round % 3;

  let newUnit = unitStats.unit;
  let unitClass = unitStats.unit.Class;
  let unitCurrHP = unitStats.currHP;
  let unitDmg = unitStats.Dmg;
  let unitSpd = unitStats.unit.TSpd;
  let unitHit = unitStats.Hit;
  let unitCrit = unitStats.Crit;

  let newOppo = oppoStats.unit;
  let opCurrHP = oppoStats.currHP;
  let opDmg = oppoStats.Dmg;
  let opSpd = oppoStats.unit.TSpd;
  let opHit = oppoStats.Hit;

  let checkFrigillan = false;
  let boostAegis = ag;

  if (unitClass === "Ascendant") {
    newUnit = ascendantBuffUp(unitStats.unit, rotation);
  }

  [unitDmg, unitHit, unitCrit, opDmg, opHit] = adjustStats(i, newUnit, newOppo);

  //Player unit attacks
  if (unitClass === "Hemomancer") {
    [unitDmg, unitCrit] = adjustHemomancer(
      unitStats.unit,
      unitCurrHP,
      unitDmg,
      unitCrit
    );
  }
  if (unitClass === "Frigillan") {
    if (turnNum === 1) {
      checkFrigillan = true;
    }
    [unitDmg, unitHit] = adjustFrigillan(checkFrigillan, unitDmg, unitHit);
  }

  if (check2RN(unitHit)) {
    let newUDmg = unitDmg;
    switch (unitClass) {
      case "Gallant":
        if (opCurrHP * 2 > oppoStats.unit.HP) {
          newUDmg = unitDmg + 5;
        }
        break;
      case "Aegis":
        newUDmg = unitDmg + boostAegis;
        break;
      default:
        break;
    }
    if (check1RN(unitCrit)) {
      if (unitClass === "Reaper" && opCurrHP === oppoStats.unit.HP) {
        opCurrHP -= newUDmg * 3;
      } else {
        opCurrHP -= newUDmg * 2;
      }
    } else {
      opCurrHP -= newUDmg;
    }
    boostAegis = 0;
  }
  if (unitClass === "Slayer" && check1RN(20)) {
    if (check2RN(unitHit)) {
      let newUDmg = unitDmg;
      switch (unitClass) {
        case "Gallant":
          if (opCurrHP * 2 > oppoStats.unit.HP) {
            newUDmg = unitDmg + 5;
          }
          break;
        default:
          break;
      }
      if (check1RN(unitCrit)) {
        opCurrHP -= newUDmg * 2;
      } else {
        opCurrHP -= newUDmg;
      }
    }
  }

  if (unitCurrHP <= 0 || opCurrHP <= 0) {
    return [unitCurrHP, opCurrHP, round, boostAegis];
  }

  //Enemy counters
  if (check2RN(opHit)) {
    checkFrigillan = false;
    if (turnNum === 1 && unitClass === "Relic Knight") {
      unitCurrHP -= opDmg - 6;
      boostAegis += Math.floor((opDmg - 6) / 5);
    } else {
      unitCurrHP -= opDmg;
      boostAegis += Math.floor(opDmg / 5);
    }
  }

  if (unitClass === "Ascendant") {
    newUnit = ascendantBuffDown(newUnit, rotation);
  }

  //Terminates function if any currHP reaches 0
  if (unitCurrHP <= 0 || opCurrHP <= 0) {
    return [unitCurrHP, opCurrHP, round];
  }

  //If player unit doubles
  if (unitW || enemyW) {
    round += 1;

    if (unitClass === "Ascendant") {
      rotation = round % 3;
      newUnit = ascendantBuffUp(unitStats.unit, rotation);
    }

    [unitDmg, unitHit, unitCrit, opDmg, opHit] = adjustStats(
      i,
      newUnit,
      newOppo
    );
    if (unitClass === "Frigillan") {
      [unitDmg, unitHit] = adjustFrigillan(checkFrigillan, unitDmg, unitHit);
    }
    if (unitClass === "Hemomancer") {
      [unitDmg, unitCrit] = adjustHemomancer(
        unitStats.unit,
        unitCurrHP,
        unitDmg,
        unitCrit
      );
    }

    if ((turnNum === 1) & (unitClass === "Relic Knight")) {
      opDmg -= 6;
    }
  }

  if (unitW) {
    if (check2RN(unitHit)) {
      let newUDmg = unitDmg;
      switch (unitClass) {
        case "Gallant":
          if (opCurrHP * 2 > oppoStats.unit.HP) {
            newUDmg = unitDmg + 5;
          }
          break;
        case "Aegis":
          newUDmg = unitDmg + boostAegis;
          break;
        case "Tempest":
          const excessSpd = Math.floor(Math.max(unitSpd - opSpd - 5, 0));
          newUDmg = unitDmg + excessSpd;
          break;
        default:
          break;
      }
      if (check1RN(unitCrit)) {
        if (unitClass === "Reaper" && opCurrHP === oppoStats.unit.HP) {
          opCurrHP -= newUDmg * 3;
        } else {
          opCurrHP -= newUDmg * 2;
        }
      } else {
        opCurrHP -= newUDmg;
      }
      boostAegis = 0;
    }
    if (unitClass === "Slayer" && check1RN(20)) {
      if (check2RN(unitHit)) {
        if (check1RN(unitCrit)) {
          opCurrHP -= unitDmg * 2;
        } else {
          opCurrHP -= unitDmg;
        }
      }
    }
  }

  //If enemy doubles
  if (enemyW) {
    if (check2RN(opHit)) {
      checkFrigillan = false;
      if (turnNum === 1 && unitClass === "Relic Knight") {
        unitCurrHP -= opDmg - 6;
        boostAegis += Math.floor((opDmg - 6) / 5);
      } else {
        unitCurrHP -= opDmg;
        boostAegis += Math.floor(opDmg / 5);
      }
    }
  }
  if (unitW || enemyW) {
    if (unitClass === "Ascendant") {
      newUnit = ascendantBuffDown(newUnit, rotation);
    }
  }

  return [unitCurrHP, opCurrHP, round, boostAegis];
}

function turnProceeding1X(unitStats, oppoStats, turnNum, round, ag, i) {
  // Determine if either unit gets a double attack based on speed difference
  let [unitW, enemyW] = determineDoubleAttack(
    unitStats.unit.TSpd,
    oppoStats.unit.TSpd
  );
  round += 1;
  let rotation = round % 3;

  let newUnit = unitStats.unit;
  let unitCurrHP = unitStats.currHP;
  let unitDmg = unitStats.Dmg;
  let unitSpd = unitStats.unit.TSpd;
  let unitHit = unitStats.Hit;

  let newOppo = oppoStats.unit;
  let opClass = oppoStats.unit.Class;
  let opCurrHP = oppoStats.currHP;
  let opDmg = oppoStats.Dmg;
  let opSpd = oppoStats.unit.TSpd;
  let opHit = oppoStats.Hit;
  let opCrit = oppoStats.Crit;

  let checkFrigillan = false;
  let boostAegis = ag;

  if (opClass === "Ascendant") {
    newOppo = ascendantBuffUp(oppoStats.unit, rotation);
  }

  [opDmg, opHit, opCrit, unitDmg, unitHit] = adjustStats(i, newOppo, newUnit);
  if (opClass === "Frigillan") {
    if (turnNum === 1) {
      checkFrigillan = true;
    }
  }

  //Enemy unit attacks
  if (check2RN(unitHit)) {
    checkFrigillan = false;
    if (turnNum === 1 && opClass === "Relic Knight") {
      opCurrHP -= unitDmg - 6;
      boostAegis += Math.floor((unitDmg - 6) / 5);
    } else {
      opCurrHP -= unitDmg;
      boostAegis += Math.floor(unitDmg / 5);
    }
  }

  //Player counters
  if (opClass === "Hemomancer") {
    [opDmg, opCrit] = adjustHemomancer(oppoStats.unit, opCurrHP, opDmg, opCrit);
  }
  if (opClass === "Frigillan") {
    [opDmg, opHit] = adjustFrigillan(checkFrigillan, opDmg, opHit);
  }

  if (check2RN(opHit)) {
    let newODmg = opDmg;
    switch (opClass) {
      case "Gallant":
        if (unitCurrHP * 2 > unitStats.unit.HP) {
          newODmg = opDmg + 5;
        }
        break;
      case "Aegis":
        newODmg = opDmg + boostAegis;
        break;
      default:
        break;
    }
    if (check1RN(opCrit)) {
      if (opClass === "Reaper" && unitCurrHP === unitCurrHP.unit.HP) {
        unitCurrHP -= newODmg * 3;
      } else {
        unitCurrHP -= newODmg * 2;
      }
    } else {
      unitCurrHP -= newODmg;
    }
    boostAegis = 0;
  }

  if (opClass === "Slayer" && check1RN(20)) {
    if (check2RN(opHit)) {
      if (check1RN(opCrit)) {
        unitCurrHP -= opDmg * 2;
      } else {
        unitCurrHP -= opDmg;
      }
    }
  }

  if (opClass === "Ascendant") {
    newOppo = ascendantBuffDown(newOppo, rotation);
  }

  //Terminates function if any currHP reaches 0
  if (unitCurrHP <= 0 || opCurrHP <= 0) {
    return [unitCurrHP, opCurrHP, round, boostAegis];
  }

  //If enemy unit doubles
  if (unitW || enemyW) {
    round += 1;

    if (opClass === "Ascendant") {
      rotation = round % 3;
      newOppo = ascendantBuffUp(oppoStats.unit, rotation);
    }

    [opDmg, opHit, opCrit, unitDmg, unitHit] = adjustStats(i, newOppo, newUnit);
    if (opClass === "Hemomancer") {
      [opDmg, opCrit] = adjustHemomancer(
        oppoStats.unit,
        opCurrHP,
        opDmg,
        opCrit
      );
    }

    if ((turnNum === 1) & (opClass === "Relic Knight")) {
      unitDmg -= 6;
    }
  }

  if (unitW) {
    if (check2RN(unitHit)) {
      checkFrigillan = false;
      if (turnNum === 1 && opClass === "Relic Knight") {
        opCurrHP -= unitDmg - 6;
        boostAegis += Math.floor((unitDmg - 6) / 5);
      } else {
        opCurrHP -= unitDmg;
        boostAegis += Math.floor(unitDmg / 5);
      }
    }
  }

  //If player doubles
  if (opClass === "Frigillan") {
    [opDmg, opHit] = adjustFrigillan(checkFrigillan, opDmg, opHit);
  }
  if (enemyW) {
    if (check2RN(opHit)) {
      let newODmg = opDmg;
      switch (opClass) {
        case "Gallant":
          if (unitCurrHP * 2 > unitStats.unit.HP) {
            newODmg = opDmg + 5;
          }
          break;
        case "Tempest":
          const excessSpd = Math.floor(Math.max(opSpd - unitSpd - 5, 0));
          newODmg = opDmg + excessSpd;
          break;
        case "Aegis":
          newODmg = opDmg + boostAegis;
          break;
        default:
          break;
      }
      if (check1RN(opCrit)) {
        if (opClass === "Reaper" && unitCurrHP === unitStats.unit.HP) {
          unitCurrHP -= newODmg * 3;
        } else {
          unitCurrHP -= newODmg * 2;
        }
      } else {
        unitCurrHP -= newODmg;
      }
      boostAegis = 0;
    }
    if (opClass === "Slayer" && check1RN(20)) {
      if (check2RN(opHit)) {
        if (check1RN(opCrit)) {
          unitCurrHP -= opDmg * 2;
        } else {
          unitCurrHP -= opDmg;
        }
      }
    }
  }
  if (unitW || enemyW) {
    if (opClass === "Ascendant") {
      newOppo = ascendantBuffDown(newOppo, rotation);
    }
  }

  return [unitCurrHP, opCurrHP, round, boostAegis];
}

function turnProceeding2(unitStats, oppoStats, turnNum, roundU, roundO, ag, i) {
  // Determine if either unit gets a double attack based on speed difference
  let [unitW, enemyW] = determineDoubleAttack(
    unitStats.unit.TSpd,
    oppoStats.unit.TSpd
  );
  roundU += 1;
  roundO += 1;
  let rotationU = roundU % 3;
  let rotationO = roundO % 3;

  let newUnit = unitStats.unit;
  let unitClass = unitStats.unit.Class;
  let unitCurrHP = unitStats.currHP;
  let unitStatus = unitStats.status;
  let unitDmg = unitStats.Dmg;
  let unitSpd = unitStats.unit.TSpd;
  let unitHit = unitStats.Hit;
  let unitCrit = unitStats.Crit;

  let newOppo = oppoStats.unit;
  let opClass = oppoStats.unit.Class;
  let opCurrHP = oppoStats.currHP;
  let opStatus = oppoStats.status;
  let opDmg = oppoStats.Dmg;
  let opSpd = oppoStats.unit.TSpd;
  let opHit = oppoStats.Hit;
  let opCrit = oppoStats.Crit;

  let checkFrigillanU = false;
  let checkFrigillanO = false;
  let boostAegisU = ag[0];
  let boostAegisO = ag[1];

  if (unitClass === "Ascendant") {
    newUnit = ascendantBuffUp(unitStats.unit, rotationU);
  }
  if (opClass === "Ascendant") {
    newOppo = ascendantBuffUp(oppoStats.unit, rotationO);
  }
  [unitDmg, unitHit, unitCrit, opDmg, opHit, opCrit] = adjustStats(
    i,
    newUnit,
    newOppo
  );

  //Player unit attacks
  if (unitClass === "Hemomancer") {
    [unitDmg, unitCrit] = adjustHemomancer(
      unitStats.unit,
      unitCurrHP,
      unitStats.Dmg,
      unitStats.Crit
    );
  }
  if ((turnNum === 1) & (opClass === "Relic Knight")) {
    unitDmg -= 6;
  }
  if (unitClass === "Frigillan") {
    if (turnNum === 1) {
      checkFrigillanU = true;
    }
    [unitDmg, unitHit] = adjustFrigillan(checkFrigillanU, unitDmg, unitHit);
  }
  if (opClass === "Frigillan") {
    if (turnNum === 1) {
      checkFrigillanO = true;
    }
  }

  if (check2RN(unitHit)) {
    checkFrigillanO = false;
    let newUDmg = unitDmg;
    switch (unitClass) {
      case "Seeker":
        opStatus = attachStatus(opStatus, [4, "Light", "Vulnerable"]);
        break;
      case "Gallant":
        if (opCurrHP * 2 > oppoStats.unit.HP) {
          newUDmg = unitDmg + 5;
        }
        break;
      case "Aegis":
        newUDmg = unitDmg + boostAegisU;
        break;
      default:
        break;
    }
    if (check1RN(unitCrit)) {
      if (unitClass === "Reaper" && opCurrHP === oppoStats.unit.HP) {
        opCurrHP -= newUDmg * 3;
        boostAegisO += Math.floor((newUDmg * 3) / 5);
      } else {
        opCurrHP -= newUDmg * 2;
        boostAegisO += Math.floor((newUDmg * 2) / 5);
      }
    } else {
      opCurrHP -= newUDmg;
      boostAegisO += Math.floor(newUDmg / 5);
    }
    boostAegisU = 0;
  }
  if (unitClass === "Slayer" && check1RN(20)) {
    if (check2RN(unitHit)) {
      checkFrigillanO = false;
      if (check1RN(unitCrit)) {
        opCurrHP -= unitDmg * 2;
      } else {
        opCurrHP -= unitDmg;
      }
    }
  }
  if (unitCurrHP <= 0 || opCurrHP <= 0) {
    return [unitCurrHP, opCurrHP, roundU, roundO, [boostAegisU, boostAegisO]];
  }

  //Enemy counters
  if (opClass === "Hemomancer") {
    [opDmg, opCrit] = adjustHemomancer(
      oppoStats.unit,
      opCurrHP,
      oppoStats.Dmg,
      oppoStats.Crit
    );
  }
  if (turnNum === 1 && unitClass === "Relic Knight") {
    opDmg -= 6;
  }
  if (opClass === "Frigillan") {
    [opDmg, opHit] = adjustFrigillan(checkFrigillanO, opDmg, opHit);
  }
  if (check2RN(opHit)) {
    checkFrigillanU = false;
    let newODmg = unitDmg;
    switch (opClass) {
      case "Gallant":
        if (unitCurrHP * 2 > unitStats.unit.HP) {
          newODmg = opDmg + 5;
        }
        break;
      case "Aegis":
        newODmg = opDmg + boostAegisO;
        break;
      default:
        break;
    }
    if (check1RN(opCrit)) {
      if (opClass === "Reaper" && unitCurrHP === unitStats.unit.HP) {
        unitCurrHP -= newODmg * 3;
        boostAegisU += Math.floor((newODmg * 3) / 5);
      } else {
        unitCurrHP -= newODmg * 2;
        boostAegisU += Math.floor((newODmg * 2) / 5);
      }
    } else {
      unitCurrHP -= newODmg;
      boostAegisU += Math.floor(newODmg / 5);
    }
    boostAegisO = 0;
  }
  if (opClass === "Slayer" && check1RN(20)) {
    if (check2RN(opHit)) {
      checkFrigillanU = false;
      if (check1RN(opCrit)) {
        unitCurrHP -= opDmg * 2;
      } else {
        unitCurrHP -= opDmg;
      }
    }
  }

  if (unitClass === "Ascendant") {
    newUnit = ascendantBuffDown(newUnit, rotationU);
  }
  if (opClass === "Ascendant") {
    newOppo = ascendantBuffDown(newOppo, rotationO);
  }

  //Terminates function if any currHP reaches 0
  if (unitCurrHP <= 0 || opCurrHP <= 0) {
    return [unitCurrHP, opCurrHP, roundU, roundO, [boostAegisU, boostAegisO]];
  }

  //If player unit doubles
  if (unitW || enemyW) {
    roundU += 1;
    roundO += 1;
    if (unitClass === "Ascendant") {
      rotationU = roundU % 3;
      newUnit = ascendantBuffUp(unitStats.unit, rotationU);
    }
    if (opClass === "Ascendant") {
      rotationO = roundO % 3;
      newOppo = ascendantBuffUp(oppoStats.unit, rotationO);
    }
    [unitDmg, unitHit, unitCrit, opDmg, opHit, opCrit] = adjustStats(
      i,
      newUnit,
      newOppo
    );
    if (unitClass === "Hemomancer") {
      [unitDmg, unitCrit] = adjustHemomancer(
        unitStats.unit,
        unitCurrHP,
        unitStats.Dmg,
        unitStats.Crit
      );
    }
    if (opClass === "Hemomancer") {
      [opDmg, opCrit] = adjustHemomancer(
        oppoStats.unit,
        opCurrHP,
        oppoStats.Dmg,
        oppoStats.Crit
      );
    }
    if ((turnNum === 1) & (opClass === "Relic Knight")) {
      unitDmg -= 6;
    }
    if ((turnNum === 1) & (unitClass === "Relic Knight")) {
      opDmg -= 6;
    }
    if (unitClass === "Frigillan") {
      [unitDmg, unitHit] = adjustFrigillan(checkFrigillanU, unitDmg, unitHit);
    }
    if (opClass === "Frigillan") {
      [opDmg, opHit] = adjustFrigillan(checkFrigillanO, opDmg, opHit);
    }
  }

  if (unitW) {
    if (check2RN(unitHit)) {
      checkFrigillanO = false;
      let newUDmg = unitDmg;
      switch (unitClass) {
        case "Gallant":
          if (opCurrHP * 2 > oppoStats.unit.HP) {
            newUDmg = unitDmg + 5;
          }
          break;
        case "Aegis":
          newUDmg = unitDmg + boostAegisU;
          break;
        case "Tempest":
          const excessSpd = Math.floor(Math.max(unitSpd - opSpd - 5, 0));
          newUDmg = unitDmg + excessSpd;
          break;
        default:
          break;
      }
      if (check1RN(unitCrit)) {
        if (unitClass === "Reaper" && opCurrHP === oppoStats.unit.HP) {
          opCurrHP -= newUDmg * 3;
          boostAegisO += Math.floor((newUDmg * 3) / 5);
        } else {
          opCurrHP -= newUDmg * 2;
          boostAegisO += Math.floor((newUDmg * 2) / 5);
        }
      } else {
        opCurrHP -= newUDmg;
        boostAegisO += Math.floor(newUDmg / 5);
      }
      boostAegisU = 0;
    }
    if (unitClass === "Slayer" && check1RN(20)) {
      if (check2RN(unitHit)) {
        checkFrigillanO = false;
        if (check1RN(unitCrit)) {
          opCurrHP -= unitDmg * 2;
        } else {
          opCurrHP -= unitDmg;
        }
      }
    }
  }

  //If enemy doubles
  if (enemyW) {
    if (check2RN(opHit)) {
      checkFrigillanU = false;
      let newODmg = opDmg;
      switch (opClass) {
        case "Gallant":
          if (unitCurrHP * 2 > unitStats.unit.HP) {
            newODmg = opDmg + 5;
          }
          break;
        case "Aegis":
          newODmg = opDmg + boostAegisO;
          break;
        case "Tempest":
          const excessSpd = Math.floor(Math.max(opSpd - unitSpd - 5, 0));
          newODmg = opDmg + excessSpd;
          break;
        default:
          break;
      }
      if (check1RN(opCrit)) {
        if (opClass === "Reaper" && unitCurrHP === unitStats.unit.HP) {
          unitCurrHP -= newODmg * 3;
          boostAegisU += Math.floor((newODmg * 3) / 5);
        } else {
          unitCurrHP -= newODmg * 2;
          boostAegisU += Math.floor((newODmg * 2) / 5);
        }
      } else {
        unitCurrHP -= newODmg;
        boostAegisU += Math.floor(newODmg / 5);
      }
      boostAegisO = 0;
    }
    if (opClass === "Slayer" && check1RN(20)) {
      if (check2RN(opHit)) {
        checkFrigillanU = false;
        if (check1RN(opCrit)) {
          unitCurrHP -= opDmg * 2;
        } else {
          unitCurrHP -= opDmg;
        }
      }
    }
  }
  if (unitW || enemyW) {
    if (unitClass === "Ascendant") {
      newUnit = ascendantBuffDown(newUnit, rotationU);
    }
    if (opClass === "Ascendant") {
      newOppo = ascendantBuffDown(newOppo, rotationO);
    }
  }

  return [unitCurrHP, opCurrHP, roundU, roundO, [boostAegisU, boostAegisO]];
}
