import React, { useState } from "react";
// import "../ManagerLayout/SealingRecords.css";

const SealingRecords = () => {
  const [diamonds, setDiamonds] = useState([
    { id: 1, name: "Diamond 1", sealed: false },
    { id: 2, name: "Diamond 2", sealed: false },
    { id: 3, name: "Diamond 3", sealed: false },
  ]);

  const toggleSeal = (id) => {
    setDiamonds((prevDiamonds) =>
      prevDiamonds.map((diamond) =>
        diamond.id === id ? { ...diamond, sealed: !diamond.sealed } : diamond
      )
    );
  };

  return (
    <div>
      <h2>Create Sealing Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Diamond Name</th>
            <th>Seal Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {diamonds.map((diamond) => (
            <tr key={diamond.id}>
              <td>{diamond.name}</td>
              <td>{diamond.sealed ? "Sealed" : "Unsealed"}</td>
              <td>
                <button onClick={() => toggleSeal(diamond.id)}>
                  {diamond.sealed ? "Unseal" : "Seal"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SealingRecords;
