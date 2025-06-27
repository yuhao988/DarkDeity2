import Modal from "react-modal";

export default function SimModal(prop) {
  const { isOpen, onClose, unit } = prop;
  const handleCloseModal = () => {
    onClose();
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
          width: "80%",
          maxWidth: "600px",
          maxHeight: "80vh",
          zIndex: 10000, // Even higher than overlay
        },
      }}
    >
      <button onClick={handleCloseModal} className="modal-close-button">
        ×
      </button>

      {unit && (
        <div className="modal-content">
          <h2>{unit.Class}</h2>
          <p>Advanced Class: {unit.tier3}</p>
          {/* Add more unit details here */}
        </div>
      )}
    </Modal>
  );
}
