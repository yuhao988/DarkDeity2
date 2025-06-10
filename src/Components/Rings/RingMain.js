import { Link } from "react-router-dom";
import ringInfo from "./Rings.json";
//import React, { useState } from "react";
import "../../App.css";
import "./Ring.css";

function RingMain() {
  const imageContext = require.context(
    "../Datas/Pictures/Rings", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContext(key);
    return acc;
  }, {});

  return (
    <div>
      <header className="page-header">
        <h1>Rings</h1>
      </header>
      <div className="page-body">
        <div className="ring-list">
          <table className = "ring-table">
            <thead></thead>

            {Object.values(ringInfo).map((ring, index) => (
              <tbody key={index}>
                <tr>
                  <th>
                    <img
                      src={images[ring.Name.toLowerCase()]}
                      alt={ring.Name}
                      className="ring-image"
                    />
                  </th>
                  <th>
                    <Link to={`/rings/${ring.Name.toLowerCase()}`}>
                      {ring.Name}
                    </Link>
                  </th>
                  <td>{ring.Description}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <Link to="/">Back to Home</Link>{" "}
      </div>
    </div>
  );
}

export default RingMain;
