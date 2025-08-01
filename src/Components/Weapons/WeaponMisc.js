import { processLinkText } from "../Rings/RingMisc";
//import weaponInfo from "./Weapons.json";
import weapsWriteUp from "./WeaponWriteUp.json";
import rWriteUp from "./Runes/RuneWriteUp.json";

export function WeaponWriteUps(weapName, part) {
  const writeUp = Object.values(weapsWriteUp).find(
    (weap) => weap.Name === weapName
  );

  switch (part) {
    case "detail":
      return <p>{processLinkText(writeUp.Details)}</p>;
    default:
      return (
        <p>
          return <p>Insert corresponding {weapName} write-up</p>;
        </p>
      );
  }
}

export function RuneWriteUps(runeName, part) {
  const writeUp = Object.values(rWriteUp).find(
    (ring) => ring.Rune.toLowerCase() === runeName
  );

  switch (part) {
    case "detail":
      return <p>{processLinkText(writeUp.Details)}</p>;
    default:
      return (
        <p>
          return <p>Insert corresponding {runeName} write-up</p>;
        </p>
      );
  }
}

export function outputEffect(state) {
  if (state === null) {
    return null;
  }

  switch (state) {
    case "Challenger":
      return "+20% crit against full HP enemies;";
    case "Stagger":
      return "Applies 4 Light Vulnerable stacks;";
    case "Solar":
      return "10% chance to deal 50% extra damage;";
    case "Ferocity":
      return "Attacks twice at 60% damage;";
    case "Poison":
      return "Applies 2 Light Poison stacks;";
    case "Knight":
      return "Add 10% of current HP to Power. Capped at 5;";
    case "Finesse":
      return "Add 25% of unit's Dexterity to unit's Power;";
    case "Silent":
      return "Add 25% of unit's Fortitude to unit's Power;";
    case "Fool":
      return "Add 25% of unit's Luck to unit's Power;";
    case "Wizard":
      return "Add 25% of unit's Mastery to unit's Power;";
    case "Bludgeon":
      return "Attacks has a 25% chance to apply Light Stun;";
    case "Leeching":
      return "Attacks restore 3 Mana;";
    case "Nemesis":
      return "Counterattack damage +6;";
    case "Assassin":
      return "Critical hits deal 50% more damage;";
    case "Ragnarok":
      return "Crits deal +10 damage;";
    case "Cadence":
      return "Deal 1 additional damage for each tile moved this turn;";
    case "Templar":
      return "Deal 5 additional damage to magic enemies;";
    case "Light":
      return "Applies 30 Heavy Blind stacks;";
    case "Draining":
      return "Applies 4 Light Weak stacks;";
    case "Powered":
      return "Drains 10 Mana for 6 Power per attack;";
    case "Tactician":
      return "Every debuff on enemy increases damage by 2;";
    case "Empyrean":
      return "Gain 5 mana from kills;";
    case "Vampire":
      return "Hits heal unit for 5;";
    case "Crusader":
      return "Kills grant 1 power until end of battle;";
    case "Arcane":
      return "Makes damage type Magical;";
    case "Sealing":
      return "Makes damage type Physical;";
    case "Overflow":
      return "Store 10% of damage dealt as Light Block;";
    case "Bursting":
      return "Store up to 8 overkill damage to be dealt on next attack;";
    case "Valorous":
      return "Unit Power +5 when below half HP;";
    case "Piercing":
      return "Unit Power halfed, ignore Defense/Fortitude;";
    case "Serene":
      return "Unit Power increase by 4% of unit Accuracy;";
    case "Celerity":
      return "Weapon Power -2(reflected on stat), Damage +6 on followup attacks;";
    case "Cavalier":
      return "Add 25% of unit's Speed to unit's Power;";
    case "Bastion":
      return "Add 25% of unit's Defense to unit's Power;";
    default:
      return null;
  }
}

export function outputStat(state, stats) {
  const activeRunes = Object.keys(state).filter((rune) => state[rune]);
  let pwr = Number(stats.Power);
  let crit = Number(stats.Crit);
  let acc = Number(stats.Accuracy);
  let wgt = Number(stats.Weight);
  if (activeRunes[0] === "Maul" || activeRunes[1] === "Maul") {
    pwr += 3;
  }
  if (activeRunes[0] === "Deadly" || activeRunes[1] === "Deadly") {
    crit += 15;
  }
  if (activeRunes[0] === "Pure" || activeRunes[1] === "Pure") {
    acc += 30;
  }
  if (activeRunes[0] === "Shrink" || activeRunes[1] === "Shrink") {
    wgt -= 3;
  }
  if (activeRunes[0] === "Mighty" || activeRunes[1] === "Mighty") {
    pwr += 2;
  }
  if (activeRunes[0] === "Barbs" || activeRunes[1] === "Barbs") {
    crit += 10;
  }
  if (activeRunes[0] === "Faith" || activeRunes[1] === "Faith") {
    acc += 20;
  }
  if (activeRunes[0] === "Slim" || activeRunes[1] === "Slim") {
    wgt -= 2;
  }
  if (activeRunes[0] === "Sniper" || activeRunes[1] === "Sniper") {
    acc += 40;
    pwr -= 5;
  }
  if (activeRunes[0] === "Truestrike" || activeRunes[1] === "Truestrike") {
    crit += 20;
    acc += 20;
    wgt += 3;
    pwr -= 3;
  }
  if (activeRunes[0] === "Vicious" || activeRunes[1] === "Vicious") {
    crit += 20;
    acc -= 15;
    pwr -= 3;
  }
  if (activeRunes[0] === "Titan" || activeRunes[1] === "Titan") {
    pwr += 5;
    acc -= 25;
  }
  if (activeRunes[0] === "Colossus" || activeRunes[1] === "Colossus") {
    pwr += 5;
    wgt += 5;
    acc += 10;
  }
  if (activeRunes[0] === "Celerity" || activeRunes[1] === "Celerity") {
    pwr -= 2;
  }
  if (activeRunes[0] === "Swift" || activeRunes[1] === "Swift") {
    wgt -= 4;
    pwr -= 2;
  }
  if (wgt < 0) {
    wgt = 0;
  }
  return [pwr, crit, acc, wgt];
}
