import { NavLink } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidenav">
      <NavLink to="/assessmentstaff">🏠︎Trang Chủ</NavLink>
      <NavLink to="/assessmentstaff/assessmentbooking">Đơn Hàng Dịch Vụ</NavLink>
      <NavLink to="/assessmentstaff/assessmentpaper">Đơn Giám Định</NavLink>
    </div>
  );
}
export default SideBar;
