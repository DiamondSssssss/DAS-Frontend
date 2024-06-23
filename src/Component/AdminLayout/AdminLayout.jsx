import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
