
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AssessmentRequestConsulting() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  const getStatusClass = (status) => {
    switch (status) {
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-green-500";
      case 3:
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

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

  // const [requests] = useState([
  //   { requestId: 1, serviceId: 1, numberOfSamples: 5, dateCreated: "2024-06-15", status: 1 },
  //   { requestId: 2, serviceId: 2, numberOfSamples: 3, dateCreated: "2024-06-14", status: 2 },
  //   { requestId: 3, serviceId: 3, numberOfSamples: 7, dateCreated: "2024-06-13", status: 3 },
  // ]);

  // Uncomment and modify the following useEffect if you want to fetch data from the backend API
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

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Danh Sách Đặt Hẹn</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-4 text-left align-middle">Mã yêu cầu</th>
                <th className="py-4 px-4 text-left align-middle">Dịch vụ</th>
                <th className="py-4 px-4 text-left align-middle">Số Lượng Kim Cương</th>
                <th className="py-4 px-4 text-left align-middle">Ngày tạo</th>
                <th className="py-4 px-4 text-left align-middle">Trạng Thái</th>
                <th className="py-4 px-4 text-left align-middle">Chi Tiết</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {requests.map((request) => (
                <tr key={request.requestId} className="hover:bg-gray-100">
                  <td className="py-4 px-4 align-middle">{`#${request.requestId}`}</td>
                  <td className="py-4 px-4 align-middle">{getServiceText(request.serviceId)}</td>
                  <td className="py-4 px-4 align-middle">{request.numberOfSamples}</td>
                  <td className="py-4 px-4 align-middle">{request.dateCreated}</td>
                  <td className={`py-4 px-4 align-middle ${getStatusClass(request.status)}`}>
                    {getStatusText(request.status)}
                  </td>
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => navigate(`/consultingstaff/assessmentrequest/${request.requestId}`)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AssessmentRequestConsulting;
