import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component
import "./App.css";
import Error from "./Error";
import Home from "./Home";
import CharMain from "./Components/Characters/CharMain";
import CharDetail from "./Components/Characters/CharDetail";
import ClassMain from "./Components/Classes/ClassInfo";
import ClassDetail from "./Components/Classes/ClassDetail";
import MenuBar from "./MenuBar";
import RingDetail from "./Components/Rings/RingDetail";
import RingMain from "./Components/Rings/RingMain";
import OreMain from "./Components/Rings/Ores/OreMain"; // Import the OreMain component
import SimSample1 from "./Components/BattleSim/SimSample";
import WeaponMain from "./Components/Weapons/WRMain";
import WeaponDetail from "./Components/Weapons/WeaponsDetail";
import RuneDetail from "./Components/Weapons/Runes/RunesList"; // Import the RuneDetail component
import CalcTerm from "./Components/Calc&Term";

function App() {
  // Set the app element when the component mounts
  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with your actual root element id
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharMain />} />
          <Route path="/characters/:name" element={<CharDetail />} />
          <Route path="/classes" element={<ClassMain />} />
          <Route path="/classes/:name" element={<ClassDetail />} />
          <Route path="/rings" element={<RingMain />} />
          <Route path="/rings/:name" element={<RingDetail />} />
          <Route path="/rings/ores" element={<OreMain />} />
          <Route path="/weapons" element={<WeaponMain />} />
          <Route path="/weapons/:name" element={<WeaponDetail />} />
          <Route path="/weapons/runes/:name" element={<RuneDetail />} />
          <Route path="/calc" element={<CalcTerm />} />

          <Route path="/secret" element={<SimSample1 />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
