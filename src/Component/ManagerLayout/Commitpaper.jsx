import React, { useState } from "react";
const Commitpaper = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic to create commitment paper
    console.log("Creating commitment paper...");
  };

  return (
    <div>
      <h2>Create Commitment Paper</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Inspection Sample ID:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Create Paper</button>
      </form>
    </div>
  );
};

export default Commitpaper;
