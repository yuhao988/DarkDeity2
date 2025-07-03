import { Link, useParams } from "react-router-dom";
//import { useState } from "react";
import ringInfo from "./Rings.json";
import "../../App.css";
import "./Ring.css";

function RingDetail() {
  const { name } = useParams();
  const ring1 = Object.values(ringInfo).find(
    (ring) => ring.Name.toLowerCase() === name
  );

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
        <h1>{ring1.Name} Ring</h1>
      </header>
      <div className="page-body">
        <img
          src={images[ring1.Name.toLowerCase()]}
          alt={ring1.Name}
          className="ring-image"
          style={{width:"100px",height:"110px"}}
        />
        <h3>Ores needed:</h3>
        <ul>
          <li>
            <Link> {ring1.Ores[0]}</Link>
          </li>
          <li>
            <Link> {ring1.Ores[1]}</Link>
          </li>
          <li>
            <Link>{ring1.Ores[2]}</Link>
          </li>
        </ul>
        <h3>Effect:</h3>
        {ring1.Description}
        <br />
        <h3>Details:</h3>
        <Link to="/rings">Back</Link>
      </div>
    </div>
  );
}

export default RingDetail;
