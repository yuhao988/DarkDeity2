import { Link } from "react-router-dom";
import "./App.css"; 

function MenuBar() {
  return (
    <div className="menu-bar">
      <h2 className="menu-title">Dark Deity</h2>
      <nav>
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li>Rings</li>
          <li>Weapons</li>
          <li>Shop items</li>
          <li>Calculations & Terminologies</li>
          <li>Character Builder</li>
          <li>Enemies</li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;