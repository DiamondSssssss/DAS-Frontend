import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AsPaperManager() {
  const navigate = useNavigate();

  const [assessmentPapers, setAssessmentPapers] = useState([]);
  const [selectedActions, setSelectedActions] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/assessment-papers")
      .then(response => {
        setAssessmentPapers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the assessment papers!", error);
      });
  }, []);

  const handleSelectChange = (e, paperId) => {
    const selectedAction = e.target.value;
    setSelectedActions(prevState => ({
      ...prevState,
      [paperId]: selectedAction,
    }));
  };

  const handleSubmit = (paperId) => {
    const selectedAction = selectedActions[paperId];
    if (selectedAction === "viewDetails") {
      navigate(`/assessmentstaff/assessmentpaperlist/${paperId}`);
    }
    // Add more actions if needed
  };

  return (
    <div className="w-full">
      <div className="max-w-full mx-auto p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Danh Sách Đơn</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-4 text-left align-middle">Mã giấy giám định</th>
                <th className="py-4 px-4 text-left align-middle">Người Tạo</th>
                <th className="py-4 px-4 text-left align-middle">Ngày tạo</th>
                <th className="py-4 px-4 text-left align-middle">Thuộc mẫu</th>
                <th className="py-4 px-4 text-left align-middle">Chi Tiết</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {assessmentPapers.map((paper) => (
                <tr key={paper.diamondId} className="hover:bg-gray-100">
                  <td className="py-4 px-4 align-middle">{paper.diamondId}</td>
                  <td className="py-4 px-4 align-middle">{paper.accountId}</td>
                  <td className="py-4 px-4 align-middle">{paper.dateCreated}</td>
                  <td className="py-4 px-4 align-middle">{paper.sampleId}</td>
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center justify-center">
                      <select
                        onChange={(e) => handleSelectChange(e, paper.diamondId)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        value={selectedActions[paper.diamondId] || ""}
                      >
                        <option value="" disabled hidden>Select action</option>
                        <option value="viewDetails">Xem chi tiết</option>
                        {/* Add more options as needed */}
                      </select>
                      <button
                        onClick={() => handleSubmit(paper.diamondId)}
                        className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
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

export default AsPaperManager;
