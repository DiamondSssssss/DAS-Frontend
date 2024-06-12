import React, { useState } from "react";

const SealingRecords = () => {
  const [record, setRecord] = useState("");

  const handleSave = () => {
    // Logic to save sealing records
    console.log("Record:", record);
  };

  return (
    <div>
      <h1>Sealing Records</h1>
      <div className="mb-3">
        <label className="form-label">Sealing Record</label>
        <input
          type="text"
          className="form-control"
          value={record}
          onChange={(e) => setRecord(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SealingRecords;
