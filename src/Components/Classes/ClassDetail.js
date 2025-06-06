import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classStat from "../Datas/classStats.json";
import { ClassIntro } from "./ClassMisc";
import "../../App.css";
import "./Class.css";

function ClassDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")

  const class1 = Object.values(classStat).find(
    (class2) => class2.Name.replace(/\s+/g, "").toLowerCase() === name
  );
  const Name1 = class1.Name;

  const imageContext = require.context(
    "./Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );
  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "").replace(/\s+/g, "");

    acc[name] = imageContext(key);

    return acc;
  }, {});

  if (!class1) return <div>Class not found</div>;

  const modHeader = (key) => {
    const trimmed = key.replace(/_(Grow|Mod)$/, "");
    return trimmed;
  };

  return (
    <div>
      <header className="page-header">{class1.Name}</header>
      <div className="page-body">
        <img
          src={images[name.toLowerCase()]}
          alt={name}
          className="class-image"
        />
        <div>
          {ClassIntro(Name1)}
          <h3>Class Growth Modifier:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(classStat[0])
                  .filter((key) =>
                    [
                      "HP_Grow",
                      "Mgt_Grow",
                      "Spd_Grow",
                      "Dex_Grow",
                      "Def_Grow",
                      "Frt_Grow",
                      "Mas_Grow",
                      "Lck_Grow",
                    ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{modHeader(key)}</th>
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
                        classStat.find((clas) => clas.Name === class1.Name)
                      )
                        .filter(([key]) =>
                          [
                            "HP_Grow",
                            "Mgt_Grow",
                            "Spd_Grow",
                            "Dex_Grow",
                            "Def_Grow",
                            "Frt_Grow",
                            "Mas_Grow",
                            "Lck_Grow",
                          ].includes(key)
                        )
                        .map(([key, value]) => {
                          value = value * 100;
                          total += value;
                          return <td key={key}>{`${value}%`}</td>;
                        })}
                      <td>{`${total}%`}</td>
                    </>
                  );
                })()}
              </tr>
            </tbody>
          </table>
          <h3>Class Stats Modifier:</h3>
          <table className="stat-table">
            <thead>
              <tr>
                {Object.keys(classStat[0])
                  .filter((key) =>
                    [
                      "HP_Mod",
                      "Mgt_Mod",
                      "Spd_Mod",
                      "Dex_Mod",
                      "Def_Mod",
                      "Frt_Mod",
                      "Mas_Mod",
                      "Lck_Mod",
                    ].includes(key)
                  ) // Exclude these keys
                  .map((key) => (
                    <th key={key}>{modHeader(key)}</th>
                  ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {(() => {
                  const character = classStat.find(
                    (clas) => clas.Name === class1.Name
                  );
                  let total = 0;
                  return (
                    <>
                      {Object.entries(character)
                        .filter(([key]) =>
                          [
                            "HP_Mod",
                            "Mgt_Mod",
                            "Spd_Mod",
                            "Dex_Mod",
                            "Def_Mod",
                            "Frt_Mod",
                            "Mas_Mod",
                            "Lck_Mod",
                          ].includes(key)
                        )
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
          <h3>Class Passive:</h3>
          <h3>Class Skills:</h3>
        </div>
        <Link to="/classes">Back</Link>{" "}
      </div>
    </div>
  );
}

export default ClassDetail;
