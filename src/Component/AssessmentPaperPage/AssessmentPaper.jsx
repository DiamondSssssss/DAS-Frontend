import "./AssessmentPaper.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function AssessmentBooking() {
  const [assessmentPapers, setAssessmentPapers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/assessmentpapers")
      .then(response => {
        setAssessmentPapers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the assessment papers!", error);
      });
  }, []);

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
              <th>Thuộc mẫu</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {assessmentPapers.map(paper => (
              <tr key={paper.diamondId}>
                <td>{paper.diamondId}</td>
                <td>{paper.accountId}</td>
                <td>{new Date(paper.dateCreated).toLocaleDateString()}</td>
                <td>{paper.sampleId}</td>
                <td>
                  <button onClick={() => navigate(`/assessmentstaff/assessmentpaper/${paper.diamondId}`)}>
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

export default AssessmentBooking;
