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
  if (wgt < 0) {
    wgt = 0;
  }
  return [pwr, crit, acc, wgt];
}
