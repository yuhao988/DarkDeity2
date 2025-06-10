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
  
  return (
    <div>
      {console.log("reached")}
      <header className="page-header"><h1>{ring1.Name} Ring</h1></header>
      <div className="page-body">
        <h3>Ores needed:</h3>
        {ring1.Ores[0]}<br />
        {ring1.Ores[1]}<br />
        {ring1.Ores[2]}<br />
        <h3>Total shop craft cost:</h3>
        <h3>Effect:</h3>
        {ring1.Description}<br />
        <Link to="/rings">Back</Link>
      </div>
    </div>
  );
}

export default RingDetail;
