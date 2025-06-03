import { Link } from "react-router-dom";
import "../../App.css";

function CharMain() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
        <Link to="/">Back to Home</Link>{" "}
      </header>
    </div>
  );
}

export default CharMain;