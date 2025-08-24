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

  let selfCrit = 0,
    eneCrit = 0;
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
  switch (buffNum) {
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

  return unit;
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

function adjustHemomancer(unit, currHP, enemy) {
  const [unitDmg, , unitCrit] = adjustStats(unit, enemy);

  let newUnitDmg = unitDmg + Math.floor((unit.HP - currHP) / 5);
  let newUnitCrit = unitCrit + Math.floor((unit.HP - currHP) / 5);

  return [newUnitDmg, newUnitCrit];
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
  // Determine if either unit gets a double attack based on speed difference
  let [unitW, enemyW] = determineDoubleAttack(unit.TSpd, enemy.TSpd);

  // switch (unit.Class) {
  //   case "Seeker":
  //     return "+4 Vulnerable to opponent from Exposing Light";
  //   case "Gallant":(done)
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
  //   case "Slayer":(done)
  //     return "20% chance for extra attack from Ricochet";
  //   case "Relic Knight":
  //     return "+6 Def and Frt from Unstoppable";
  //   case "Hemomancer":(done)
  //     return "+1 Pwr and Crit for every 5 missing HP from Dark Magic";
  //   case "Tempest":
  //     return "+1 Dmg for every excess TSpd on follow-up attacks from Swift Strike";
  //   case "Ascendant":(done)
  //     return "+25 Ddg, Acc or Crit from Elemental Fist";
  // }

  // Initialize win/lose counters [unitWinsFirst, unitLosesFirst, unitWinsSecond, unitLosesSecond]
  let winloseCnt = [0, 0, 0, 0];

  let [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(unit, enemy);

  // Check for immediate draw conditions
  if (unitDmg * unitHit === 0 && eneDmg * eneHit === 0) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 5000; i++) {
      let unitCurHP = unit.HP;
      let eneCurHP = enemy.HP;
      let round = 0;

      while (unitCurHP > 0 && eneCurHP > 0) {
        let rotation = 0;
        round += 1;
        rotation = round % 3;

        //Player unit attacks
        switch (unit.Class) {
          case "Hemomancer":
            [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
            break;
          case "Ascendant":
            unit = ascendantBuffUp(unit, rotation);
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
            break;
          default:
            break;
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }

        //Enemy counters
        if (check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }
        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //If player unit doubles
        if (unitW || enemyW) {
          round += 1;
          switch (unit.Class) {
            case "Hemomancer":
              [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
              break;
            case "Ascendant":
              unit = ascendantBuffUp(unit, rotation);
              [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
                unit,
                enemy
              );
              break;
            default:
              break;
          }
        }
        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
        }

        //If enemy doubles

        if (enemyW && check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }
        if (unitW || enemyW) {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //Enemy attacks

        round += 1;
        if (unit.Class === "Ascendant") {
          rotation = round % 3;

          unit = ascendantBuffUp(unit, rotation);
        }
        [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(unit, enemy);
        if (check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }

        //Player unit counters

        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }

        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        //If enemy doubles

        if (unitW || enemyW) {
          round += 1;
          rotation = round % 3;
          unit = ascendantBuffUp(unit, rotation);
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }
        if (enemyW && check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }

        //If player unit doubles
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
        }
        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
            if (unit.Class === "Slayer" && check1RN(20)) {
              if (check2RN(unitHit)) {
                if (check1RN(unitCrit)) {
                  eneCurHP -= unitDmg * 2;
                } else {
                  eneCurHP -= unitDmg;
                }
              }
            }
          }
        }

        if ((unitW || enemyW) && unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
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
          unit = ascendantBuffUp(unit, rotation);
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }

        //Enemy attacks
        if (check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }

        //Player unit counters
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (Math.floor(Math.random() * 100) < unitCrit) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }

        //If enemy doubles
        if ((unitW || enemyW) && unit.Class === "Ascendant") {
          round += 1;
          rotation = round % 3;
          unit = ascendantBuffUp(unit, rotation);
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            enemy
          );
        }

        if (enemyW && check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }

        //If player unit doubles
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
        }
        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
            if (unit.Class === "Slayer" && check1RN(20)) {
              if (check2RN(unitHit)) {
                if (check1RN(unitCrit)) {
                  eneCurHP -= unitDmg * 2;
                } else {
                  eneCurHP -= unitDmg;
                }
              }
            }
          }
        }

        if ((unitW || enemyW) && unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }

        //Player unit attacks
        round += 1;
        rotation = round % 3;
        switch (unit.Class) {
          case "Hemomancer":
            [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
            break;
          case "Ascendant":
            unit = ascendantBuffUp(unit, rotation);
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              enemy
            );
            break;
          default:
            break;
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        //Enemy counters
        if (check2RN(eneHit)) {
          unitCurHP -= eneDmg;
        }

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }
        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }

        //If player unit doubles
        if (unitW || enemyW) {
          switch (unit.Class) {
            case "Hemomancer":
              [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, enemy);
              break;
            case "Ascendant":
              unit = ascendantBuffUp(unit, rotation);
              [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
                unit,
                enemy
              );
              break;
            default:
              break;
          }
        }

        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === enemy.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > enemy.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
        }

        //If enemy doubles
        if (enemyW && check2RN(eneHit)){
          unitCurHP -= eneDmg;
        }
        if ((unitW || enemyW) && unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotation);
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
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
        <p>
          Win count: {winloseCnt[0] + winloseCnt[2]} Lose count:{" "}
          {winloseCnt[1] + winloseCnt[3]} Nett:{" "}
          {winloseCnt[0] + winloseCnt[2] - winloseCnt[1] - winloseCnt[3]}
        </p>
      </div>
    );
  }
}

export function simulateBattle2(unit, oppo) {
  // Determine if either unit gets a double attack based on speed difference
  let [unitW, enemyW] = determineDoubleAttack(unit.TSpd, oppo.TSpd);

  // Initialize win/lose counters [unitWinsFirst, unitLosesFirst, unitWinsSecond, unitLosesSecond]
  let winloseCnt = [0, 0, 0, 0];

  let [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
    unit,
    oppo
  );

  if (unitDmg * unitHit === 0 && eneDmg * eneHit === 0) {
    return <p>The battle results in a draw</p>;
  } else {
    //Player unit attacks first
    for (let i = 0; i < 5000; i++) {
      let unitCurHP = unit.HP;
      let eneCurHP = oppo.HP;
      let roundU = 0;
      let roundO = 0;
      while (unitCurHP > 0 && eneCurHP > 0) {
        roundU += 1;
        roundO += 1;
        let rotationU = roundU % 3;
        let rotationO = roundO % 3;

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffUp(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffUp(oppo, rotationO);
        }
        [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
          unit,
          oppo
        );

        //Player unit attacks
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }

        //Enemy counters
        if (oppo.Class === "Hemomancer") {
          [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
        }

        if (check2RN(eneHit)) {
          if (check1RN(opCrit)) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= (eneDmg + 5) * 2;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= eneDmg + 5;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (oppo.Class === "Slayer" && check1RN(20)) {
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              unitCurHP -= eneDmg * 2;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffDown(oppo, rotationO);
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //If player unit doubles
        if (unitW || enemyW) {
          roundU += 1;
          roundO += 1;
          if (unit.Class === "Ascendant") {
            rotationU = roundU % 3;
            unit = ascendantBuffUp(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            rotationO = roundO % 3;
            oppo = ascendantBuffUp(oppo, rotationO);
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            oppo
          );
        }
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
        }
        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
        }

        //If enemy doubles
        if (enemyW) {
          if (check2RN(eneHit)) {
            if (oppo.Class === "Hemomancer") {
              [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
            }
            if (check1RN(opCrit)) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= (eneDmg + 5) * 2;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= eneDmg + 5;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
          if (oppo.Class === "Slayer" && check1RN(20)) {
            if (check2RN(eneHit)) {
              if (check1RN(opCrit)) {
                unitCurHP -= eneDmg * 2;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
        }
        if (unitW || enemyW) {
          if (unit.Class === "Ascendant") {
            unit = ascendantBuffDown(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            oppo = ascendantBuffDown(oppo, rotationO);
          }
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }

        //Enemy attacks
        roundU += 1;
        roundO += 1;
        rotationU = roundU % 3;
        rotationO = roundO % 3;

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffUp(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffUp(oppo, rotationO);
        }
        [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
          unit,
          oppo
        );
        if (oppo.Class === "Hemomancer") {
          [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
        }

        if (check2RN(eneHit)) {
          if (check1RN(opCrit)) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= (eneDmg + 5) * 2;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= eneDmg + 5;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }

        //Player unit counters
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (oppo.Class === "Slayer" && check1RN(20)) {
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              unitCurHP -= eneDmg * 2;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffDown(oppo, rotationO);
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
        }

        //If enemy doubles
        if (unitW || enemyW) {
          if (unit.Class === "Ascendant") {
            roundU += 1;
            rotationU = roundU % 3;
            unit = ascendantBuffUp(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            roundO += 1;
            rotationO = roundO % 3;
            oppo = ascendantBuffUp(oppo, rotationO);
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            oppo
          );
        }
        if (oppo.Class === "Hemomancer") {
          [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
        }
        if (enemyW) {
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= (eneDmg + 5) * 2;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= eneDmg + 5;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
          if (oppo.Class === "Slayer" && check1RN(20)) {
            if (check2RN(eneHit)) {
              if (check1RN(opCrit)) {
                unitCurHP -= eneDmg * 2;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
        }

        //If player unit doubles
        if (unitW) {
          if (check2RN(unitHit)) {
            if (unit.Class === "Hemomancer") {
              [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
            }
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
        }

        if (unitW || enemyW) {
          if (unit.Class === "Ascendant") {
            unit = ascendantBuffDown(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            oppo = ascendantBuffDown(oppo, rotationO);
          }
        }
        if (unitCurHP <= 0) {
          winloseCnt[1]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[0]++;
          break;
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
        roundU += 1;
        roundO += 1;
        let rotationU = roundU % 3;
        let rotationO = roundO % 3;

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffUp(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffUp(oppo, rotationO);
        }
        [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
          unit,
          oppo
        );
        if (oppo.Class === "Hemomancer") {
          [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
        }
        //Enemy attacks
        if (check2RN(eneHit)) {
          if (check1RN(opCrit)) {
            if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
              unitCurHP -= eneDmg * 3;
            } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= (eneDmg + 5) * 2;
            } else {
              unitCurHP -= eneDmg * 2;
            }
          } else {
            if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
              unitCurHP -= eneDmg + 5;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }
        if (oppo.Class === "Slayer" && check1RN(20)) {
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              unitCurHP -= eneDmg * 2;
            } else {
              unitCurHP -= eneDmg;
            }
          }
        }

        //Player unit counters
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
        }
        if (check2RN(unitHit)) {
          if (check1RN(unitCrit)) {
            if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
              eneCurHP -= unitDmg * 3;
            } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= (unitDmg + 5) * 2;
            } else {
              eneCurHP -= unitDmg * 2;
            }
          } else {
            if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
              eneCurHP -= unitDmg + 5;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }
        if (unit.Class === "Slayer" && check1RN(20)) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              eneCurHP -= unitDmg * 2;
            } else {
              eneCurHP -= unitDmg;
            }
          }
        }

        if (unit.Class === "Ascendant") {
          unit = ascendantBuffDown(unit, rotationU);
        }
        if (oppo.Class === "Ascendant") {
          oppo = ascendantBuffDown(oppo, rotationO);
        }

        if (unitCurHP <= 0) {
          winloseCnt[3]++;
          break;
        }
        if (eneCurHP <= 0) {
          winloseCnt[2]++;
          break;
        }

        //If enemy doubles
        if (unitW || enemyW) {
          roundU += 1;
          roundO += 1;
          //Add Ascendant buff for the battle
          if (unit.Class === "Ascendant") {
            rotationU = roundU % 3;
            unit = ascendantBuffUp(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            rotationO = roundO % 3;
            oppo = ascendantBuffUp(oppo, rotationO);
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
            unit,
            oppo
          );
        }
        if (oppo.Class === "Hemomancer") {
          [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
        }
        if (enemyW) {
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= (eneDmg + 5) * 2;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= eneDmg + 5;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
          if (oppo.Class === "Slayer" && check1RN(20)) {
            if (check2RN(eneHit)) {
              if (check1RN(opCrit)) {
                unitCurHP -= eneDmg * 2;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
        }

        //If player unit doubles
        if (unit.Class === "Hemomancer") {
          [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
        }
        if (unitW) {
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
        }
        if (unitW || enemyW) {
          //Remove Ascendant buff after the battle
          if (unit.Class === "Ascendant") {
            unit = ascendantBuffDown(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            oppo = ascendantBuffDown(oppo, rotationO);
          }
          if (unitCurHP <= 0) {
            winloseCnt[3]++;
            break;
          }
          if (eneCurHP <= 0) {
            winloseCnt[2]++;
            break;
          }

          //Player unit attacks
          roundO += 1;
          roundU += 1;
          rotationU = roundU % 3;
          rotationO = roundO % 3;
          if (unit.Class === "Ascendant") {
            unit = ascendantBuffUp(unit, rotationU);
          }

          if (oppo.Class === "Ascendant") {
            oppo = ascendantBuffUp(oppo, rotationO);
          }
          [unitDmg, unitHit, unitCrit, eneDmg, eneHit, opCrit] = adjustStats(
            unit,
            oppo
          );
          if (unit.Class === "Hemomancer") {
            [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
          }
          if (check2RN(unitHit)) {
            if (check1RN(unitCrit)) {
              if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                eneCurHP -= unitDmg * 3;
              } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= (unitDmg + 5) * 2;
              } else {
                eneCurHP -= unitDmg * 2;
              }
            } else {
              if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                eneCurHP -= unitDmg + 5;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }
          if (unit.Class === "Slayer" && check1RN(20)) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                eneCurHP -= unitDmg * 2;
              } else {
                eneCurHP -= unitDmg;
              }
            }
          }

          //Enemy counters
          if (oppo.Class === "Hemomancer") {
            [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
          }
          if (check2RN(eneHit)) {
            if (check1RN(opCrit)) {
              if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                unitCurHP -= eneDmg * 3;
              } else if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= (eneDmg + 5) * 2;
              } else {
                unitCurHP -= eneDmg * 2;
              }
            } else {
              if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                unitCurHP -= eneDmg + 5;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
          if (oppo.Class === "Slayer" && check1RN(20)) {
            if (check2RN(eneHit)) {
              if (check1RN(opCrit)) {
                unitCurHP -= eneDmg * 2;
              } else {
                unitCurHP -= eneDmg;
              }
            }
          }
          if (unit.Class === "Ascendant") {
            unit = ascendantBuffDown(unit, rotationU);
          }
          if (oppo.Class === "Ascendant") {
            oppo = ascendantBuffDown(oppo, rotationO);
          }

          if (eneCurHP <= 0) {
            winloseCnt[2]++;
            break;
          }
          if (unitCurHP <= 0) {
            winloseCnt[3]++;
            break;
          }

          //If player unit doubles
          if (unitW || enemyW) {
            roundU += 1;
            roundO += 1;
            //Add Ascendant buff for the battle
            if (unit.Class === "Ascendant") {
              rotationU = roundU % 3;
              unit = ascendantBuffUp(unit, rotationU);
            }
            if (oppo.Class === "Ascendant") {
              rotationO = roundO % 3;
              oppo = ascendantBuffUp(oppo, rotationO);
            }
            [unitDmg, unitHit, unitCrit, eneDmg, eneHit] = adjustStats(
              unit,
              oppo
            );
          }
          if (unit.Class === "Hemomancer") {
            [unitDmg, unitCrit] = adjustHemomancer(unit, unitCurHP, oppo);
          }
          if (unitW) {
            if (check2RN(unitHit)) {
              if (check1RN(unitCrit)) {
                if (unit.Class === "Reaper" && eneCurHP === oppo.HP) {
                  eneCurHP -= unitDmg * 3;
                } else if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                  eneCurHP -= (unitDmg + 5) * 2;
                } else {
                  eneCurHP -= unitDmg * 2;
                }
              } else {
                if (unit.Class === "Gallant" && eneCurHP * 2 > oppo.HP) {
                  eneCurHP -= unitDmg + 5;
                } else {
                  eneCurHP -= unitDmg;
                }
              }
            }
            if (unit.Class === "Slayer" && check1RN(20)) {
              if (check2RN(unitHit)) {
                if (check1RN(unitCrit)) {
                  eneCurHP -= unitDmg * 2;
                } else {
                  eneCurHP -= unitDmg;
                }
              }
            }
          }

          //If enemy doubles
          if (oppo.Class === "Hemomancer") {
            [eneDmg, opCrit] = adjustHemomancer(oppo, eneCurHP, unit);
          }
          if (enemyW) {
            if (check2RN(eneHit)) {
              if (check1RN(opCrit)) {
                if (oppo.Class === "Reaper" && unitCurHP === unit.HP) {
                  unitCurHP -= eneDmg * 3;
                } else if (
                  oppo.Class === "Gallant" &&
                  unitCurHP * 2 > unit.HP
                ) {
                  unitCurHP -= (eneDmg + 5) * 2;
                } else {
                  unitCurHP -= eneDmg * 2;
                }
              } else {
                if (oppo.Class === "Gallant" && unitCurHP * 2 > unit.HP) {
                  unitCurHP -= eneDmg + 5;
                } else {
                  unitCurHP -= eneDmg;
                }
              }
            }
            if (oppo.Class === "Slayer" && check1RN(20)) {
              if (check2RN(eneHit)) {
                if (check1RN(opCrit)) {
                  unitCurHP -= eneDmg * 2;
                } else {
                  unitCurHP -= eneDmg;
                }
              }
            }
          }
          if (unitW || enemyW) {
            //Remove Ascendant buff after the battle
            if (unit.Class === "Ascendant") {
              unit = ascendantBuffDown(unit, rotationU);
            }
            if (oppo.Class === "Ascendant") {
              oppo = ascendantBuffDown(oppo, rotationO);
            }
          }
          if (eneCurHP <= 0) {
            winloseCnt[2]++;
            break;
          }
          if (unitCurHP <= 0) {
            winloseCnt[3]++;
            break;
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
