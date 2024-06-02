import { Outlet } from "react-router-dom";
import HeaderAs from "../Component/HeaderAs/HeaderAs";
import SideBarAs from "../Component/SideBarAs/SideBarAs";
import "./AssessmentStaffLayout.css";

function AssessmentStaffLayout() {
  return (
    <div className="staffLayout">
      <HeaderAs />
      <div className="staffbody">
        <div className="sidebar"><SideBarAs/></div>
        <div className="outlet"><Outlet/></div>
      </div>
    </div>
  );
}

export default AssessmentStaffLayout;

