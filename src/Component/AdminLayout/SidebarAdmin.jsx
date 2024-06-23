import React from "react";
import { Link } from "react-router-dom";
import "../AdminLayout/SidebarAdmin.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Dashboard</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/delete-suspend-users">Delete/Suspend Users</Link>
        </li>
        <li>
          <Link to="/assign-roles-permissions">Assign Roles</Link>
        </li>
        <li>
          <Link to="/system-maintenance">System Maintenance</Link>
        </li>
        <li>
          <Link to="/system-update">System Update</Link>
        </li>
        <li>
          <Link to="/content-database">Content Database</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
