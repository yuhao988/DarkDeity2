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

function adjustStats(self, enemy) {
  let selfDmg = 0;
  let eneDmg = 0;

  switch (self.Class) {
    case "Elementalist":
      if (enemy.Class === "Scholar") {
        selfDmg = Math.max(0, self.Pwr + 4 - (enemy.For + 2)).toFixed(0);
      } else {
        selfDmg = Math.max(0, self.Pwr + 4 - enemy.For).toFixed(0);
      }
      break;
    case "Gale":
      switch (enemy.Class) {
        case "Warden":
          selfDmg = Math.max(0, self.Pwr + 6 - (enemy.Def + 6)).toFixed(0);
          break;
        default:
          selfDmg = Math.max(0, self.Pwr + 6 - enemy.Def).toFixed(0);
          break;
      }
      break;
    case "Champion":
      switch (enemy.Class) {
        case "Warden":
          selfDmg = Math.max(0, self.Pwr * 1.25 - (enemy.Def + 6)).toFixed(0);

          break;
        default:
          selfDmg = Math.max(0, self.Pwr * 1.25 - enemy.Def).toFixed(0);
          break;
      }
      break;
    default:
      if (self["Phy/Mag"] === "Physical") {
        switch (enemy.Class) {
          case "Warden":
            selfDmg = Math.max(0, self.Pwr - (enemy.Def + 6)).toFixed(0);
            
            break;
          default:
            selfDmg = Math.max(0, self.Pwr - enemy.Def).toFixed(0);
            break;
        }
      } else if (self["Phy/Mag"] === "Magical") {
        if (enemy.Class === "Scholar") {
          selfDmg = Math.max(0, self.Pwr - (enemy.For + 2)).toFixed(0);
        } else {
          selfDmg = Math.max(0, self.Pwr - enemy.For).toFixed(0);
        }
      }
      break;
  }
  switch (enemy.Class) {
    case "Elementalist":
      if (self.Class === "Scholar") {
        eneDmg = Math.max(0, enemy.Pwr + 4 - (self.For + 2)).toFixed(0);
      } else {
        eneDmg = Math.max(0, enemy.Pwr + 4 - self.For).toFixed(0);
      }
      break;
    case "Gale":
      switch (self.Class) {
        case "Warden":
          eneDmg = Math.max(0, enemy.Pwr + 6 - (self.Def + 6)).toFixed(0);
          break;
        default:
          eneDmg = Math.max(0, enemy.Pwr + 6 - self.Def).toFixed(0);
          break;
      }
      break;
    case "Champion":
      switch (self.Class) {
        case "Warden":
          eneDmg = Math.max(0, enemy.Pwr * 1.25 - (self.Def + 6)).toFixed(0);
          break;
        default:
          eneDmg = Math.max(0, enemy.Pwr * 1.25 - self.Def).toFixed(0);
          break;
      }
      break;
    default:
      if (enemy["Phy/Mag"] === "Physical") {
        switch (self.Class) {
          case "Warden":
            eneDmg = Math.max(0, enemy.Pwr - (self.Def + 6)).toFixed(0);
            break;
          default:
            eneDmg = Math.max(0, enemy.Pwr - self.Def).toFixed(0);
            break;
        }
      } else if (enemy["Phy/Mag"] === "Magical") {
        if (enemy.Class === "Scholar") {
          eneDmg = Math.max(0, enemy.Pwr - (self.For + 2)).toFixed(0);
        } else {
          eneDmg = Math.max(0, enemy.Pwr - self.For).toFixed(0);
        }
      }
      break;
  }

  let selfHit = 0;
  switch (enemy.Class) {
    case "Nightblade":
      selfHit = Math.max(0, Math.min(100, self.Acc - (enemy.Ddg + 20))).toFixed(
        0
      );
      break;
    case "Cutthroat":
      selfHit = Math.max(
        0,
        Math.min(100, self.Acc - (enemy.Ddg + enemy.Lck))
      ).toFixed(0);
      break;
    case "Ancarant":
      selfHit = Math.max(0, Math.min(100, self.Acc - (enemy.Ddg + 25))).toFixed(
        0
      );
      break;
    default:
      selfHit = Math.max(0, Math.min(100, self.Acc - enemy.Ddg)).toFixed(0);
      break;
  }

  let eneHit = 0;
  switch (self.Class) {
    case "Nightblade":
      eneHit = Math.max(0, Math.min(100, enemy.Acc - (self.Ddg + 20))).toFixed(
        0
      );
      break;
    case "Cutthroat":
      eneHit = Math.max(
        0,
        Math.min(100, enemy.Acc - (self.Ddg + self.Lck))
      ).toFixed(0);
      break;
    case "Ancarant":
      eneHit = Math.max(0, Math.min(100, enemy.Acc - (self.Ddg + 25))).toFixed(
        0
      );
      break;
    default:
      eneHit = Math.max(0, Math.min(100, enemy.Acc - self.Ddg)).toFixed(0);
      break;
  }

  if (self.Class === "Dreadnought" || enemy.Class === "Dreadnought") {
    selfHit = 100;
    eneHit = 100;
  }

  let selfCrit = 0,
    eneCrit = 0;
  if (enemy.Lck) {
    switch (self.Class) {
      case "Devoted":
        selfCrit = Math.max(
          0,
          Math.min(100, self.Crit + 8 - enemy.Lck * 2)
        ).toFixed(0);
        break;
      case "Conduit":
        selfCrit = Math.max(
          0,
          Math.min(100, self.Crit + 6 - enemy.Lck * 2)
        ).toFixed(0);

        break;
      default:
        selfCrit = Math.max(
          0,
          Math.min(100, self.Crit - enemy.Lck * 2)
        ).toFixed(0);
        break;
    }
    switch (enemy.Class) {
      case "Devoted":
        eneCrit = Math.max(
          0,
          Math.min(100, enemy.Crit + 8 - self.Lck * 2)
        ).toFixed(0);
        break;
      case "Conduit":
        eneCrit = Math.max(
          0,
          Math.min(100, enemy.Crit + 6 - self.Lck * 2)
        ).toFixed(0);
        break;
      default:
        eneCrit = Math.max(0, Math.min(100, enemy.Crit - self.Lck * 2)).toFixed(
          0
        );
        break;
    }
  } else {
    switch (self.Class) {
      case "Devoted":
        selfCrit = Math.max(
          0,
          Math.min(100, self.Crit + 8 - enemy.CAvo)
        ).toFixed(0);
        break;
      case "Conduit":
        selfCrit = Math.max(
          0,
          Math.min(100, self.Crit + 6 - enemy.CAvo)
        ).toFixed(0);
        break;
      default:
        selfCrit = Math.max(0, Math.min(100, self.Crit - enemy.CAvo)).toFixed(
          0
        );
        break;
    }

    eneCrit = 0;
  }
  return [selfDmg, selfHit, selfCrit, eneDmg, eneHit, eneCrit];
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
  if (unit.Class === "Champion") {
    unit.TSpd = Math.max(0, unit.TSpd - 4);
  }
  const TspdDiff = unit.TSpd - enemy.TSpd;
  let unitW = false;
  let enemyW = false;
  if (TspdDiff >= 5) {
    unitW = true;
  } else if (TspdDiff <= -5) {
    enemyW = true;
  }

  const [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(unit, enemy);

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

export function simulateBattle(unit, enemy) {
  let unitW = false;
  let enemyW = false;
  if (unit.TSpd - enemy.TSpd >= 5) {
    unitW = true;
  } else if (unit.TSpd - enemy.TSpd <= -5) {
    enemyW = true;
  }

  // switch (unit.Class) {
  //   case "Seeker":
  //     return "+4 Vulnerable to opponent from Exposing Light";
  //   case "Gallant":
  //     return "+5 Dmg from Honorclad";
  //   case "Ranger":
  //     return "+8 Heavy Block from Shield Stance";
  //   case "Aegis":
  //     return "+20% Dmg from Reflection";
  //   case "Frigillan":
  //     return "+5 Pwr and 25 Acc from Defensive Fighter";
  //   case "Monk":
  //     return "+4 Weak to opponent from Nerve Strike";

  //   case "Ellisant":
  //     return "+25 Blind to opponent from Blinding Light";
  //   case "Slayer":
  //     return "20% chance for extra attack from Ricochet";
  //   case "Relic Knight":
  //     return "+6 Def and Frt from Unstoppable";
  //   case "Hemomancer":
  //     return "+1 Pwr and Crit for every 5 missing HP from Dark Magic";
  //   case "Tempest":
  //     return "+1 Dmg for every excess TSpd on follow-up attacks from Swift Strike";
  //   case "Ascendant":(done)
  //     return "+25 Ddg, Acc or Crit from Elemental Fist";
  // }

  let winloseCnt = [0, 0, 0, 0];

  let [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(unit, enemy);
let cnt=0
  if ((unitDmg === 0 && eneDmg === 0) || (unitHit === 0 && eneHit === 0)) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    
    for (let i = 0; i < 5000; i++) {
      let unitCurHP = unit.HP;
      let eneCurHP = enemy.HP;
      let round = 0;
      
      while (unitCurHP > 0 && eneCurHP > 0) {
        round += 1;
        let rotation = round % 3;
        if (unit.Class === "Ascendant") {
          cnt++
          switch (rotation) {
            case 1:
              unit.Ddg += 25;
              break;
            case 2:
              unit.Acc += 25;
              break;
            case 0:
              unit.Crit += 25;
              break;
            default:
              break;
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }
        //Player unit attacks
        let rngUnit =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (rngUnit < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //Enemy counters
        let rngEne =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (rngEne < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //If player unit doubles
        let rngUnit2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (unitW) {
          if (unit.Class === "Ascendant") {
            cnt--
            switch (rotation) {
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

            round += 1;
            rotation = round % 3;
            cnt++
            switch (rotation) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
          }

          if (rngUnit2 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        let rngEne2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (enemyW && rngEne2 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        if (unit.Class === "Ascendant") {
          cnt--
          switch (rotation) {
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
        }
        //Enemy attacks
        round += 1;
        if (unit.Class === "Ascendant") {
          rotation = round % 3;
          cnt++
          switch (rotation) {
            case 1:
              unit.Ddg += 25;
              break;
            case 2:
              unit.Acc += 25;
              break;
            case 0:
              unit.Crit += 25;
              break;
            default:
              break;
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }
        let rngEne3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (rngEne3 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //Player unit counters
        let rngUnit3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (rngUnit3 < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        let rngEne4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        if (enemyW && rngEne4 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        let rngUnit4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        //If player unit doubles
        if (unitW) {
          if (unit.Class === "Ascendant") {
            cnt--
            switch (rotation) {
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

            round += 1;
            rotation = round % 3;
            cnt++
            switch (rotation) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
          }
          if (rngUnit4 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        if (unit.Class === "Ascendant") {
          cnt--
          switch (rotation) {
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
        }
      }
    }
    //Enemy strikes first
    for (let j = 0; j < 5000; j++) {
      let unitCurHP = unit.HP;
      let eneCurHP = enemy.HP;
      let round = 0;
      while (unitCurHP > 0 && eneCurHP > 0) {
        round += 1;
        let rotation = round % 3;
        if (unit.Class === "Ascendant") {
          cnt++
          switch (rotation) {
            case 1:
              unit.Ddg += 25;
              break;
            case 2:
              unit.Acc += 25;
              break;
            case 0:
              unit.Crit += 25;
              break;
            default:
              break;
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }
        let rngUnit =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngEne =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngEne2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngEne3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngEne4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        //Enemy attacks
        if (rngEne < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }

        //Player unit counters
        if (rngUnit < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW && rngEne2 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW) {
          if (unit.Class === "Ascendant") {
            cnt--
            switch (rotation) {
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

            round += 1;
            rotation = round % 3;
            cnt++
            switch (rotation) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
          }
          if (rngUnit2 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        if (unit.Class === "Ascendant") {
          cnt--
          switch (rotation) {
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
        }

        //Player unit attacks
        round += 1;
        rotation = round % 3;
        if (unit.Class === "Ascendant") {
          cnt++
          switch (rotation) {
            case 1:
              unit.Ddg += 25;
              break;
            case 2:
              unit.Acc += 25;
              break;
            case 0:
              unit.Crit += 25;
              break;
            default:
              break;
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }
        if (rngUnit3 < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //Enemy counters
        if (rngEne3 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW) {
          if (unit.Class === "Ascendant") {
            cnt--
            switch (rotation) {
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

            round += 1;
            rotation = round % 3;
            cnt++
            switch (rotation) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
          }
          if (rngUnit4 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW && rngEne4 < eneHit) {
          unitCurHP -= eneDmg;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        if (unit.Class === "Ascendant") {
          cnt--
          switch (rotation) {
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
        <p>
          Win count: {winloseCnt[0] + winloseCnt[2]} Lose count:{" "}
          {winloseCnt[1] + winloseCnt[3]} Nett:{" "}
          {winloseCnt[0] + winloseCnt[2] - winloseCnt[1] - winloseCnt[3]}
        </p>
        <div>{console.log(cnt)}</div>
      </div>
    );
  }
}

export function simulateBattle2(unit, oppo) {
  let unitW = false;
  let enemyW = false;
  if (unit.TSpd - oppo.TSpd >= 5) {
    unitW = true;
  } else if (unit.TSpd - oppo.TSpd <= -5) {
    enemyW = true;
  }

  let winloseCnt = [0, 0, 0, 0];

  let [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
    unit,
    oppo
  );

  if ((unitDmg === 0 && eneDmg === 0) || (unitHit === 0 && eneHit === 0)) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 5000; i++) {
      let unitCurHP = unit.HP;
      let eneCurHP = oppo.HP;
      let roundU = 0;
      let roundO = 0;
      while (unitCurHP > 0 && eneCurHP > 0) {
        let rngUnit =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        roundU += 1;
        roundO += 1;
        let rotationU = roundU % 3;
        let rotationO = roundO % 3;
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
          }

          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
            unit,
            oppo
          );
        }
        //console.log(unitHit,unitCrit,eneHit);
        //Player unit attacks
        if (rngUnit < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //Enemy counters
        if (rngOppo < eneHit) {
          if (Math.floor(Math.random() * 100) < opCrit) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            unitCurHP -= eneDmg;
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //If player unit doubles
        //console.log(unitHit,unitCrit,eneHit);
        if (unitW) {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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

            roundU += 1;
            rotationU = roundU % 3;
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngUnit2 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        if (enemyW) {
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }

            roundO += 1;
            rotationO = roundO % 3;
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngOppo2 < eneHit) {
            if (Math.floor(Math.random() * 100) < opCrit) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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
          }
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }
          }
        }

        //Enemy attacks
        roundU += 1;
        roundO += 1;
        rotationU = roundU % 3;
        rotationO = roundO % 3;
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
          }

          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
            unit,
            oppo
          );
        }
        if (rngOppo3 < eneHit) {
          if (Math.floor(Math.random() * 100) < opCrit) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            unitCurHP -= eneDmg;
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //Player unit counters
        //console.log(unitHit,unitCrit,eneHit);
        if (rngUnit3 < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles
        if (enemyW) {
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }

            roundO += 1;
            rotationO = roundO % 3;
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngOppo4 < eneHit) {
            if (Math.floor(Math.random() * 100) < opCrit) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        //If player unit doubles
        
        if (unitW) {
          //console.log(unitHit,unitCrit,eneHit);
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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

            roundU += 1;
            rotationU = roundU % 3;
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngUnit4 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
          if (eneCurHP <= 0) {
            winloseCnt[0]++;
            break;
          }
        }
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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
          }
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }
          }
        }
      }
    }
    //Enemy strikes first
    for (let j = 0; j < 5000; j++) {
      let unitCurHP = unit.HP;
      let eneCurHP = oppo.HP;
      let roundU = 0;
      let roundO = 0;
      while (unitCurHP > 0 && eneCurHP > 0) {
        let rngUnit =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngUnit4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo2 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo3 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        let rngOppo4 =
          (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)) /
          2;
        roundU += 1;
        roundO += 1;
        let rotationU = roundU % 3;
        let rotationO = roundO % 3;
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
          }

          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
            unit,
            oppo
          );
        }
        //Enemy attacks
        if (rngOppo < eneHit) {
          if (Math.floor(Math.random() * 100) < opCrit) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            unitCurHP -= eneDmg;
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }

        //Player unit counters
        if (rngUnit < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW) {
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }

            roundO += 1;
            rotationO = roundO % 3;
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngOppo2 < eneHit) {
            if (Math.floor(Math.random() * 100) < opCrit) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW) {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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

            roundU += 1;
            rotationU = roundU % 3;
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngUnit2 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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
          }
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }
          }
        }

        //Player unit attacks
        roundO += 1;
        roundU += 1;
        rotationU = roundU % 3;
        rotationO = roundO % 3;
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
          }

          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
            unit,
            oppo
          );
        }
        if (rngUnit3 < unitHit) {
          if (Math.floor(Math.random() * 100) < unitCrit) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            eneCurHP -= unitDmg;
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //Enemy counters
        if (rngOppo3 < eneHit) {
          if (Math.floor(Math.random() * 100) < opCrit) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            unitCurHP -= eneDmg;
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        //If player unit doubles
        if (unitW) {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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

            roundU += 1;
            rotationU = roundU % 3;
            switch (rotationU) {
              case 1:
                unit.Ddg += 25;
                break;
              case 2:
                unit.Acc += 25;
                break;
              case 0:
                unit.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngUnit4 < unitHit) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        //If enemy doubles
        if (enemyW) {
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }

            roundO += 1;
            rotationO = roundO % 3;
            switch (rotationO) {
              case 1:
                oppo.Ddg += 25;
                break;
              case 2:
                oppo.Acc += 25;
                break;
              case 0:
                oppo.Crit += 25;
                break;
              default:
                break;
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (rngOppo4 < eneHit) {
            if (Math.floor(Math.random() * 100) < opCrit) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        if (unit.Class === "Ascendant" || oppo.Class === "Ascendant") {
          if (unit.Class === "Ascendant") {
            switch (rotationU) {
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
          }
          if (oppo.Class === "Ascendant") {
            switch (rotationO) {
              case 1:
                oppo.Ddg -= 25;
                break;
              case 2:
                oppo.Acc -= 25;
                break;
              case 0:
                oppo.Crit -= 25;
                break;
              default:
                break;
            }
          }
        }
      }
    }
    return (
      <div>
        <p>
          {unit.Class} defeats {oppo.Class} {winloseCnt[0]} times and loses{" "}
          {winloseCnt[1]} times when attacking first.
        </p>
        <p>
          {unit.Class} defeats {oppo.Class} {winloseCnt[2]} times and loses{" "}
          {winloseCnt[3]} times when {oppo.Class} attacks first.
        </p>
        <p>
          Win count: {winloseCnt[0] + winloseCnt[2]} Lose count:{" "}
          {winloseCnt[1] + winloseCnt[3]} Nett:{" "}
          {winloseCnt[0] + winloseCnt[2] - winloseCnt[1] - winloseCnt[3]}
        </p>
      </div>
    );
  }
}
