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
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/characters`}>
                Characters
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/classes`}>Classes</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/rings`}>Rings</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/weapons`}>
                Weapons & Runes
              </Link>
            </li>
            <li>Shop items</li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/calc`}>
                Calculations & Terminologies
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/enemies`}>Enemies</Link>
            </li>
            <li>Character Builder</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MenuBar;
