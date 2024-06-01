import "./AssessmentBooking.css";
import { useNavigate } from "react-router-dom";

function AssessmentBooking() {
  const navigate = useNavigate();
  return (
    <>
      <div className="stepper">
        <h4> Danh Sách Đặt Hẹn </h4>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Loại dịch vụ</th>
              <th>Số Lượng Kim Cương</th>
              <th>Ngày tạo</th>
              <th>Trạng Thái</th>
              <th>Xem Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Giám Định Kim Cương</td>
              <td>10</td>
              <td>1/6/2024</td>
              <td>Chưa hoàn tất</td>
              <td><button onClick={() => navigate("/assessmentbooking")} >Xem chi tiết</button></td>
            </tr>
            <tr>
              <td>#002</td>
              <td>Giám Định 3h</td>
              <td>1</td>
              <td>30/5/2024</td>
              <td>Đang xử lý</td>
              <td><button onClick={() => navigate("/assessmentbooking")} >Xem chi tiết</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentBooking;
