import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import charActive from "../Datas/charActive.json";
import "../../App.css";
import "./Char.css";

function CharDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const character = Object.values(charActive).find(
    (char) => char.Name.toLowerCase() === name
  );

  if (!character) return <div>Character not found</div>;

  const displayedRng =(rng)=>{
    if (rng==="Attack"){
        return "Same as attack range"
    } else {
        return rng
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{character.Name}</h1>
      </header>
      <body className="App-body">
        <div className="character-detail">      
      <p>Active Skill: {character.activeSkill}</p>
      <p>Skill Effect: {character.activeEff}</p>
      <p>Skill Type: {character.activeType}</p>
      <p>Mana Cost: {character.activeMana}</p>
      <p>Range: {displayedRng(character.activeRng)}</p>
      <p>Skill Upgrade 1: {character.activeBuff1}</p>
      <p>Skill Upgrade 2: {character.activeBuff2}</p>
      <p>Skill Upgrade 3: {character.activeBuff3}</p>
      <p>Skill Upgrade 4: {character.activeBuff4}</p>
      
    </div>
        <Link to="/characters">Back</Link>{" "}
      </body>
    </div>
  );
}

export default CharDetail;
