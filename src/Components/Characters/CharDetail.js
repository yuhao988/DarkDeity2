import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import charActive from "../Datas/charActive.json";
import charGrowth from "../Datas/charStatPass.json";
import "../../App.css";
import "./Char.css";

function CharDetail() {
  let rngMin = 0;
  let rngMax = 0;
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
    } else if (rng==="Self"){
      rngMax = 0;
      rngMin = 0;
      return `${rngMin}~${rngMax}(Self)`;
    }

    const matches = rng.match(/(\d+)/g);
   

    if (matches && matches.length >= 2) {
      [rngMin, rngMax] = matches.map(Number);
      
      return `${rngMin}~${rngMax}`;
    }

    
    return "Invalid range format";
  };

  const imageContext = require.context(
    "./Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name1 = key.replace("./", "").replace(/\..+$/, "");
    acc[name1] = imageContext(key);
    return acc;
  }, {});

  const getSkillColor = (skillType) => {
    const colorMap = {
      Red: "rgb(160, 3, 3)",
      Blue: "rgb(36, 3, 156)",
      Green: "rgb(3, 128, 50)",
      default: "#f5f6fa", // Fallback
    };
    return colorMap[skillType] || colorMap.default;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{character1.Name}</h1>
      </header>
      <div className="App-body">
        <img
          src={images[name.toLowerCase()]}
          alt={name}
          className="character-image"
        />
        <div className="character-detail">
          <h3>Base stats:</h3>
          <table className="stat-table"></table>
          <h3>Personal growth:</h3>
          <table className="stat-table"></table>
          <h3>Passive:</h3>
          <table className="passive-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{character2.passive}</td>
              </tr>
              <tr>
                <th>Effect</th>
                <td>{character2.passiveEff}</td>
              </tr>
            </tbody>
          </table>
          <h3>Personal:</h3>
          <table className="active-table">
            <tbody>
              <tr>
                <th>Name</th>
                <td
                  style={{
                    backgroundColor: getSkillColor(character1.activeType),
                    color: "#FFFFFF",
                  }}
                >
                  {character1.activeSkill}
                </td>
              </tr>
              <tr>
                <th>Cost</th>
                <td>{character1.activeMana}</td>
              </tr>
              <tr>
                <th>Range</th>
                <td>{displayedRng(character1.activeRng)}</td>
              </tr>
              <tr>
                <th>Effect</th>
                <td>{character1.activeEff}</td>
              </tr>
            </tbody>
          </table>

          <p>Skill Upgrade 1: {character1.activeBuff1}</p>
          <p>Skill Upgrade 2: {character1.activeBuff2}</p>
          <p>Skill Upgrade 3: {character1.activeBuff3}</p>
          <p>Skill Upgrade 4: {character1.activeBuff4}</p>
        </div>
        <Link to="/characters">Back</Link>{" "}
      </div>
    </div>
  );
}

export default CharDetail;
