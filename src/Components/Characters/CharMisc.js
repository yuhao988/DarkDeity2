import charActive from "../Datas/charActive.json";
import charWrite from "./charWriteUp.json";
import "./Char.css";
import { processRingText } from "../Rings/RingMisc";

export function charIntro(charName, part) {
  const charname = charName.toLowerCase();
  const character1 = Object.values(charActive).find(
    (char) => char.Name.toLowerCase().replace(/'/g, "") === charname
  );
  const writeUp = Object.entries(charWrite).find(
    ([key]) => key === charname
  )?.[1];

  switch (part) {
    case "intro":
      return <p>{writeUp.introduction} </p>;
    case "base":
      return <p>{writeUp.base}</p>;
    case "class":
      return <p>{writeUp.classes}</p>;
    case "skill":
      return (
        <div>
          <table className="active-table">
            <tbody>
              <tr>
                <th colSpan="4" style={{ textAlign: "center" }}>
                  Upgrade priority
                </th>
              </tr>
              <tr>
                <td className="upgrade-box">{character1.activeBuff1}</td>
                <td className="upgrade-box">{character1.activeBuff2}</td>
                <td className="upgrade-box">{character1.activeBuff3}</td>
                <td className="upgrade-box">{character1.activeBuff4}</td>
              </tr>
              <tr>
                <td className="upgrade-box">{writeUp.skills[0]}</td>
                <td className="upgrade-box">{writeUp.skills[1]}</td>
                <td className="upgrade-box">{writeUp.skills[2]}</td>
                <td className="upgrade-box">{writeUp.skills[3]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    case "gameplay":
      return (
        <div>
          <p>{writeUp.gameplayBoon}</p>
          <p>{writeUp.gameplayBane}</p>
        </div>
      );
    case "suggest":
      return <p>{writeUp.suggestion}</p>;
    case "ring":
      return <p>{processRingText(writeUp.Rings)}</p>; 
    default:
      return <p>placeholder</p>;
  }
}

export function charSkillDes(charName, base, scale, upgrade) {
  const character = Object.values(charActive).find(
    (char) => char.Name.replace(/'/g, "") === charName.replace(/'/g, "")
  );

  const finalBase = [...base];
  const finalScale = [...scale];
  let skillText = character.activeEff;
  
  switch (charName) {
    case "Gwyn":
      if (upgrade.upgrade3) finalScale[0] += 40;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText.replace(
        "4+50%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      if (upgrade.upgrade4) skillText += ` and caster healed by 50% damage`;
      break;
    case "Riordan":
      if (upgrade.upgrade3) finalScale[0] += 20;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      if (upgrade.upgrade4) finalBase[1] += 5;
      skillText = skillText
        .replace(
          "1+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "5+20%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "Arthur":
      if (upgrade.upgrade1) finalBase[0] += 4;
      if (upgrade.upgrade3) finalScale[0] += 40;
      skillText = skillText.replace(
        "8+100%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Cassandra":
      if (upgrade.upgrade4) finalScale[0] += 40;
      if (upgrade.upgrade3) finalScale[0] += 40;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText.replace(
        "14+100%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Saxon":
      if (upgrade.upgrade3) finalScale[0] += 50;
      if (upgrade.upgrade4) finalScale[1] += 50;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 0.5);
        finalScale[0] = Math.floor(finalScale[0] * 0.5);
      }
      skillText = skillText
        .replace(
          "3+130%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "12+55%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "Alden":
      if (upgrade.upgrade4) finalScale[0] += 20;

      skillText = skillText
        .replace("7+35%", `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`)
        .replace(
          "3+30%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      if (upgrade.upgrade3)
        skillText = skillText.replace(
          "to an enemy",
          "and 3 Light Poison stacks to an enemy"
        );
      break;
    case "Valeria":
      if (upgrade.upgrade2) finalScale[0] += 40;
      if (upgrade.upgrade4) finalScale[0] += 40;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText.replace(
        "12+100%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Benji":
      if (upgrade.upgrade3) finalScale[0] += 30;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText.replace(
        "5+50%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      if (upgrade.upgrade4) skillText += ` and clears target's debuffs`;
      break;
    case "Khamari":
      if (upgrade.upgrade2) finalScale[0] += 20;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace(
          "18+80%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "2+20%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "Zanele":
      if (upgrade.upgrade2) finalScale[0] += 20;
      if (upgrade.upgrade4) finalBase[1] += 80;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace(
          "1+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "80+200%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "Zuhair":
      skillText = skillText.replace(
        "2+20%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Eve":
      if (upgrade.upgrade2) finalScale[0] += 20;
      if (upgrade.upgrade4) finalBase[1] += 5;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace(
          "1+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "5+20%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "Haoran":
      if (upgrade.upgrade3) finalBase[1] += 1;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace("6+60%", `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`)
        .replace("2 turns", `${finalBase[1]} turns`);
      break;
    case "Mashal":
      if (upgrade.upgrade1) finalBase[0] += 5;
      if (upgrade.upgrade2) finalScale[0] += 25;
      if (upgrade.upgrade4) finalBase[1] -= 5;
      skillText = skillText
        .replace(
          "18+50%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace("15 Mana", `${finalBase[1]} Mana`);
      if (upgrade.upgrade3)
        skillText = skillText.replace(
          "Crit,",
          "Crit and clears target's debuffs,"
        );
      break;
    case "Aya":
      if (upgrade.upgrade2) finalBase[0] += 2;
      if (upgrade.upgrade3) finalScale[0] += 15;
      skillText = skillText.replace(
        "5+25%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Tusk":
      if (upgrade.upgrade2) finalScale[0] += 20;
      if (upgrade.upgrade4) finalBase[0] += 5;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText.replace(
        "10+175%",
        `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
      );
      break;
    case "Laurai":
      if (upgrade.upgrade3) finalScale[0] += 50;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace(
          "10+80%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        )
        .replace(
          "5+60%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    case "TalDera":
      if (upgrade.upgrade1) finalBase[1] += 1;
      if (upgrade.upgrade3) finalScale[0] += 20;
      if (upgrade.upgrade4) {
        finalBase[0] = Math.floor(finalBase[0] * 2);
        finalScale[0] = Math.floor(finalScale[0] * 2);
      }
      skillText = skillText
        .replace("3+30%", `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`)
        .replace("1 turn", `${finalBase[1]} turn`);
      if (finalBase[1] > 1) skillText += `s`;
      break;
    case "Vissarion":
      if (upgrade.upgrade3) finalBase[1] += 1;
      if (upgrade.upgrade4) finalScale[0] += 20;
      if (upgrade.upgrade1) {
        finalBase[0] = Math.floor(finalBase[0] * 1.5);
        finalScale[0] = Math.floor(finalScale[0] * 1.5);
      }
      skillText = skillText
        .replace("5+30%", `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`)
        .replace("1 turn", `${finalBase[1]} turn`);
      if (finalBase[1] > 1) skillText += `s`;
      break;
    case "Calith":
      if (upgrade.upgrade3) finalBase[1] += 1;
      if (upgrade.upgrade4) finalBase[0] += 12;
      if (upgrade.upgrade1) finalBase[1] += 1;
      skillText = skillText
        .replace("2+50%", `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`)
        .replace(
          "2+10%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
      break;
    default:
      skillText = skillText.toLowerCase();
      break;
  }
  return skillText;
}

export function charSkillCost(charName, mana, upgrade) {
  let cost = Number(mana); // Ensure it's a number
  switch (charName) {
    case "Gwyn":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Riordan":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Arthur":
      if (upgrade.upgrade2) cost -= 10;
      break;
    case "Cassandra":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Saxon":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 0.5;
      break;
    case "Alden":
      if (upgrade.upgrade1) cost -= 10;
      break;
    case "Valeria":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Benji":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Zanele":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Khamari":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Zuhair":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost -= 5;
      break;
    case "Eve":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Haoran":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Mashal":
      break;
    case "Aya":
      if (upgrade.upgrade1) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      break;
    case "Tusk":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Laurai":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "TalDera":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade4) cost *= 2;
      break;
    case "Vissarion":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Calith":
      if (upgrade.upgrade2) cost -= 15;
      break;
    default:
      cost = 999;
      break;
  }
  return Math.floor(cost); // Return integer value
}

export function charSkillRng(charName, rng, upgrade) {
  let range;
  let rngMin = 0;
  let rngMax = 0;

  if (rng === "Attack") {
    range = "Same as attack range";
  } else if (rng === "Self" && rngMin === 0 && rngMax === 0) {
    range = `${rngMin}~${rngMax}(Self)`;
  }

  const matches = rng.match(/(\d+)/g);
  if (matches && matches.length >= 2) {
    [rngMin, rngMax] = matches.map(Number);
  }

  switch (charName) {
    case "Gwyn":
      range = "Same as attack range";
      break;
    case "Riordan":
      range = "Same as attack range";
      break;
    case "Arthur":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Cassandra":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Saxon":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Alden":
      if (upgrade.upgrade2) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Valeria":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Benji":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Khamari":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Zanele":
      range = `Same as attack range`;
      break;
    case "Zuhair":
      if (upgrade.upgrade3) rngMax += 1;
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Eve":
      range = `Same as attack range`;
      break;
    case "Haoran":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Mashal":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Aya":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Tusk":
      range = `Same as attack range`;
      break;
    case "Laurai":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "TalDera":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Vissarion":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Calith":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    default:
      range = `${rngMin}~${rngMax}`;
      break;
  }

  return range;
}
