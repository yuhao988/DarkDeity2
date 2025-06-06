import "./Class.css";

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
