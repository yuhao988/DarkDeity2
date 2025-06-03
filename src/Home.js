import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dark Deity 2 pages</h1>
        <Link to="/characters">Character Information</Link>{" "}
      </header>
    </div>
  );
}

export default Home;
