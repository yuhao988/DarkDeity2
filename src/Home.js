//import { Link } from "react-router-dom";

import React from "react";
import "./App.css";

export function paragraphBreak(text) {
  if (typeof text !== "string") {
    console.warn("Expected string, got:", typeof text);
    return text || "";
  }

  // Split text at <br /> tags and map to JSX elements
  const parts = text.split(/<br\s*\/?>/i);

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {<br />}
      {part}
      {index < parts.length - 1 && <br />} {/* Add JSX <br> between parts*/}
    </React.Fragment>
  ));
}

function Home() {
  return (
    <div>
      <header className="page-header">
        <h1>Dark Deity 2</h1>
      </header>

      <div className="page-body">
        <img
          src={`${process.env.PUBLIC_URL}/Images/Pictures/MainLogo.jpg`}
          alt="Dark Deity 2 Logo"
          className="main-logo" // Optional: for additional styling
        />
        {console.log(process.env.PUBLIC_URL)}
        <p>
          This is a fan-made web page aiming to provide information on the game
          Dark Deity 2.
          <br /> The web page is currently under construction.
        </p>
        <div>Parts currently unavailable:</div>
        <ul>
          <li>Shop items</li>
          <li>Character Builder</li>
          <li>Enemies</li>
          <li>Battle Simulator</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
