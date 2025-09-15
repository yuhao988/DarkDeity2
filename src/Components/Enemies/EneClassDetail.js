import { Link, useParams } from "react-router-dom";
//import { useState } from "react";
import mortalDetail from "./Growth/mortalGrowth.json";
import "../../App.css";
import "./Enemy.css";

function EneClassDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const class1 = Object.values(mortalDetail).find(
    (ene) => ene.Name.toLowerCase() === name
  );
  const nameNoMark = class1.Name.replace(/'/g, "");

  if (!class1) return <div>Character not found</div>;

  const imageContext = require.context(
    "../../../public/Images/Pictures/Enemies", // Folder path
    false, // Don't look in subdirectories
    /.*_full\.webp$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name1 = key.replace("./", "").replace(/_full\.webp$/, "");
    acc[name1] = imageContext(key);
    return acc;
  }, {});

  return (
    <div>
      <header className="page-header">
        <h1>{class1.Class}</h1>
      </header>
      <div className="page-body">
        <div className="class-detail">
          <img src={images[name]} alt={name} className="character-image-full" />

          <h3>Base stats:</h3>

          <h3>Growth:</h3>
          <table className="stat-table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          {/* <div>{charIntro(nameNoMark, "base")}</div> */}
        </div>
        <Link to={`${process.env.PUBLIC_URL}/enemies`} className="home-link">
          Back
        </Link>{" "}
      </div>
    </div>
  );
}

export default EneClassDetail;
