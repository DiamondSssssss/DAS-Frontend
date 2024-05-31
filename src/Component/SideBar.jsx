import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidenav">
      <NavLink to="/">🏠︎Trang Chủ</NavLink>
      <NavLink to="assessmentbooking">Đơn Hàng Dịch Vụ</NavLink>
      <NavLink to="assessmentpaper">Đơn Giám Định</NavLink>
    </div>
  );
}
export default SideBar;
