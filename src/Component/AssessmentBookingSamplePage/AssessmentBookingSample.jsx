import "./AssessmentBookingSample.css";

function AssessmentBooking() {
  return (
    <>
      <div className="stepper">
        <h4> Danh Sách Đặt Hẹn </h4>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Mã yêu cầu</th>
              <th>Tên mẫu</th>
              <th>Kích cỡ</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#</td>
              <td>Mẫu 1</td>
              <td>4.1</td>
              <td>Chưa hoàn tất</td>
              <td><button>Xem chi tiết</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentBooking;
