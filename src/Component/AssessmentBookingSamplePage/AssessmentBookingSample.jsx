import { useParams, useNavigate } from "react-router-dom";
import "./AssessmentBookingSample.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AssessmentBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/bookingsamples/byBooking/${id}`);
        setSamples(response.data);
      } catch (error) {
        console.error("Error fetching booking samples:", error);
      }
    };

    fetchSamples();
  }, [id]);

  return (
    <>
      <div className="step">
        <h4>Danh Sách Đặt Hẹn</h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Mã Sample</th>
              <th>Tên mẫu</th>
              <th>Kích cỡ</th>
              <th>Ngày tạo</th>
              <th>Trạng Thái</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
          {samples.map((sample) => (
              <tr key={sample.sampleId}>
                <td>#{sample.sampleId}</td>
                <td>{sample.name}</td>
                <td>{sample.size}</td>
                <td>{sample.status}</td>
                <td><button onClick={() => navigate(`/assessmentstaff/assessmentbooking/${id}/${sample.sampleId}/selection`)}>Xem chi tiết</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssessmentBooking;
