import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Calc.css";

export default function CalcTerm() {
  const [pageState, setPageState] = useState("Calculation");
  const toggleState = (state) => {
    setPageState(state);
  };
  return (
    <div>
      <header className="page-header">
        <h1>Calculations and terminologies</h1>
      </header>
      <div className="page-body">
        <div className="tab-container">
          <button
            className={`tab-button ${
              pageState === "Calculation" ? "active" : ""
            }`}
            onClick={() => toggleState("Calculation")}
          >
            Calculations
          </button>
          <button
            className={`tab-button ${
              pageState === "Terminology" ? "active" : ""
            }`}
            onClick={() => toggleState("Terminology")}
          >
            Status Terminologies
          </button>
        </div>

        <div className="content-box">
          {pageState === "Calculation" && (
            <div className="content-page">
              <h2>Secondary Stats Calculations</h2>
              <p>
                These are the calculations for secondary stats in Dark Deity 2
              </p>
              {/* Add your calculation content here */}
            </div>
          )}

          {pageState === "Terminology" && (
            <div className="content-page">
              <h2>Status Effects Terminology</h2>
              <p>
                These are the key words used for describing status effects in
                Dark Deity 2
              </p>
              {/* Add your terminology content here */}
            </div>
          )}
        </div>

        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
