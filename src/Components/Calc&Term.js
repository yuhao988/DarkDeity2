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
              <div>
                <table className="stat-table">
                  <thead>
                    <tr>
                      <th style={{ width: "20vw" }}>Stat</th>
                      <th style={{ width: "80vw" }}>Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Power</td>
                      <td>Unit Might + Weapon Power</td>
                    </tr>
                    <tr>
                      <td>Accuracy</td>
                      <td>
                        Unit Dexterity * 2.5 + Unit Luck * 0.5 + Weapon Accuracy
                      </td>
                    </tr>
                    <tr>
                      <td>Dodge</td>
                      <td>
                        (Unit Speed - Weapon Weight) * 2 + Unit Luck + Unit
                        Dexterity * 0.5
                      </td>
                    </tr>
                    <tr>
                      <td>Crit</td>
                      <td>
                        Unit Luck * 1.25 + Unit Dexterity * 0.25 + Weapon
                        Critical
                      </td>
                    </tr>
                    <tr>
                      <td>True Speed</td>
                      <td>Unit Speed - Weapon Weight</td>
                    </tr>
                    <tr>
                      <td>Crit Avo*</td>
                      <td>Unit Lck * 2</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Battle stats calculations</h3>
                <table className="stat-table">
                  <thead>
                    <tr>
                      <th style={{ width: "25vw" }}>Stat</th>
                      <th style={{ width: "75vw" }}>Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Damage</td>
                      <td>Attacker Power - Target Defense OR Fortitude</td>
                    </tr>
                    <tr>
                      <td>Hit rate</td>
                      <td>Attacker Accuracy - Target Dodge - Terrain Bonus</td>
                    </tr>
                    <tr>
                      <td>Critical chance</td>
                      <td>Attacker Crit* - Target Crit Avo</td>
                    </tr>
                    <tr>
                      <td>Double attack</td>
                      <td>
                        If (Attacker True Speed - Target True Speed &gt;=5)
                      </td>
                    </tr>
                    <tr>
                      <td>Skill Number</td>
                      <td>Base value + Mastery Scaling * Unit Mastery</td>
                    </tr>
                  </tbody>
                </table>Enemy units always have a Crit chance of 0
              </div>
            </div>
          )}

          {pageState === "Terminology" && (
            <div className="content-page">
              <h2>Status Effects Terminology</h2>
              <p>
                These are the key words used for describing status effects in
                Dark Deity 2
              </p>
              <h3>Severity</h3>
              <table className="stat-table" style={{ width: "50vw" }}>
                <thead>
                  <tr>
                    <th>Severity Stage</th>
                    <th>Number of instances</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Light</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Heavy</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Severe</td>
                    <td>3</td>
                  </tr>{" "}
                </tbody>
              </table>
              <div>
                Severity Stage affects the number of instances a effect lasts on
                a unit. Instance is different for each kind of effect. Each
                instance is considered a severity stage for{" "}
                <Link to={`${process.env.PUBLIC_URL}/classes/hemomancer`}>Hemomancer</Link>'s Soul Tear
              </div>
              <h3>Status Effects</h3>
              <table className="stat-table" style={{ width: "70vw" }}>
                <thead>
                  <tr>
                    <th style={{ width: "15w" }}>Status</th>
                    <th style={{ width: "65vw" }}>Effect per Stack</th>
                    <th style={{ width: "20vw" }}>Each instance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Block</td>
                    <td style={{ textAlign: "left" }}>
                      Buff: Decrease next instance of combat damage by 1
                    </td>
                    <td>1 hit from enemy</td>
                  </tr>
                  <tr>
                    <td>Bleed</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 HP after combat
                    </td>
                    <td>1 turn</td>
                  </tr>
                  <tr>
                    <td>Blind</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 point of Accuracy
                    </td>
                    <td>1 attack</td>
                  </tr>
                  <tr>
                    <td>Exhaust</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 point of Dodge
                    </td>
                    <td>1 turn</td>
                  </tr>
                  <tr>
                    <td>Poison</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Removes 1 point of every primary stat from target
                    </td>
                    <td>1 round of combat</td>
                  </tr>
                  <tr>
                    <td>Snare</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 point of Movement
                    </td>
                    <td>1 turn</td>
                  </tr>
                  <tr>
                    <td>Stun</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: At the start of the turn, ends Action immediately
                    </td>
                    <td>1 turn</td>
                  </tr>
                  <tr>
                    <td>Vulnerable</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 point of Defense and Fortitude
                    </td>
                    <td>1 hit from enemy</td>
                  </tr>
                  <tr>
                    <td>Weak</td>
                    <td style={{ textAlign: "left" }}>
                      Debuff: Loses 1 point of Power
                    </td>
                    <td>1 attack</td>
                  </tr>
                </tbody>
              </table>
              <div>
                Number of stacks of a status indicates how much effect a status
                has per instance, not to be confused with severity stages.For
                example: 15 stacks of Light Block means that for 1 hit landed by
                the enemy (Light), the damage is reduced by 15 (stacks).
              </div>
            </div>
          )}
        </div>

        <Link to={`${process.env.PUBLIC_URL}`} className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
