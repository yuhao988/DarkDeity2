import { processLinkText } from "../Rings/RingMisc";
//import weaponInfo from "./Weapons.json";
import weapsWriteUp from "./WeaponWriteUp.json";  
import rWriteUp from "./Runes/RuneWriteUp.json";


export function WeaponWriteUps(weapName, part) {
  const writeUp = Object.values(weapsWriteUp).find(
    (weap) => weap.Name=== weapName
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
