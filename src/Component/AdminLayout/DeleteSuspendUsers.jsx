import React, { useState } from "react";
import "../AdminLayout/DeleteSuspendUsers.css"; // Import the CSS file for styling

const DeleteSuspendUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
    { id: 3, email: "user3@example.com" },
  ]);

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    // Placeholder logic to delete user from backend API
    console.log(`Deleting user with ID ${userId}`);
  };

  const handleSuspendUser = (userId) => {
    // Placeholder logic to suspend user from backend API
    console.log(`Suspending user with ID ${userId}`);
  };

  return (
    <div className="delete-suspend-container">
      <h2>Delete or Suspend User Accounts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete User
                </button>
                <button onClick={() => handleSuspendUser(user.id)}>
                  Suspend User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteSuspendUsers;
