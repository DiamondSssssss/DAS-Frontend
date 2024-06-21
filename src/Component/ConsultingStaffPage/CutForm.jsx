import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function CutForm() {
  const [depthPercentage, setDepthPercentage] = useState("");
  const [tablePercentage, setTablePercentage] = useState("");
  const [crownAngle, setCrownAngle] = useState("");
  const [pavilionAngle, setPavilionAngle] = useState("");
  const [culetSize, setCuletSize] = useState("");
  const [girdleThickness, setGirdleThickness] = useState("");
  const [crownHeight, setCrownHeight] = useState("");
  const [totalDepth, setTotalDepth] = useState("");
  const [pavilionDepth, setPavilionDepth] = useState("");
  const [symmetry, setSymmetry] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id, sampleId } = useParams();
  const { loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, size } =
    location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const cutData = {
      loai,
      trangThai,
      xuatXu,
      carat,
      colorGrade,
      clarityGrade,
      cutGrade,
      size,
      depthPercentage,
      tablePercentage,
      crownAngle,
      pavilionAngle,
      culetSize,
      girdleThickness,
      crownHeight,
      totalDepth,
      pavilionDepth,
      symmetry,
      images: {
        image1,
        image2,
        image3,
      },
    };

    navigate(
      `/assessmentstaff/assessmentbooking/${id}/${sampleId}/selection/info/cut/summary`,
      { state: cutData }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-white shadow-lg rounded-lg w-full max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Cut Form</h1>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-lg font-medium mb-2">Depth Percentage:</label>
          <input
            type="number"
            value={depthPercentage}
            onChange={(e) => setDepthPercentage(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Table Percentage:</label>
          <input
            type="number"
            value={tablePercentage}
            onChange={(e) => setTablePercentage(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Crown Angle:</label>
          <input
            type="number"
            value={crownAngle}
            onChange={(e) => setCrownAngle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Pavilion Angle:</label>
          <input
            type="number"
            value={pavilionAngle}
            onChange={(e) => setPavilionAngle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Culet Size:</label>
          <input
            type="number"
            value={culetSize}
            onChange={(e) => setCuletSize(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Girdle Thickness</label>
          <input
            type="number"
            value={girdleThickness}
            onChange={(e) => setGirdleThickness(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Crown Height:</label>
          <input
            type="number"
            value={crownHeight}
            onChange={(e) => setCrownHeight(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Total Depth:</label>
          <input
            type="number"
            value={totalDepth}
            onChange={(e) => setTotalDepth(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Pavilion Depth</label>
          <input
            type="number"
            value={pavilionDepth}
            onChange={(e) => setPavilionDepth(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Symmetry Value:</label>
          <input
            type="number"
            value={symmetry}
            onChange={(e) => setSymmetry(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Image 1:</label>
          <input
            type="file"
            onChange={(e) => setImage1(e.target.files[0])}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Image 2:</label>
          <input
            type="file"
            onChange={(e) => setImage2(e.target.files[0])}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="block text-lg font-medium mb-2">Image 3:</label>
          <input
            type="file"
            onChange={(e) => setImage3(e.target.files[0])}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md mt-6 self-center text-lg">
        Continue
      </button>
    </form>
  );
}

export default CutForm;
