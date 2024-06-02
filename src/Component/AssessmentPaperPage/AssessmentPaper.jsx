import "./AssessmentPaper.css";
import { useNavigate } from "react-router-dom";

function AssessmentBooking() {
  const navigate = useNavigate();
  return (
    <>
      <div className="step text-4xl font-bold">
        <h4> Danh Sách Đơn</h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Mã giám định</th>
              <th>Người Tạo</th>
              <th>Ngày tạo</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Đặng Quang Huy</td>
              <td>1/6/2024</td>
              <td>Đã hoàn tất</td>
              <td><button onClick={() => navigate("/")}>Xem chi tiết</button></td>
            </tr>
            <tr>
              <td>#002</td>
              <td>Đặng Quang Huy</td>
              <td>2/6/2024</td>
              <td>Đã duyệt</td>
              <td><button onClick={() => navigate("/")}>Xem chi tiết</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentBooking;
