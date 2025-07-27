import { Link } from "react-router-dom";
import ringInfo from "./Rings.json";
import React, { useState } from "react";
import "../../App.css";
import "./Ring.css";

function RingMain() {
  const [tagFilter, setTagFilter] = useState("");
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

  // Get all unique tags from all rings
  const allTags = Array.from(
    new Set(Object.values(ringInfo).flatMap((ring) => ring.Tags || []))
  ).sort();

  // Filter rings based on selected tag
  const filteredRings = tagFilter
    ? Object.values(ringInfo).filter(
        (ring) => ring.Tags && ring.Tags.includes(tagFilter)
      )
    : Object.values(ringInfo);

  return (
    <div>
      <header className="page-header">
        <h1>Rings</h1>
      </header>
      <div className="page-body">
        <p>Ring text placeholder</p>
        <div className="filter-controls">
          <label htmlFor="tag-filter">Filter by Tag: </label>
          <select
            id="tag-filter"
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            className="tag-select"
          >
            <option value="">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="ring-list">
          <table className="ring-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              {filteredRings.map((ring, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={images[ring.Name.toLowerCase()]}
                      alt={ring.Name}
                      className="ring-image"
                    />
                  </td>
                  <td>
                    <Link to={`/rings/${ring.Name.toLowerCase()}`}>
                      {ring.Name}
                    </Link>
                  </td>
                  <td>{ring.Description}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/" className="home-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default RingMain;
