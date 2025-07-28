import Modal from "react-modal";
import BondConvo from "./OreBondConvo.json";
import "./Ore.css";

export default function OreDetail(prop) {
  const { isOpen, onClose, oreCurrent } = prop;

  const handleCloseModal = () => {
    onClose();
  };

  const imageContext = require.context(
    "../../Characters/Pictures", // Folder path
    false, // Don't look in subdirectories
    /\.(png)$/ // File extensions to match
  );

  const images = imageContext.keys().reduce((acc, key) => {
    const name = key.replace("./", "").replace(/\..+$/, "");
    acc[name] = imageContext(key);
    return acc;
  }, {});

  let oreCorrespond = BondConvo.filter((bond) => bond.Ore === oreCurrent);
  oreCorrespond = oreCorrespond[0];
  const bondList = oreCorrespond.Supports;
  const rows = [];
  for (let i = 0; i < bondList.length; i += 4) {
    rows.push(bondList.slice(i, i + 4));
  }
  const bondNames = (data) => {
    // Split the string by " X " (space X space)
    const names = data.split(" X ");

    // Return the array with the two names
    return names.length === 2 ? names : [data, ""]; // Fallback if format is unexpected
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 9999, // Higher than everything else
        },
        content: {
          backgroundColor: "#f0babaff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          width: "90vw",
          height: "90vh",
          maxWidth: "90vw",
          maxHeight: "90vh",
          zIndex: 10000, // Even higher than overlay
        },
      }}
    >
      <button onClick={handleCloseModal} className="modal-close-button">
        ×
      </button>
      <h2>Bond conversations that gives {oreCurrent}</h2>
      <p>
        Bond conversations between 2 units gives out ores at level D, B and S.
        Below are the conversations that give out {oreCurrent}s at previously
        stated levels
      </p>
      {bondList && (
        <table className="bond-table">
          <thead>
            <tr>
              <th colSpan={4}>Support Conversations</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((supp, colIndex) => (
                  <td key={`rune-${rowIndex}-${colIndex}`}>
                    {/* Customize this to display your rune data */}
                    <div className="bond-item">
                      <img
                        src={
                          images[
                            bondNames(supp)[0].replace(/\s+/g, "").toLowerCase()
                          ]
                        }
                        alt={bondNames(supp)[0]}
                        className="bond-image"
                      />
                      {" "}
                      {/* Gap between images */}
                      <img
                        src={
                          images[
                            bondNames(supp)[1].replace(/\s+/g, "").toLowerCase()
                          ]
                        }
                        alt={bondNames(supp)[1]}
                        className="bond-image"
                      />
                    </div>
                    <div className="bond-text">{supp}</div>
                  </td>
                ))}
                {/* Fill empty cells if last row has fewer than 6 items */}
                {row.length < 4 &&
                  Array(4 - row.length)
                    .fill()
                    .map((_, i) => <td key={`empty-${rowIndex}-${i}`}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Modal>
  );
}
