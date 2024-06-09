import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import { handleSession } from "../../utils/sessionUtils";

function AssessmentPaperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loggedAccount, setLoggedAccount] = useState({});
  const [assessmentPaper, setAssessmentPaper] = useState(null);
  
  useEffect(() => {
    const account = handleSession(navigate);
    setLoggedAccount(account);
  }, [navigate]);

  useEffect(() => {
    const fetchAssessmentPaper = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/assessmentpapers/${id}`);
        setAssessmentPaper(response.data);
      } catch (error) {
        console.error("Error fetching assessment paper:", error);
      }
    };
    fetchAssessmentPaper();
  }, [id]);

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Assessment Paper Detail", 10, 10);
    // Add more details here based on the assessmentPaper data
    doc.save("AssessmentPaperDetail.pdf");
  };

  const renderImage = (imageUrl) => {
    return imageUrl ? <img src={imageUrl} alt="Assessment" className="mb-4 w-full" /> : null;
  };

  if (!assessmentPaper) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Assessment Paper Detail</h1>
      <div className="mb-4">
        <p>Type: {assessmentPaper.type}</p>
        <p>Size: {assessmentPaper.size}</p>
        <p>Shape: {assessmentPaper.shape}</p>
        <p>Color: {assessmentPaper.color}</p>
        <p>Clarity: {assessmentPaper.clarity}</p>
        <p>Polish: {assessmentPaper.polish}</p>
        <p>Symmetry: {assessmentPaper.symmetry}</p>
        <p>Fluorescence: {assessmentPaper.fluorescence}</p>
        <p>Weight: {assessmentPaper.weight}</p>
        <p>Comments: {assessmentPaper.comments}</p>
        <p>Date Created: {new Date(assessmentPaper.dateCreated).toLocaleString()}</p>
        <p>Table Percentage: {assessmentPaper.tablePercentage}</p>
        <p>Depth Percentage: {assessmentPaper.depthPercentage}</p>
        <p>Crown Angle: {assessmentPaper.crownAngle}</p>
        <p>Pavilion Angle: {assessmentPaper.pavilionAngle}</p>
        <p>Girdle Thickness: {assessmentPaper.girdleThickness}</p>
        <p>Culet Size: {assessmentPaper.culetSize}</p>
        <p>Total Depth: {assessmentPaper.totalDepth}</p>
        <p>Crown Height: {assessmentPaper.crownHeight}</p>
        <p>Pavilion Depth: {assessmentPaper.pavilionDepth}</p>
        <p>Symmetry Grade: {assessmentPaper.symmetryGrade}</p>
        <p>Seal ID: {assessmentPaper.sealId}</p>
        <p>Account ID: {assessmentPaper.accountId}</p>
        <p>Sample ID: {assessmentPaper.sampleId}</p>
      </div>
      <h2 className="text-lg font-bold mt-4 mb-2">Images:</h2>
      <div className="mb-4">
        {renderImage(assessmentPaper.crossSection)}
        {renderImage(assessmentPaper.longitudinalSection)}
        {renderImage(assessmentPaper.transverseSection)}
      </div>
      <button onClick={downloadPdf} className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">
        Download PDF
      </button>
    </div>
  );
}

export default AssessmentPaperDetail;