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
      <div className="py-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Danh Sách Đặt Hẹn</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold text-sm">Mã yêu cầu</th>
              <th className="py-3 px-4 font-semibold text-sm">Dịch vụ</th>
              <th className="py-3 px-4 font-semibold text-sm">Số Lượng Kim Cương</th>
              <th className="py-3 px-4 font-semibold text-sm">Ngày tạo</th>
              <th className="py-3 px-4 font-semibold text-sm">Trạng Thái</th>
              <th className="py-3 px-4 font-semibold text-sm">Chi Tiết</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {request.map((request) => (
              <tr key={request.requestId}>
                <td className="py-3 px-4">#{request.requestId}</td>
                <td className="py-3 px-4">{getServiceText(request.serviceId)}</td>
                <td className="py-3 px-4">{request.numberOfSamples}</td>
                <td className="py-3 px-4">{request.dateCreated}</td>
                <td className="py-3 px-4">{getStatusText(request.status)}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => navigate(`/consultingstaff/assessmentrequest/${request.requestId}`)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Xem chi tiết
                  </button>
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
