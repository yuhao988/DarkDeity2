import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import charActive from "../Datas/charActive.json";
import charGrowth from "../Datas/charStatPass.json";
import charBase from "../Datas/charBase.json";
import { charIntro } from "./CharMisc";
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
    } else if (rng === "Self") {
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

  const turnCap = (key) => {
    if (key === "hp") {
      key = key.toUpperCase();
    } else {
      key = key.charAt(0).toUpperCase() + key.slice(1);
    }
    return key;
  };

  return (
    <div>
      <header className="page-header">
        <h1>{character1.Name}</h1>
      </header>
      <div className="page-body">
        <img
          src={images[name.toLowerCase()]}
          alt={name}
          className="character-image"
        />
        <div className="character-detail">
          {charIntro()}
          <h3>Base stats:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(charBase[0])
                  .filter((key) => !["ID", "Name"].includes(key)) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  let total = 0;
                  return (
                    <>
                      {Object.entries(
                        charBase.find((char) => char.Name === character1.Name)
                      )
                        .filter(([key]) => !["ID", "Name"].includes(key))
                        .map(([key, value]) => {
                          const numValue = Number(value) || 0;
                          total += numValue;
                          return <td key={key}>{value}</td>;
                        })}
                      <td>{total}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
          <h3>Personal growth:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(charGrowth[0])
                  .filter(
                    (key) =>
                      ![
                        "ID",
                        "Name",
                        "classLine",
                        "passive",
                        "passiveEff",
                      ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{turnCap(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  const character = charGrowth.find(
                    (char) => char.Name === character1.Name
                  );
                  let total = 0;
                  return (
                    <>
                      {Object.entries(character)
                        .filter(
                          ([key]) =>
                            ![
                              "ID",
                              "Name",
                              "classLine",
                              "passive",
                              "passiveEff",
                            ].includes(key)
                        )
                        .map(([key, value]) => {
                          let numValue;
                          if (
                            typeof value === "string" &&
                            value.includes("%")
                          ) {
                            numValue = parseFloat(value);
                          } else {
                            numValue = Number(value) || 0;
                          }
                          total += numValue;
                          return <td key={key}>{value}</td>;
                        })}
                      <td>{`${total}%`}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
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
                  colSpan="4"
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
                <td colSpan="4">{character1.activeMana}</td>
              </tr>
              <tr>
                <th>Range</th>
                <td colSpan="4">{displayedRng(character1.activeRng)}</td>
              </tr>
              <tr>
                <th>Effect</th>
                <td colSpan="4">{character1.activeEff}</td>
              </tr>
              <tr>
                <th>Upgrades</th>
                <td className="upgrade-box">
                  {character1.activeBuff1}
                  <br />
                  <button>Upgrade</button>
                </td>
                <td className="upgrade-box">
                  {character1.activeBuff2}
                  <br />
                  <button>Upgrade</button>
                </td>
                <td className="upgrade-box">
                  {character1.activeBuff3}
                  <br />
                  <button>Upgrade</button>
                </td>
                <td className="upgrade-box">
                  {character1.activeBuff4}
                  <br />
                  <button>Upgrade</button>
                </td>
              </tr>
              <tr>
                <th></th>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  <button
                    style={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/characters">Back</Link>{" "}
      </div>
    </div>
  );
}

export default CharDetail;
