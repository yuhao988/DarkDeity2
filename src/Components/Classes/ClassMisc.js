import "./Class.css";
//import classStat from "../Datas/classStats.json";
//import charStat from "../Datas/charStatPass.json";
import classSkills from "../Datas/classSkills.json";

export function ClassIntro(Name) {
  let tier = 1;
  let classLine = "";
  let weapon = "";
  let range = "1";
  let dmgType = "";
  const name1 = Name.replace(/\..+$/, "").replace(/\s+/g, "").toLowerCase();

  switch (name1) {
    case "devoted":
      tier = 2;
      classLine = "Vanguard";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "nightblade":
      tier = 2;
      classLine = "Vanguard";
      weapon = "dagger";
      range = "1~1";
      dmgType = "physical";
      break;
    case "seeker":
      tier = 2;
      classLine = "Vanguard";
      weapon = "bow";
      range = "2~2";
      dmgType = "physical";
      break;
    case "gallant":
      tier = 2;
      classLine = "Vanguard";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "ranger":
      tier = 2;
      classLine = "Hunter";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "cutthroat":
      tier = 2;
      classLine = "Hunter";
      weapon = "dagger";
      range = "1~1";
      dmgType = "physical";
      break;
    case "tamer":
      tier = 2;
      classLine = "Hunter";
      weapon = "bow";
      range = "1~2";
      dmgType = "physical";
      break;
    case "quickdraw":
      tier = 2;
      classLine = "Hunter";
      weapon = "bow";
      range = "2~2";
      dmgType = "physical";
      break;
    case "geomancer":
      tier = 2;
      classLine = "Summoner";
      weapon = "focus";
      range = "1~2";
      dmgType = "magical";
      break;
    case "warlock":
      tier = 2;
      classLine = "Summoner";
      weapon = "focus";
      range = "1~2";
      dmgType = "magical";
      break;
    case "aegis":
      tier = 2;
      classLine = "Summoner";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "scholar":
      tier = 2;
      classLine = "Summoner";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "juggernaut":
      tier = 2;
      classLine = "Shaman";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "waveseer":
      tier = 2;
      classLine = "Shaman";
      weapon = "focus";
      range = "1~2";
      dmgType = "magical";
      break;
    case "elementalist":
      tier = 2;
      classLine = "Shaman";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "ritualist":
      tier = 2;
      classLine = "Shaman";
      weapon = "dagger";
      range = "1~2  ";
      dmgType = "magical";
      break;
    case "gale":
      tier = 2;
      classLine = "Adept";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "conduit":
      tier = 2;
      classLine = "Adept";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "frigillan":
      tier = 2;
      classLine = "Adept";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "monk":
      tier = 2;
      classLine = "Adept";
      weapon = "focus";
      range = "1~1";
      dmgType = "physical";
      break;
    case "reaper":
      tier = 3;
      classLine = "Vanguard";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "ancarant":
      tier = 3;
      classLine = "Vanguard";
      weapon = "dagger";
      range = "1~1";
      dmgType = "physical";
      break;
    case "ellisant":
      tier = 3;
      classLine = "Vanguard";
      weapon = "bow";
      range = "2~2";
      dmgType = "magical";
      break;
    case "champion":
      tier = 3;
      classLine = "Vanguard";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "warden":
      tier = 3;
      classLine = "Hunter";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "slayer":
      tier = 3;
      classLine = "Hunter";
      weapon = "dagger";
      range = "1~2";
      dmgType = "physical";
      break;
    case "beastmaster":
      tier = 3;
      classLine = "Hunter";
      weapon = "bow";
      range = "1~2";
      dmgType = "physical";
      break;
    case "deadeye":
      tier = 3;
      classLine = "Hunter";
      weapon = "bow";
      range = "2~2";
      dmgType = "physical";
      break;
    case "cosmician":
      tier = 3;
      classLine = "Summoner";
      weapon = "focus";
      range = "1~2";
      dmgType = "magical";
      break;
    case "necromancer":
      tier = 3;
      classLine = "Summoner";
      weapon = "focus";
      range = "1~1";
      dmgType = "magical";
      break;
    case "relicknight":
      tier = 3;
      classLine = "Summoner";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "loremaster":
      tier = 3;
      classLine = "Summoner";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "dreadnought":
      tier = 3;
      classLine = "Shaman";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "tidecaller":
      tier = 3;
      classLine = "Shaman";
      weapon = "focus";
      range = "1~2";
      dmgType = "magical";
      break;
    case "spiritkeeper":
      tier = 3;
      classLine = "Shaman";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "hemomancer":
      tier = 3;
      classLine = "Shaman";
      weapon = "dagger";
      range = "1~2";
      dmgType = "magical";
      break;
    case "tempest":
      tier = 3;
      classLine = "Adept";
      weapon = "sword";
      range = "1~1";
      dmgType = "physical";
      break;
    case "stormkeeper":
      tier = 3;
      classLine = "Adept";
      weapon = "relic";
      range = "1~2";
      dmgType = "magical";
      break;
    case "godfrost":
      tier = 3;
      classLine = "Adept";
      weapon = "axe";
      range = "1~1";
      dmgType = "physical";
      break;
    case "ascendant":
      tier = 3;
      classLine = "Adept";
      weapon = "focus";
      range = "1~1";
      dmgType = "physical";
      break;
    default:
      break;
  }
  return (
    <p className="text-paragraph">
      {Name} is a Tier {tier} class from the {classLine} class line. It is a{" "}
      {weapon}-wielding class with an attack range of {range} and deals{" "}
      {dmgType} damage.
    </p>
  );
}

export function classSkillDes(className, base, scale, skillNum, upgrade) {
  const classActive = Object.values(classSkills).find(
    (class1) => class1.Name === className
  );

  const finalBase = [...base];
  const finalScale = [...scale];
  if (skillNum === 1) {
    let skillText = classActive.Skill1;
    switch (className) {
      case "Devoted":
        if (upgrade.upgrade2) finalBase[0] += 5;
        if (upgrade.upgrade4) finalScale[0] += 40;

        skillText = skillText.replace(
          "10+60%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3) skillText += ` and clears Debuffs from target`;
        break;
      case "Nightblade":
        if (upgrade.upgrade4) finalScale[0] += 15;
        if (upgrade.upgrade3) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText.replace(
          "2+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Seeker":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade4) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText
          .replace(
            "30+60%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 turns", `${finalBase[1]} turns`);
        break;
      case "Gallant":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        if (upgrade.upgrade4) finalScale[1] += 35;
        skillText = skillText
          .replace(
            "2+35%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[0]} turn`);
        if (finalBase[0] > 1) {
          skillText = skillText.replace("turn,", `turns,`);
        }
        break;
      case "Ranger":
        if (upgrade.upgrade4) finalBase[0] += 1;
        skillText = skillText.replace(
          "1 Light Stun",
          `${finalBase[0]} Light Stun`
        );
        break;
      case "Cutthroat":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        skillText = skillText.replace(
          "3+10%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Tamer":
        if (upgrade.upgrade3) finalScale[0] += 50;
        if (upgrade.upgrade4) finalScale[1] += 25;
        skillText = skillText
          .replace(
            "16+70%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "8+35%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Quickdraw":
        if (upgrade.upgrade4) finalBase[0] += 5;
        if (upgrade.upgrade1) finalBase[1] += 1;
        if (upgrade.upgrade3) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "5+25%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Geomancer":
        if (upgrade.upgrade4) finalBase[0] += 1;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText
          .replace(
            "4+15%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "10+60%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade3) skillText += ` and caster healed by 33% damage`;
        break;
      case "Warlock":
        if (upgrade.upgrade4) finalScale[0] += 40;
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade3) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText
          .replace(
            "12+120%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+5%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade1) skillText += ` and caster healed by 50% damage`;
        break;
      case "Aegis":
        if (upgrade.upgrade1) finalBase[0] += 10;
        if (upgrade.upgrade2) finalBase[1] += 1;
        skillText = skillText.replace(
          "45+90%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3) skillText += ` and heals user for 6`;
        break;
      case "Scholar":
        //if (upgrade.upgrade4) finalBase[0] += 1;
        skillText = skillText.replace(
          "4+10%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade2) skillText += ` and clears Debuffs from target`;
        break;
      case "Juggernaut":
        if (upgrade.upgrade4) finalScale[0] += 50;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText.replace(
          "5+50%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Waveseer":
        if (upgrade.upgrade2) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "12+50%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("2 allies", `${finalBase[0]} allies`);
        if (upgrade.upgrade4) skillText += ` and clears target's debuffs`;
        break;
      case "Elementalist":
        skillText = skillText.replace(
          "4+30%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Ritualist":
        if (upgrade.upgrade2) finalScale[0] += 20;
        if (upgrade.upgrade4) finalBase[0] += 3;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "5+40%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );

        break;
      case "Gale":
        if (upgrade.upgrade3) finalBase[0] += 4;

        skillText = skillText.replace(
          "6+40%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade2)
          skillText = skillText.replace(
            "to up to",
            "and 1 Heavy Snare stack to up to"
          );
        if (upgrade.upgrade4)
          skillText = skillText.replace(
            "to up to",
            "and 1 Light Poison stack to up to"
          );
        break;
      case "Conduit":
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade3) finalBase[1] += 1;
        skillText = skillText.replace(
          "9+80%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Frigillan":
        if (upgrade.upgrade1) finalBase[0] += 1;
        skillText = skillText.replace("1 turn", `${finalBase[0]} turn`);
        if (finalBase[1] > 1) skillText.replace("turn", "turns");
        break;
      case "Monk":
        if (upgrade.upgrade4) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "5+25%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3) skillText += ` and clears Debuffs from target`;
        if (upgrade.upgrade2) skillText += ` and heals user for 8`;
        break;

      case "Reaper":
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade4) finalScale[0] += 20;
        skillText = skillText
          .replace(
            "15+35%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Ancarant":
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade3) finalBase[0] += 4;
        skillText = skillText
          .replace(
            "5+20%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+20%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade3)
          skillText = skillText.replace(
            "to up to",
            ` and 2 Light Poison stacks to up to`
          );
        break;
      case "Ellisant":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade2) finalScale[1] += 50;
        if (upgrade.upgrade3) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
        }
        skillText = skillText.replace(
          "20+75%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Champion":
        if (upgrade.upgrade3) finalBase[0] += 10;
        if (upgrade.upgrade4) finalScale[0] += 50;
        skillText = skillText.replace(
          "45+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Warden":
        if (upgrade.upgrade2) finalBase[0] += 10;
        if (upgrade.upgrade4) finalBase[0] += 10;
        skillText = skillText.replace(
          "5+50%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Slayer":
        break;
      case "Beastmaster":
        if (upgrade.upgrade1) finalBase[1] += 1;
        if (upgrade.upgrade2) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "3+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("3 Severe", `${finalBase[0]} Severe`);
        if (upgrade.upgrade3)
          skillText = skillText.replace(
            "stacks",
            `stacks and 4 Light Poison stacks`
          );
        break;
      case "Deadeye":
        break;
      case "Cosmician":
        if (upgrade.upgrade4) finalScale[0] += 30;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "12+70%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3)
          skillText = skillText.replace(
            "damage",
            `damage and applies 2 Heavy Snare stacks`
          );
        if (upgrade.upgrade2) skillText += ` and heals allies in AOE`;
        break;
      case "Necromancer":
        if (upgrade.upgrade4) finalScale[0] += 30;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "70+60%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Relic Knight":
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
        }
        if (upgrade.upgrade3) finalScale[0] -= 20;
        skillText = skillText.replace(
          "60-70%",
          `(${finalBase[0]}+(${finalScale[0]}% Mastery-scaling))%`
        );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Loremaster":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "12+80%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4)
          skillText = skillText.replace(
            "damage",
            `damage and applies 2 Heavy Snare stacks`
          );
        break;
      case "Dreadnought":
        skillText = skillText.replace(
          "15+60%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade1) skillText += `and grants target 10 mana`;
        if (upgrade.upgrade3) skillText += `and clears Debuffs from target`;
        break;
      case "Tidecaller":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText.replace(
          "10+50%",
          `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
        );
        break;
      case "Spirit Keeper":
        if (upgrade.upgrade1) finalBase[0] += 3;
        if (upgrade.upgrade4) finalScale[0] += 10;
        skillText = skillText.replace(
          "7+30%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Hemomancer":
        if (upgrade.upgrade1) finalBase[0] += 5;
        if (upgrade.upgrade3) finalBase[0] += 5;
        skillText = skillText
          .replace(
            "8+75%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "25+100%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Tempest":
        if (upgrade.upgrade1) finalBase[1] += 1;
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade4) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "3+20%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 attacks", `${finalBase[1]} attacks`);
        break;
      case "Stormkeeper":
        if (upgrade.upgrade1) finalBase[1] += 1;

        skillText = skillText
          .replace(
            "4+10%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "15+100%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade2) skillText += ` and applies 3 Heavy Snare stacks`;
        if (upgrade.upgrade4) skillText += ` and heals allies in AOE`;
        break;
      case "Godfrost":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade4) finalScale[0] += 25;
        skillText = skillText
          .replace(
            "5+40%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 turns", `${finalBase[1]} turns`);
        break;
      case "Ascendant":
        if (upgrade.upgrade3) finalScale[0] += 30;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "27+75%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4) skillText += ` and heals allies in AOE`;
        break;
      default:
        skillText = skillText.toLowerCase();
        break;
    }
    return skillText;
  } else if (skillNum === 2) {
    let skillText = classActive.Skill2;
    switch (className) {
      case "Devoted":
        if (upgrade.upgrade4) finalScale[0] += 35;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText.replace(
          "8+65%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Nightblade":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText
          .replace(
            "3+15%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Seeker":
        if (upgrade.upgrade3) finalBase[0] += 1;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText
          .replace(
            "5+25%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("3 attacks", `${finalBase[0]} attacks`);
        if (upgrade.upgrade4) skillText += ` and clears target's debuffs`;
        break;
      case "Gallant":
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 1.3);
          finalScale[0] = Math.floor(finalScale[0] * 1.3);
        }
        skillText = skillText.replace(
          "5+30%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade2)
          skillText = skillText.replace("if", "and 1 Light Poison stack if");
        if (upgrade.upgrade4) skillText += ` and heals user for 5`;
        break;
      case "Ranger":
        if (upgrade.upgrade3) finalBase[1] += 5;
        skillText = skillText
          .replace(
            "10+25%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Cutthroat":
        if (upgrade.upgrade3) finalBase[1] += 5;
        skillText = skillText
          .replace(
            "4+50%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+15%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Tamer":
        if (upgrade.upgrade3) finalScale[0] += 50;
        skillText = skillText.replace(
          "5+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Quickdraw":
        if (upgrade.upgrade3) finalBase[1] += 5;
        skillText = skillText
          .replace(
            "1+75%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "4+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Geomancer":
        if (upgrade.upgrade3) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "2+10%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "10+75%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade2) skillText += ` and grants target 10 mana`;
        if (upgrade.upgrade4) skillText += ` and clears Debuffs from target`;
        break;
      case "Warlock":
        if (upgrade.upgrade1) finalBase[0] += 3;
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade4) {
          finalScale[0] += 25;
        }
        skillText = skillText
          .replace(
            "4+20%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 tiles", `${finalBase[1]} tiles`);
        break;
      case "Aegis":
        if (upgrade.upgrade2) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "6+40%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("3 turns", `${finalBase[0]} turns`);
        if (upgrade.upgrade3) skillText += ` and grants target 10 mana`;
        if (upgrade.upgrade4) skillText += ` and clears Debuffs from target`;
        break;
      case "Scholar":
        if (upgrade.upgrade3) finalScale[0] += 30;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText.replace(
          "20+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4) skillText += ` and clears Debuffs from target`;
        break;
      case "Juggernaut":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        if (upgrade.upgrade4) finalScale[1] += 40;
        skillText = skillText
          .replace(
            "2+10%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "6+40%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Waveseer":
        if (upgrade.upgrade4) finalBase[0] += 1;
        skillText = skillText.replace("1 turn", `${finalBase[0]} turn`);
        if (finalBase[0] > 1) skillText += `s`;
        break;
      case "Elementalist":
        if (upgrade.upgrade4) finalScale[0] += 40;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "15+75%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Ritualist":
        if (upgrade.upgrade4) finalScale[0] += 15;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText.replace(
          "6+40%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Gale":
        if (upgrade.upgrade4) skillText += ` and heals user for 5`;
        if (upgrade.upgrade3) skillText += ` and clears Debuffs from target`;
        break;
      case "Conduit":
        if (upgrade.upgrade2) finalScale[0] += 30;
        skillText = skillText
          .replace(
            "25+130%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "5+60%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade2) skillText += ` and grants target 10 mana`;
        break;
      case "Frigillan":
        if (upgrade.upgrade2) finalBase[0] += 4;
        skillText = skillText.replace(
          "3+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4) skillText += ` and clears Debuffs from target`;
        break;
      case "Monk":
        if (upgrade.upgrade2) finalBase[0] += 1;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText
          .replace(
            "3+8%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "8+100%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 60% damage`;
        break;

      case "Reaper":
        if (upgrade.upgrade4) finalScale[0] += 35;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText.replace(
          "8+65%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Ancarant":
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
      case "Ellisant":
        if (upgrade.upgrade1) finalBase[0] += 4;
        if (upgrade.upgrade3) finalScale[0] += 40;
        skillText = skillText.replace(
          "8+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Champion":
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
      case "Warden":
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
      case "Slayer":
        if (upgrade.upgrade4) finalScale[0] += 20;

        skillText = skillText
          .replace(
            "7+35%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
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
      case "Beastmaster":
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
      case "Deadeye":
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
      case "Cosmician":
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
      case "Necromancer":
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
      case "Relic Knight":
        skillText = skillText.replace(
          "2+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Loremaster":
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
      case "Dreadnought":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText
          .replace(
            "6+60%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 turns", `${finalBase[1]} turns`);
        break;
      case "Tidecaller":
        if (upgrade.upgrade1) finalBase[0] += 5;
        if (upgrade.upgrade2) finalScale[0] += 25;
        if (upgrade.upgrade4) finalBase[1] -= 5;
        skillText = skillText
          .replace(
            "18+50%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("15 Mana", `${finalBase[1]} Mana`);
        if (upgrade.upgrade3) skillText += ` and clears target's debuffs`;
        break;
      case "Spirit Keeper":
        if (upgrade.upgrade2) finalBase[0] += 2;
        if (upgrade.upgrade3) finalScale[0] += 15;
        skillText = skillText.replace(
          "5+25%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Hemomancer":
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
      case "Tempest":
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
      case "Stormkeeper":
        if (upgrade.upgrade1) finalBase[1] += 1;
        if (upgrade.upgrade3) finalScale[0] += 20;
        if (upgrade.upgrade4) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText
          .replace(
            "3+30%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Godfrost":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade4) finalScale[0] += 20;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        skillText = skillText
          .replace(
            "5+30%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Ascendant":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade4) finalBase[0] += 12;
        if (upgrade.upgrade1) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "2+50%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
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
}

/*export function charSkillCost(className, mana, upgrade) {
  let cost = Number(mana); // Ensure it's a number
  switch (className) {
    case "Devoted":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Nightblade":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Seeker":
      if (upgrade.upgrade2) cost -= 10;
      break;
    case "Gallant":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Ranger":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 0.5;
      break;
    case "Cutthroat":
      if (upgrade.upgrade1) cost -= 10;
      break;
    case "Tamer":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Quickdraw":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Warlock":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Geomancer":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Aegis":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost -= 5;
      break;
    case "Scholar":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Juggernaut":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Waveseer":
      break;
    case "Elementalist":
      if (upgrade.upgrade1) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      break;
    case "Ritualist":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Gale":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Conduit":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade4) cost *= 2;
      break;
    case "Frigillan":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Monk":
      if (upgrade.upgrade2) cost -= 15;
      break;
      case "Reaper":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Ancarant":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Ellisant":
      if (upgrade.upgrade2) cost -= 10;
      break;
    case "Champion":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Warden":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 0.5;
      break;
    case "Slayer":
      if (upgrade.upgrade1) cost -= 10;
      break;
    case "Beastmaster":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Deadeye":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Necromancer":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Cosmician":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Relic Knight":
      if (upgrade.upgrade2) cost -= 5;
      if (upgrade.upgrade1) cost -= 5;
      break;
    case "Loremaster":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Dreadnought":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Tidecaller":
      break;
    case "Spirit Keeper":
      if (upgrade.upgrade1) cost -= 10;
      if (upgrade.upgrade4) cost -= 10;
      break;
    case "Hemomancer":
      if (upgrade.upgrade3) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Tempest":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Stormkeeper":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade4) cost *= 2;
      break;
    case "Godfrost":
      if (upgrade.upgrade2) cost -= 10;
      if (upgrade.upgrade1) cost *= 1.5;
      break;
    case "Ascendant":
      if (upgrade.upgrade2) cost -= 15;
      break;
    default:
      cost = 999;
      break;
  }
  return Math.floor(cost); // Return integer value
}

export function charSkillRng(className, rng, upgrade) {
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

  switch (className) {
    case "Devoted":
      range = "Same as attack range";
      break;
    case "Nightblade":
      range = "Same as attack range";
      break;
    case "Seeker":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Gallant":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Ranger":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Cutthroat":
      if (upgrade.upgrade2) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Tamer":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Quickdraw":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Geomancer":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Warlock":
      range = `Same as attack range`;
      break;
    case "Aegis":
      if (upgrade.upgrade3) rngMax += 1;
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Scholar":
      range = `Same as attack range`;
      break;
    case "Juggernaut":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Waveseer":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Elementalist":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Ritualist":
      range = `Same as attack range`;
      break;
    case "Gale":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Conduit":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Frigillan":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Monk":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
      case "Reaper":
      range = "Same as attack range";
      break;
    case "Ancarant":
      range = "Same as attack range";
      break;
    case "Ellisant":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Champion":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Warden":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Slayer":
      if (upgrade.upgrade2) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Beastmaster":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Deadeye":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Cosmician":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Necromancer":
      range = `Same as attack range`;
      break;
    case "Relic Knight":
      if (upgrade.upgrade3) rngMax += 1;
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Loremaster":
      range = `Same as attack range`;
      break;
    case "Dreadnought":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Tidecaller":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Spirit Keeper":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Hemomancer":
      range = `Same as attack range`;
      break;
    case "Tempest":
      if (upgrade.upgrade4) rngMax += 1;
      range = `${rngMin}~${rngMax}`;
      break;
    case "Stormkeeper":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    case "Godfrost":
      range = `${rngMin}~${rngMax}`;
      break;
    case "Ascendant":
      range = `${rngMin}~${rngMax}(Self)`;
      break;
    default:
      range = `${rngMin}~${rngMax}`;
      break;
  }

  return range;
}*/
