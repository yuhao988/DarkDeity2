import { Link } from "react-router-dom";
import classStat from "../Datas/classStats.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Class.css";

function ClassMain() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Classes</h1>
      </header>
      <div className="App-body">
        <table>
          <tbody>
            <tr>
              <th colSpan="5">
                <h2>Vanguard</h2>
              </th>
            </tr>
            <tr>
              <th>
                <h4>Tier 2</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Vanguard" && // Example condition
                    class1.tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[class1.name.replace(/\s+/g, "").toLowerCase()]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
            <tr>
              <th>
                <h4>Tier 3</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Vanguard" && // Example condition
                    class1.tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th colSpan="5">
                <h2>Hunter</h2>
              </th>
            </tr>
            <tr>
              <th>
                <h4>Tier 2</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Hunter" && // Example condition
                    class1.tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
            <tr>
              <th>
                <h4>Tier 3</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Hunter" && // Example condition
                    class1.tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th colSpan="5">
                <h2>Summoner</h2>
              </th>
            </tr>
            <tr>
              <th>
                <h4>Tier 2</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Summoner" && // Example condition
                    class1.tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
            <tr>
              <th>
                <h4>Tier 3</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Summoner" && // Example condition
                    class1.tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th colSpan="5">
                <h2>Shaman</h2>
              </th>
            </tr>
            <tr>
              <th>
                <h4>Tier 2</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Shaman" && // Example condition
                    class1.tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
            <tr>
              <th>
                <h4>Tier 3</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Shaman" && // Example condition
                    class1.tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th colSpan="5">
                <h2>Adept</h2>
              </th>
            </tr>
            <tr>
              <th>
                <h4>Tier 2</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Adept" && // Example condition
                    class1.tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
            <tr>
              <th>
                <h4>Tier 3</h4>
              </th>
              {Object.values(classStat)
                .filter(
                  (class1) =>
                    class1.classLine === "Adept" && // Example condition
                    class1.tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={images[(class1.name.replace(/\s+/g, "").toLowerCase())]}
                      alt={class1.name}
                      className="class-image"
                    />

                    <Link to={`/classes/${(class1.name.replace(/\s+/g, "").toLowerCase())}`}>
                      <h3>{class1.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <div className="class-list"></div>
        <Link to="/">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default ClassMain;
