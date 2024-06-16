import { Outlet } from "react-router-dom";
import HeaderAs from "../Component/HeaderAs/HeaderAs";
import SideBarAs from "../Component/SideBarAs/SideBarAs";

function AssessmentStaffLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeaderAs />
      <div className="flex flex-grow w-full">
        <div className="w-50 text-white min-h-full">
          <SideBarAs />
        </div>
        <div className="flex-grow bg-gray-100 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AssessmentStaffLayout;
