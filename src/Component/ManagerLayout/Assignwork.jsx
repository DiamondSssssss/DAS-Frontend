import React, { useState } from "react";
import "../ManagerLayout/Assignwork.css";

const AssignWork = () => {
  // State để lưu danh sách các staff và công việc được assign
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Alice", work: "" },
    { id: 2, name: "Bob", work: "" },
    { id: 3, name: "Charlie", work: "" },
  ]);

  const [work, setWork] = useState("");

  // Function để assign work cho staff
  const assignWork = (staffId) => {
    setStaffList(
      staffList.map((staff) =>
        staff.id === staffId ? { ...staff, work } : staff
      )
    );
    setWork("");
  };

  return (
    <div className="container">
      <h1 className="title">Assign Work to Staff</h1>

      <div className="form-group">
        <label>
          Work:
          <input
            type="text"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="input"
          />
        </label>
      </div>

      <h2 className="title">Staff List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Work</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.work || "None"}</td>
              <td>
                <button
                  className="assign-button"
                  onClick={() => assignWork(staff.id)}
                  disabled={!work.trim()}
                >
                  Assign Work
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignWork;
