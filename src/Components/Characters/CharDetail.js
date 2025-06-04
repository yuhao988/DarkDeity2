import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import charActive from "../Datas/charActive.json";
import charGrowth from "../Datas/charStatPass.json";
import "../../App.css";
import "./Char.css";

function CharDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const character1 = Object.values(charActive).find(
    (char) => char.Name.toLowerCase() === name
  );
  const character2 = Object.values(charGrowth).find(
    (char) => char.Name.toLowerCase() === name
  );

  if (!character1) return <div>Character not found</div>;

  const displayedRng = (rng) => {
    if (rng === "Attack") {
      return "Same as attack range";
    } else {
      return rng;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{character1.Name}</h1>
      </header>
      <body className="App-body">
        <div className="character-detail">
          <p>Passive Skill: {character2.passive}</p>
          <p>Passive Effect: {character2.passiveEff}</p>
          <p>Active Skill: {character1.activeSkill}</p>
          <p>Skill Effect: {character1.activeEff}</p>
          <p>Skill Type: {character1.activeType}</p>
          <p>Mana Cost: {character1.activeMana}</p>
          <p>Range: {displayedRng(character1.activeRng)}</p>
          <p>Skill Upgrade 1: {character1.activeBuff1}</p>
          <p>Skill Upgrade 2: {character1.activeBuff2}</p>
          <p>Skill Upgrade 3: {character1.activeBuff3}</p>
          <p>Skill Upgrade 4: {character1.activeBuff4}</p>
        </div>
        <Link to="/characters">Back</Link>{" "}
      </body>
    </div>
  );
}

export default CharDetail;
