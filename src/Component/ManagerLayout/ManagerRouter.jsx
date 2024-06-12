import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ManagePricingTimelines from "./pages/ManagePricingTimelines";
import SealingRecords from "./pages/SealingRecords";
import CommitmentPaper from "./pages/CommitmentPaper";
import Dashboard from "./pages/Dashboard";
import NavbarManager from "./NavBarManager";

const App = () => {
  return (
    <div>
      <NavbarManager />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/manage-pricing-timelines"
            element={<ManagePricingTimelines />}
          />
          <Route path="/sealing-records" element={<SealingRecords />} />
          <Route path="/commitment-paper" element={<CommitmentPaper />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
