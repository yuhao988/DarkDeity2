import charActive from "../Datas/charActive.json";

export function charIntro() {
  return <p>Character introduction</p>;
}

export function charSkillDes(charName, base, scale, upgrade) {
    console.log(charName.replace(/'/g, ""))
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
    case "Valeria":
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
    case "Benji":
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
    case "Khamari":
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
    case "Zanele":
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
    case "Zuhair":
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
    case "Eve":
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
    case "Haoran":
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
    case "Mashal":
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
    case "Aya":
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
    case "Tusk":
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
    case "Laurai":
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
    case "TalDera":
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
    case "Vissarion":
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
    case "Calith":
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
    case "Saxon":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    default:
      range = `${rngMin}~${rngMax}`;
      break;
  }

  return range;
}
