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
  const location = useLocation();
  const navigate = useNavigate();
  const { id, sampleId } = useParams();
  const { loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade } =
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
    };

    navigate(
      `/assessmentstaff/assessmentbooking/${id}/${sampleId}/selection/info/cut/summary`,
      { state: cutData }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Điền Thông Tin Mặt Cắt</h1>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Tỷ Lệ Phần Trăm Độ Sâu:
        </label>
        <input
          type="number"
          value={depthPercentage}
          onChange={(e) => setDepthPercentage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Tỷ Lệ Bàn:</label>
        <input
          type="number"
          value={tablePercentage}
          onChange={(e) => setTablePercentage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Góc Vương Miện:
        </label>
        <input
          type="number"
          value={crownAngle}
          onChange={(e) => setCrownAngle(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Góc Mái:</label>
        <input
          type="number"
          value={pavilionAngle}
          onChange={(e) => setPavilionAngle(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Kích Thước Culet:
        </label>
        <input
          type="number"
          value={culetSize}
          onChange={(e) => setCuletSize(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Độ Dày Girdle:</label>
        <input
          type="number"
          value={girdleThickness}
          onChange={(e) => setGirdleThickness(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Chiều Cao Vương Miện:
        </label>
        <input
          type="number"
          value={crownHeight}
          onChange={(e) => setCrownHeight(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Tổng Chiều Sâu:
        </label>
        <input
          type="number"
          value={totalDepth}
          onChange={(e) => setTotalDepth(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Chiều Sâu Pavilion:
        </label>
        <input
          type="number"
          value={pavilionDepth}
          onChange={(e) => setPavilionDepth(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Độ Đối Xứng:</label>
        <input
          type="number"
          value={symmetry}
          onChange={(e) => setSymmetry(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
      >
        Tiếp theo
      </button>
    </form>
  );
}

export default CutForm;
