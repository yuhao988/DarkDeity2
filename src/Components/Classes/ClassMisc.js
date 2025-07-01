import "./Class.css";
import classStat from "../Datas/classStats.json";
//import charStat from "../Datas/charStatPass.json";
import classSkills from "../Datas/classSkills.json";
import classWriteUp from "./classWriteUp.json";

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
        skillText = skillText
          .replace(
            "9+80%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("3 enemies", `${finalBase[1]} enemies`);
        break;
      case "Frigillan":
        if (upgrade.upgrade1) finalBase[0] += 1;
        skillText = skillText.replace("1 turn", `${finalBase[0]} turn`);
        if (finalBase[0] > 1) skillText = skillText.replace("turn", "turns");
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
        if (upgrade.upgrade4)
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
        skillText = skillText
          .replace("3 tiles", `${finalBase[0]} tiles`)
          .replace(
            "20+75%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Champion":
        if (upgrade.upgrade3) finalBase[0] += 10;
        if (upgrade.upgrade4) finalScale[0] += 50;
        skillText = skillText.replace(
          "(45+100%)",
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
          skillText = skillText.replace("stacks", `and 4 Light Poison stacks`);
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
        if (upgrade.upgrade3) finalScale[1] -= 20;
        skillText = skillText
          .replace(
            "60-70%",
            `(${finalBase[1]}(${finalScale[1]}% Mastery-scaling))%`
          )
          .replace("3 times", `${finalBase[0]} times`);
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Loremaster":
        if (upgrade.upgrade3) finalBase[1] += 1;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText
          .replace(
            "12+80%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("2 tiles", `${finalBase[1]} tiles`);
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
        if (upgrade.upgrade1) skillText += ` and grants target 10 mana`;
        if (upgrade.upgrade3) skillText += ` and clears Debuffs from target`;
        break;
      case "Tidecaller":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        if (upgrade.upgrade2) {
          finalBase[1] = Math.floor(finalBase[1] * 1.5);
          finalScale[1] = Math.floor(finalScale[1] * 1.5);
        }
        skillText = skillText
          .replace(
            "10+50%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          )
          .replace("3 ally", `${finalBase[0]} ally`);
        break;
      case "Spirit Keeper":
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
      case "Hemomancer":
        if (upgrade.upgrade1) finalBase[0] += 3;
        if (upgrade.upgrade4) finalScale[0] += 10;
        skillText = skillText.replace(
          "7+30%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
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
        if (upgrade.upgrade1) finalBase[0] += 1;

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
          finalBase[1] = Math.floor(finalBase[1] * 2);
          finalScale[1] = Math.floor(finalScale[1] * 2);
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
        if (upgrade.upgrade3) {
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
        if (upgrade.upgrade3) {
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
        if (upgrade.upgrade3) skillText += ` and grants target 10 mana`;
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
          finalBase[1] = Math.floor(finalBase[1] * 2);
          finalScale[1] = Math.floor(finalScale[1] * 2);
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
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade2) finalScale[0] += 10;
        skillText = skillText.replace(
          "3+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3) skillText += ` and clears Debuffs from target`;
        break;
      case "Ancarant":
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 1.5);
          finalScale[0] = Math.floor(finalScale[0] * 1.5);
        }
        if (upgrade.upgrade3) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "12+110%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Ellisant":
        if (upgrade.upgrade2) finalBase[0] += 1;
        if (upgrade.upgrade4) finalScale[0] += 10;
        if (upgrade.upgrade1) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "3+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade3) skillText += ` and heals caster by 20% damage`;
        break;
      case "Champion":
        if (upgrade.upgrade3) finalBase[0] += 10;
        if (upgrade.upgrade4) finalScale[0] += 50;
        skillText = skillText.replace(
          "(45+100%)",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Warden":
        if (upgrade.upgrade3) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "15+25%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 Heavy Stun", `${finalBase[1]} Heavy Stun`);
        if (finalBase[1] > 1) skillText = skillText.replace("Stun", "Stuns");
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Slayer":
        if (upgrade.upgrade3) finalBase[1] += 5;
        skillText = skillText
          .replace(
            "8+50%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "2+20%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Beastmaster":
        if (upgrade.upgrade3) finalBase[1] += 5;
        skillText = skillText
          .replace(
            "1+100%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "5+30%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4) skillText += ` and heals caster by 50% damage`;
        break;
      case "Deadeye":
        if (upgrade.upgrade1) finalBase[0] += 5;
        if (upgrade.upgrade2) finalScale[0] += 20;
        if (upgrade.upgrade4) finalBase[1] += 12;
        skillText = skillText
          .replace(
            "5+100%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "25+20%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        break;
      case "Cosmician":
        if (upgrade.upgrade2) finalScale[0] += 50;
        skillText = skillText.replace(
          "20+120%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade4) skillText += ` and heals caster by 33% damage`;
        break;
      case "Necromancer":
        if (upgrade.upgrade4) finalScale[0] += 15;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 2);
          finalScale[0] = Math.floor(finalScale[0] * 2);
        }
        skillText = skillText.replace(
          "10+100%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      case "Relic Knight":
        if (upgrade.upgrade1) finalBase[1] += 1;
        if (upgrade.upgrade2) {
          finalBase[2] = Math.floor(finalBase[2] * 1.5);
          finalScale[2] = Math.floor(finalScale[2] * 1.5);
        }
        if (upgrade.upgrade4) finalScale[2] += 50;
        skillText = skillText
          .replace(
            "2+10%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("4 turns", `${finalBase[1]} turns`)
          .replace(
            "7+100%",
            `${finalBase[2]}+(${finalScale[2]}% Mastery-scaling)`
          );
        break;
      case "Loremaster":
        if (upgrade.upgrade1) finalScale[0] += 20;
        if (upgrade.upgrade2) finalBase[1] += 1;
        if (upgrade.upgrade3) finalBase[0] += 1;
        skillText = skillText
          .replace(
            "8+40%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace(
            "3+10%",
            `${finalBase[1]}+(${finalScale[1]}% Mastery-scaling)`
          );
        if (upgrade.upgrade4)
          skillText = skillText.replace(
            "to up",
            "and 2 Light Poison stack to up"
          );
        break;
      case "Dreadnought":
        if (upgrade.upgrade2) finalScale[0] += 20;
        if (upgrade.upgrade3) finalBase[1] -= 1;
        if (upgrade.upgrade4) finalBase[1] -= 1;
        skillText = skillText
          .replace(
            "5+25%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("5 missing HP", `${finalBase[1]} missing HP`);
        break;
      case "Tidecaller":
        break;
      case "Spirit Keeper":
        skillText = skillText.replace(
          "16+70%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        if (upgrade.upgrade1) skillText += ` and heals caster by 50% damage`;
        if (upgrade.upgrade4) skillText += ` and heals allies in AOE`;
        break;
      case "Hemomancer":
        if (upgrade.upgrade3) finalScale[0] += 50;
        skillText = skillText.replace(
          "(70+100%)%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)%`
        );
        break;
      case "Tempest":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade4) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "1+5%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Stormkeeper":
        if (upgrade.upgrade1) finalBase[0] += 1;
        if (upgrade.upgrade2) finalBase[0] += 1;
        if (upgrade.upgrade4) finalBase[1] += 1;
        skillText = skillText
          .replace(
            "4+10%",
            `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
          )
          .replace("1 turn", `${finalBase[1]} turn`);
        if (finalBase[1] > 1) skillText += `s`;
        break;
      case "Godfrost":
        break;
      case "Ascendant":
        if (upgrade.upgrade3) finalScale[0] += 30;
        if (upgrade.upgrade2) {
          finalBase[0] = Math.floor(finalBase[0] * 0.5);
          finalScale[0] = Math.floor(finalScale[0] * 0.5);
        }
        skillText = skillText.replace(
          "1+20%",
          `${finalBase[0]}+(${finalScale[0]}% Mastery-scaling)`
        );
        break;
      default:
        skillText = skillText.toLowerCase();
        break;
    }
    return skillText;
  }
}

export function classSkillCost(className, mana, skillNum, upgrade) {
  let cost = Number(mana); // Ensure it's a number
  if (skillNum === 1) {
    switch (className) {
      case "Devoted":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Nightblade":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade3) cost *= 2;
        break;
      case "Seeker":
        if (upgrade.upgrade4) cost *= 1.5;
        break;
      case "Gallant":
        if (upgrade.upgrade2) cost -= 15;
        break;
      case "Ranger":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Cutthroat":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Tamer":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Quickdraw":
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Warlock":
        if (upgrade.upgrade3) cost *= 0.5;
        break;
      case "Geomancer":
        if (upgrade.upgrade1) cost -= 15;
        if (upgrade.upgrade2) cost *= 0.5;
        break;
      case "Aegis":
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Scholar":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Juggernaut":
        if (upgrade.upgrade3) cost -= 10;
        if (upgrade.upgrade1) cost *= 1.5;
        break;
      case "Waveseer":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Elementalist":
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Ritualist":
        if (upgrade.upgrade3) cost -= 10;
        if (upgrade.upgrade1) cost *= 0.5;
        break;
      case "Gale":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Conduit":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Frigillan":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Monk":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade4) cost *= 0.5;
        break;
      case "Reaper":
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Ancarant":
        if (upgrade.upgrade1) cost -= 15;
        break;
      case "Ellisant":
        if (upgrade.upgrade4) cost -= 10;
        if (upgrade.upgrade3) cost *= 1.5;
        break;
      case "Champion":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Warden":
        if (upgrade.upgrade3) cost -= 10;
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Slayer":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Beastmaster":
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Deadeye":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Necromancer":
        if (upgrade.upgrade3) cost -= 15;
        if (upgrade.upgrade1) cost *= 0.5;
        if (upgrade.upgrade2) cost -= 15;
        break;
      case "Cosmician":
        if (upgrade.upgrade1) cost *= 0.5;
        break;
      case "Relic Knight":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost *= 2;
        break;
      case "Loremaster":
        if (upgrade.upgrade2) cost -= 20;
        if (upgrade.upgrade1) cost *= 0.5;
        break;
      case "Dreadnought":
        break;
      case "Tidecaller":
        if (upgrade.upgrade4) cost -= 15;
        if (upgrade.upgrade2) cost *= 1.5;
        break;
      case "Spirit Keeper":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Hemomancer":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Tempest":
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Stormkeeper":
        if (upgrade.upgrade3) cost -= 15;
        break;
      case "Godfrost":
        if (upgrade.upgrade2) cost -= 15;
        if (upgrade.upgrade1) cost -= 15;
        break;
      case "Ascendant":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost *= 0.5;
        break;
      default:
        cost = 999;
        break;
    }
    return Math.floor(cost); // Return integer value
  } else if (skillNum === 2) {
    switch (className) {
      case "Devoted":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost *= 1.5;
        break;
      case "Nightblade":
        if (upgrade.upgrade1) cost *= 2;
        break;
      case "Seeker":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost *= 2;
        break;
      case "Gallant":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade3) cost *= 1.3;
        break;
      case "Ranger":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Cutthroat":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Tamer":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Quickdraw":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Warlock":
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Geomancer":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Aegis":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Scholar":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost *= 1.5;
        break;
      case "Juggernaut":
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Waveseer":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Elementalist":
        if (upgrade.upgrade1) cost *= 0.5;
        if (upgrade.upgrade2) cost -= 15;
        break;
      case "Ritualist":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade3) cost *= 2;
        break;
      case "Gale":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Conduit":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Frigillan":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Monk":
        if (upgrade.upgrade1) cost *= 2;
        if (upgrade.upgrade3) cost -= 5;
        break;
      case "Reaper":
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Ancarant":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost *= 1.5;
        break;
      case "Ellisant":
        if (upgrade.upgrade1) cost *= 0.5;
        break;
      case "Champion":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Warden":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Slayer":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Beastmaster":
        if (upgrade.upgrade1) cost -= 10;
        if (upgrade.upgrade2) cost -= 10;
        break;
      case "Deadeye":
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Necromancer":
        if (upgrade.upgrade1) cost -= 5;
        if (upgrade.upgrade3) cost -= 5;
        if (upgrade.upgrade2) cost *= 2;
        break;
      case "Cosmician":
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Relic Knight":
        if (upgrade.upgrade3) cost -= 15;
        if (upgrade.upgrade2) cost *= 1.5;
        break;
      case "Loremaster":
        break;
      case "Dreadnought":
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Tidecaller":
        if (upgrade.upgrade1) cost -= 15;
        if (upgrade.upgrade3) cost -= 15;
        break;
      case "Spirit Keeper":
        if (upgrade.upgrade2) cost -= 25;
        break;
      case "Hemomancer":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade4) cost -= 10;
        break;
      case "Tempest":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade3) cost -= 10;
        break;
      case "Stormkeeper":
        if (upgrade.upgrade3) cost -= 15;
        break;
      case "Godfrost":
        if (upgrade.upgrade2) cost -= 10;
        if (upgrade.upgrade1) cost -= 10;
        break;
      case "Ascendant":
        if (upgrade.upgrade1) cost -= 15;
        if (upgrade.upgrade2) cost *= 0.5;
        if (upgrade.upgrade4) cost -= 15;
        break;
      default:
        cost = 999;
        break;
    }
    return Math.floor(cost); // Return integer value
  }
}

export function classSkillRng(className, rng, skillNum, upgrade) {
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
  if (skillNum === 1) {
    switch (className) {
      case "Devoted":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Nightblade":
        if (upgrade.upgrade1) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Seeker":
        if (upgrade.upgrade1) rngMin -= 1;
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Gallant":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ranger":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Cutthroat":
        if (upgrade.upgrade1) rngMax += 1;
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Tamer":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Quickdraw":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Geomancer":
        if (upgrade.upgrade4) rngMax += 1;
        if (upgrade.upgrade2) rngMax = Math.floor(rngMax * 0.5);
        range = `${rngMin}~${rngMax}`;
        break;
      case "Warlock":
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Aegis":
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Scholar":
        if (upgrade.upgrade3) rngMin -= 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Juggernaut":
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Waveseer":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Elementalist":
        if (upgrade.upgrade1) rngMin -= 1;
        if (upgrade.upgrade3) rngMax += 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ritualist":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Gale":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Conduit":
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Frigillan":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Monk":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Reaper":
        if (upgrade.upgrade1) rngMin -= 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ancarant":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ellisant":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Champion":
        range = `Same as attack range`;
        break;
      case "Warden":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Slayer":
        if (upgrade.upgrade3) rngMax += 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Beastmaster":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Deadeye":
        if (upgrade.upgrade3) rngMax += 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Cosmician":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Necromancer":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Relic Knight":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Loremaster":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Dreadnought":
        if (upgrade.upgrade2) rngMin -= 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Tidecaller":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Spirit Keeper":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Hemomancer":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Tempest":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Stormkeeper":
        if (upgrade.upgrade1) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Godfrost":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ascendant":
        range = `${rngMin}~${rngMax}`;
        break;
      default:
        range = `${rngMin}~${rngMax} undefined`;
        break;
    }
    return range;
  } else if (skillNum === 2) {
    switch (className) {
      case "Devoted":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Nightblade":
        if (upgrade.upgrade4) rngMin -= 1;
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Seeker":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Gallant":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ranger":
        range = `Same as attack range`;
        break;
      case "Cutthroat":
        range = `Same as attack range`;
        break;
      case "Tamer":
        range = `Same as attack range`;
        break;
      case "Quickdraw":
        range = `Same as attack range`;
        break;
      case "Geomancer":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Warlock":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Aegis":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Scholar":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Juggernaut":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Waveseer":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Elementalist":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ritualist":
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Gale":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Conduit":
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Frigillan":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Monk":
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Reaper":
        if (upgrade.upgrade1) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ancarant":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ellisant":
        if (upgrade.upgrade1) rngMax -= 1;
        if (upgrade.upgrade2) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Champion":
        range = `Same as attack range`;
        break;
      case "Warden":
        range = `Same as attack range`;
        break;
      case "Slayer":
        range = `Same as attack range`;
        break;
      case "Beastmaster":
        range = `Same as attack range`;
        break;
      case "Deadeye":
        range = `Same as attack range`;
        break;
      case "Cosmician":
        if (upgrade.upgrade1) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Necromancer":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Relic Knight":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Loremaster":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Dreadnought":
        range = `Same as attack range`;
        break;
      case "Tidecaller":
        if (upgrade.upgrade2) rngMax += 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Spirit Keeper":
        if (upgrade.upgrade3) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Hemomancer":
        if (upgrade.upgrade1) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Tempest":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      case "Stormkeeper":
        range = `${rngMin}~${rngMax}`;
        break;
      case "Godfrost":
        if (upgrade.upgrade3) rngMax += 1;
        if (upgrade.upgrade4) rngMax += 1;
        range = `${rngMin}~${rngMax}`;
        break;
      case "Ascendant":
        range = `${rngMin}~${rngMax}(Self)`;
        break;
      default:
        range = `${rngMin}~${rngMax} undefined`;
        break;
    }
    return range;
  }
}

export function classWriteUps(className, part) {
  const writeUp = Object.values(classWriteUp).find(
    (class1) => class1.Name === className
  );
  const class2 = Object.values(classSkills).find(
    (class1) => class1.Name === className
  );
  const class3 = Object.values(classStat).find(
    (class1) => class1.Name === className
  );
  switch (part) {
    case "rating":
      return (
        <table className="stat-table">
          <thead>
            <tr>
              <td>Stats</td>
              <td>Combat</td>
              <td>Support</td>
              <td>Skill Damage</td>
              <td>Synergy</td>
            </tr>
          </thead>
          <tr>
            <td>{writeUp.Rating[0]}</td>
            <td>{writeUp.Rating[1]}</td>
            <td>{writeUp.Rating[2]}</td>
            <td>{writeUp.Rating[3]}</td>
            <td>{writeUp.Rating[4]}</td>
          </tr>
        </table>
      );
    case "stats":
      return <p>{writeUp.Stats}</p>;
    case "char":
      return <p>{writeUp.Character}</p>;
    case "upgrade1":
      return (
        <table className="active-table">
          <tbody>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                {class3.Skill1} Upgrade priority
              </th>
            </tr>
            <tr>
              <td className="upgrade-box">{class2.S1Buff1}</td>
              <td className="upgrade-box">{class2.S1Buff2}</td>
              <td className="upgrade-box">{class2.S1Buff3}</td>
              <td className="upgrade-box">{class2.S1Buff4}</td>
            </tr>
            <tr>
              <td className="upgrade-box">{writeUp.Upgrade1[0]}</td>
              <td className="upgrade-box">{writeUp.Upgrade1[1]}</td>
              <td className="upgrade-box">{writeUp.Upgrade1[2]}</td>
              <td className="upgrade-box">{writeUp.Upgrade1[3]}</td>
            </tr>
          </tbody>
        </table>
      );
    case "upgrade2":
      return (
        <table className="active-table">
          <tbody>
            <tr>
              <th colSpan="4" style={{ textAlign: "center" }}>
                {class3.Skill2} Upgrade priority
              </th>
            </tr>
            <tr>
              <td className="upgrade-box">{class2.S2Buff1}</td>
              <td className="upgrade-box">{class2.S2Buff2}</td>
              <td className="upgrade-box">{class2.S2Buff3}</td>
              <td className="upgrade-box">{class2.S2Buff4}</td>
            </tr>
            <tr>
              <td className="upgrade-box">{writeUp.Upgrade2[0]}</td>
              <td className="upgrade-box">{writeUp.Upgrade2[1]}</td>
              <td className="upgrade-box">{writeUp.Upgrade2[2]}</td>
              <td className="upgrade-box">{writeUp.Upgrade2[3]}</td>
            </tr>
          </tbody>
        </table>
      );
    case "skills":
      return <p>{writeUp.Skills}</p>;
    case "tips":
      return <p>{writeUp.Tips}</p>;
    case "rings":
      return <p>{writeUp.Rings}</p>;
    case "weapons":
      return <p>{writeUp.Weapons}</p>;
    case "class":
      return <p>{writeUp.Class}</p>;
    default:
      return <p>Insert corresponding {className} write-up</p>;
  }
}
