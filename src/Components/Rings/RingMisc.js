import ringInfo from "./Rings.json";
import ringWriteUp from "./RingsWriteUp.json";
import weaponInfo from "../Weapons/Weapons.json";
import runeInfo from "../Weapons/Runes/Runes.json";
import React from "react";
import { Link } from "react-router-dom";
//import { paragraphBreak } from "../../Home";

const ringNames = ringInfo.map((ring) => ring.Name);
const weaponNames = weaponInfo.map((weapon) => weapon.Name);
const runeNames = runeInfo.map((rune) => rune.Rune);
export { ringNames, weaponNames, runeNames };

// Improved splitPattern function with proper handling
const splitPattern = (array, pattern) => {
  return array.flatMap((item) => {
    if (typeof item === "string") {
      return item.split(pattern);
    }
    return [item]; // Keep non-string elements as-is
  });
};

export function processLinkText(text) {
  // First split by <br/> tags (all variants), then process each segment for ring names
  const segments = text.split(/<br\s*\/?>/i);

  return segments.map((segment, segmentIndex) => {
    // Process ring names in this segment (original functionality)
    const ringPattern = new RegExp(
      `\\b(${ringNames
        .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})\\b`,
      "g"
    );
    const weaponPattern = new RegExp(
      `\\b(${weaponNames
        .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})\\b`,
      "g"
    );
    const runePattern = new RegExp(
      `\\b(${runeNames
        .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})\\b`,
      "g"
    );
    // Process splits sequentially
    let parts = [segment];
    parts = splitPattern(parts, ringPattern);
    parts = splitPattern(parts, weaponPattern);
    parts = splitPattern(parts, runePattern);

    const processedSegment = parts.map((part, partIndex) => {
      let patternType = null;
      if (ringNames.includes(part)) patternType = "ring";
      else if (weaponNames.includes(part)) patternType = "weapon";
      else if (runeNames.includes(part)) patternType = "rune";

      switch (patternType) {
        case "ring":
          return (
            <Link
              key={`${segmentIndex}-${partIndex}`}
              to={`/rings/${part.toLowerCase()}`}
              className="ring-link"
            >
              {part}
            </Link>
          );
        case "weapon":
          return (
            <Link
              key={`${segmentIndex}-${partIndex}`}
              to={`/weapons/${part.replace(/\s+/g, "").toLowerCase()}`}
              className="weapon-link"
            >
              {part}
            </Link>
          );
        case "rune":
          return (
            <Link
              key={`${segmentIndex}-${partIndex}`}
              to={`/weapons/runes/${part.replace(/\s+/g, "").toLowerCase()}`}
              className="rune-link"
            >
              {part}
            </Link>
          );
        default:
          // If no match, return the part as is
          return part;
      }
    });

    // Add line break after all segments except the last one
    return (
      <React.Fragment key={`seg-${segmentIndex}`}>
        {processedSegment}
        {segmentIndex < segments.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

export function RingWriteUps(ringName, part) {
  const writeUp = Object.values(ringWriteUp).find(
    (ring) => ring.Name.toLowerCase() === ringName
  );
  
  switch (part) {
    case "detail":
      return <p>{processLinkText(writeUp.Details)}</p>;
    default:
      return (
        <p>
          return <p>Insert corresponding {ringName} write-up</p>;
        </p>
      );
  }
}
