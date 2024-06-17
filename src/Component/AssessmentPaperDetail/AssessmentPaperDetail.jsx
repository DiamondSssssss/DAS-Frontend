import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";

function AssessmentPaperDetail() {
  const { id } = useParams();
  const [assessmentPaper, setAssessmentPaper] = useState(null);

  useEffect(() => {
    const fetchAssessmentPaper = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/assessment-papers/${id}`);
        setAssessmentPaper(response.data);
      } catch (error) {
        console.error("Error fetching assessment paper:", error);
      }
    };
    fetchAssessmentPaper();
  }, [id]);

  const downloadImage = () => {
    const element = document.getElementById("assessment-paper-detail");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "AssessmentPaperDetail.png";
      link.click();
    });
  };

  if (!assessmentPaper) {
    return <div>Loading...</div>;
  }

  return (
    <div id="assessment-paper-detail" className="p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Assessment Paper Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessmentPaper.paperImage && <img src={assessmentPaper.paperImage} alt="paperImage" className="mb-4 w-full" />}
      </div>
      <button onClick={downloadImage} className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">
        Download Image
      </button>
    </div>
  );
}

export default AssessmentPaperDetail;
