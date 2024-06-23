import React, { useState } from "react";
import "../ManagerLayout/Commitpaper.css";

const Commitpaper = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic to create commitment paper
    console.log("Creating commitment paper...");
  };

  return (
    <div className="commitpaper-container">
      <h2 className="commitpaper-title">Create Commitment Paper</h2>
      <form className="commitpaper-form" onSubmit={handleSubmit}>
        <label className="commitpaper-label">
          Customer Name:
          <input type="text" className="commitpaper-input" />
        </label>
        <br />
        <label className="commitpaper-label">
          Inspection Sample ID:
          <input type="text" className="commitpaper-input" />
        </label>
        <br />
        <button type="submit" className="commitpaper-button">
          Create Paper
        </button>
      </form>
    </div>
  );
};

export default Commitpaper;
