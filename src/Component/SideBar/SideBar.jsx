import { NavLink } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidenav">
      <NavLink to="/staff">🏠︎Trang Chủ</NavLink>
      <NavLink to="/staff/assessmentbooking">Đơn Hàng Dịch Vụ</NavLink>
      <NavLink to="/staff/assessmentpaper">Đơn Giám Định</NavLink>
    </div>
  );
}
export default SideBar;
