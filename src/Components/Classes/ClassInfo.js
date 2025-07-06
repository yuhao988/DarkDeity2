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
    <div>
      <header className="page-header">
        <h1>Classes</h1>
      </header>
      <div className="page-body">
        <p style={{ width: "75vw" }}>
          All classes in Dark Deity 2 are grouped in 5 different classlines,
          named after the Tier 1 class of that classline by players (there is no
          official name for the classlines).
          <br />
          Each playable character in game belongs to one of the classlines, and
          can change into any classes within the classline. They cannot change
          into a class of a different classline.
          <br />
          Every classline contains 1 Tier 1 class, 4 Tier 2 classes and 4 Tier 3
          classes. A character can change into any of the Tier 2 classes in
          their classline from lv.5 onwards using an Astral Coin, and later into
          a Tier 3 class with an Astral Ingot. 
          <br />
          Note that when a character
          promotes into a higher tier, they can no longer go back into a lower tier,
          and when they promote into a Tier 3 class from Tier 2, the passive and
          skills of the Tier 2 class stay with the character and can no longer
          be changed. Thus while players can have fun experimenting with
          different classes throughout the game, it is advised for players to be
          cautious when they first promote into Tier 3.
        </p>
        <table className="class-table">
          <tbody>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "rgb(92, 17, 17)" }}>
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
                    class1.Classline === "Vanguard" && // Example condition
                    class1.Tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
                    class1.Classline === "Vanguard" && // Example condition
                    class1.Tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table className="class-table">
          <tbody>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "rgb(100, 2, 100)" }}>
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
                    class1.Classline === "Hunter" && // Example condition
                    class1.Tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
                    class1.Classline === "Hunter" && // Example condition
                    class1.Tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table className="class-table">
          <tbody>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "rgb(4, 4, 126)" }}>
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
                    class1.Classline === "Summoner" && // Example condition
                    class1.Tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
                    class1.Classline === "Summoner" && // Example condition
                    class1.Tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table className="class-table">
          <tbody>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "rgb(4, 73, 4)" }}>
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
                    class1.Classline === "Shaman" && // Example condition
                    class1.Tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
                    class1.Classline === "Shaman" && // Example condition
                    class1.Tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
        <table className="class-table">
          <tbody>
            <tr>
              <th colSpan="5" style={{ backgroundColor: "rgb(102, 87, 0)" }}>
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
                    class1.Classline === "Adept" && // Example condition
                    class1.Tier === 2 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
                    class1.Classline === "Adept" && // Example condition
                    class1.Tier === 3 // Additional conditions
                )
                .map((class1, index) => (
                  <td key={index} className="class-card">
                    <img
                      src={
                        images[class1.Name.replace(/\s+/g, "").toLowerCase()]
                      }
                      alt={class1.Name}
                      className="class-image"
                    />

                    <Link
                      to={`/classes/${class1.Name.replace(
                        /\s+/g,
                        ""
                      ).toLowerCase()}`}
                    >
                      <h3>{class1.Name}</h3>
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
