import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MenuBar() {
  return (
    <>
      <ScrollToTop />
      <div className="menu-bar">
        <h2 className="menu-title">Dark Deity</h2>
        <nav>
          <ul className="menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/rings">Rings</Link>
            </li>
            <li>
              <Link to="/weapons">Weapons & Runes</Link>
            </li>
            <li>Shop items</li>
            <li>
              <Link to="/calc">Calculations & Terminologies</Link>
            </li>
            <li>Character Builder</li>
            <li>Enemies</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MenuBar;
