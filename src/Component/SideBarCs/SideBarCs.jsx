import { NavLink } from "react-router-dom";
import "./SideBarCs.css";

function SideBarCs() {
  return (
    <div className="sidenav">
      <NavLink to="/consultingstaff">🏠︎Trang Chủ</NavLink>
      <NavLink to="/consultingstaff/assessmentrequest">Yêu Cầu Dịch Vụ</NavLink>
      <NavLink to="/consultingstaff/assessmentpaper">Đơn Giám Định</NavLink>
      <NavLink to="/consultingstaff/consultingbooking">
        Danh Sách Đơn Giám Định
      </NavLink>
      <NavLink to="/consultingstaff/assetsmentpaper">Giấy Giám Định</NavLink>
    </div>
  );
}
export default SideBarCs;
