import React, { useState } from "react";
import "../AdminLayout/AssignRolesPermissions.css";

const AssignRolesPermissions = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com", role: "Staff" },
    { id: 2, email: "user2@example.com", role: "Manager" },
    { id: 3, email: "user3@example.com", role: "Admin" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const handleAssignRole = (e) => {
    e.preventDefault();
    if (selectedUser && selectedRole) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id ? { ...user, role: selectedRole } : user
        )
      );
      setSelectedUser(null);
      setSelectedRole("");
    }
  };

  return (
    <div className="assign-roles-container">
      <h2>Assign Roles and Permissions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Current Role</th>
            <th>New Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => setSelectedUser(user)}>
                  Assign Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <form className="assign-roles-form" onSubmit={handleAssignRole}>
          <h3>Assign Role to {selectedUser.email}</h3>
          <label>
            Role:
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Staff">Staff</option>
            </select>
          </label>
          <button type="submit">Assign Role</button>
        </form>
      )}
    </div>
  );
};

export default AssignRolesPermissions;
