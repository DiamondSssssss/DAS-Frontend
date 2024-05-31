import "./AssessmentPaper.css";

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
              <td><button>Xem chi tiết</button></td>
            </tr>
            <tr>
              <td>#002</td>
              <td>Đặng Quang Huy</td>
              <td>2/6/2024</td>
              <td>Đã duyệt</td>
              <td><button>Xem chi tiết</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentBooking;
