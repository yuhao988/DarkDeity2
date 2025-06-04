import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classStat from "../Datas/classStats.json";
import "../../App.css";
import "./Class.css";

function ClassDetail() {
  const { name } = useParams(); // Gets the URL parameter (e.g., "gwyn")
  const class1 = Object.values(classStat).find(
    (class2) => class2.name.replace(/\s+/g, "").toLowerCase() === name
  );

  if (!class1) return <div>Class not found</div>;
  return (
    <div className="App">
      <header className="App-header">{class1.name}</header>
      <div className="App-body">
        <Link to="/classes">Back</Link>{" "}
      </div>
    </div>
  );
}

export default ClassDetail;
