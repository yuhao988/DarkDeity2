import OreDetail from "./OreDetail";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Ore.css";

export default function OreMain() {
  const [oreCurrent, setOreCurrent] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const oreList = [
    { Name: "Emerald", Color: "Green", Shop: "From Start", Convo: "None" },
    { Name: "Ruby", Color: "Red", Shop: "From Start", Convo: "None" },
    {
      Name: "Sapphire",
      Color: "Blue",
      Shop: "After Chapter X",
      Convo: <button onClick={() => openModal("Sapphire")}>Total: 14</button>,
    },
    {
      Name: "Onyx",
      Color: "Black",
      Shop: "After Chapter X",
      Convo: <button onClick={() => openModal("Onyx")}>Total: 7</button>,
    },
    {
      Name: "Diamond",
      Color: "White",
      Shop: "After Chapter X",
      Convo: <button onClick={() => openModal("Diamond")}>Total: 8</button>,
    },
    {
      Name: "Amethyst",
      Color: "Purple",
      Shop: "After Chapter X",
      Convo: <button onClick={() => openModal("Amethyst")}>Total: 11</button>,
    },
  ];

  const openModal = (oreName) => {
    setOreCurrent(oreName);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <header className="page-header">
        <h1>Ores</h1>
      </header>
      <div className="page-body">
        <p style={{ width: "70vw" }}>
          Ores are materials used to make rings. It can found in chapter
          objective rewards, enemy droppables, chests, Bond conversations, or
          bought in shop
        </p>
        <table className="ore-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Found in shop:</th>
              <th>Bond Conversations:</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data, replace with actual ore data */}
            {oreList.map((ore, index) => (
              <tr key={index}>
                <td>{ore.Name}</td>
                <td>{ore.Color}</td>
                <td>{ore.Shop}</td>
                <td>{ore.Convo}</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <OreDetail
          isOpen={isModal}
          onClose={closeModal}
          oreCurrent={oreCurrent}
        />
      </div>
      <Link to="/rings" className="home-link">
        Back to rings
      </Link>
    </div>
  );
}
