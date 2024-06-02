import "./AssessmentRequestConsulting.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function AssessmentRequestConsulting() {
  const navigate = useNavigate();
  const [request, setRequests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/assessmentrequests");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching the requests:", error);
      }
    };

    fetchData();
  }, []);

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return "Đang chờ";
      case 2:
        return "Đã tạo booking";
      case 3:
        return "Đã hủy";
      default:
        return "Không xác định";
    }
  };

  const getServiceText = (service) => {
    switch (service) {
      case 1:
        return "Giám định kim cương";
      case 2:
        return "Niêm phong kim cương";
      case 3:
        return "Cấp lại giấy giám định";
      default:
        return "Không xác định";
    }
  };

  return (
    <>
      <div className="step">
        <h4> Danh Sách Đặt Hẹn </h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Mã yêu cầu</th>
              <th>Dịch vụ</th>
              <th>Số Lượng Kim Cương</th>
              <th>Ngày tạo</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {request.map((request) => (
              <tr key={request.requestId}>
                <td>#{request.requestId}</td>
                <td>{getServiceText(request.serviceType)}</td>
                <td>{request.numberOfSamples}</td>
                <td>{request.dateCreated}</td>
                <td>{getStatusText(request.status)}</td>
                <td>
                  <button onClick={() => navigate(`/consultingstaff/assessmentrequest/${request.requestId}`)}>Xem chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentRequestConsulting;
