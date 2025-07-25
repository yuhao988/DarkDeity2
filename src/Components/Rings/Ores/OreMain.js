//import Modal from 'react-modal';

export default function OreMain() {
  const oreList = [
    "Emerald",
    "Ruby",
    "Sapphire",
    "Onyx",
    "Amethyst",
    "Diamond",
  ];
  return (
    <div>
      <header className="page-header">
        <h1>Ores</h1>
      </header>
      <div className="page-body">
        <p>
          Ores are materials used to make rings. It can found in objective
          rewards, chests, end of Bond conversations, or bought in shop
        </p>
        <table className="ore-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Found in shop:</th>
              <th>Bond Conversations:</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data, replace with actual ore data */}
            {oreList.map((ore, index) => (
              <tr key={index}>
                <td>{ore}</td>
                <td>Ore Name</td>
                <td>Description of the ore.</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
