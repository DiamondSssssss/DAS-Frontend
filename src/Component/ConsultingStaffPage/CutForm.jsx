import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

    const { carat, colorGrade, clarityGrade, cutGrade } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();

        const cutData = {
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

        navigate({
            pathname: "/summary",
            state: cutData,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Điền Thông Tin Mặt Cắt</h1>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Tỷ Lệ Phần Trăm Độ Sâu:</label>
                <input
                    type="text"
                    value={depthPercentage}
                    onChange={(e) => setDepthPercentage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Tỷ Lệ Bảng:</label>
                <input
                    type="text"
                    value={tablePercentage}
                    onChange={(e) => setTablePercentage(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Góc Mặt Trên:</label>
                <input
                    type="text"
                    value={crownAngle}
                    onChange={(e) => setCrownAngle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Góc Gian Hàng:</label>
                <input
                    type="text"
                    value={pavilionAngle}
                    onChange={(e) => setPavilionAngle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Kích Thước Culet:</label>
                <input
                    type="text"
                    value={culetSize}
                    onChange={(e) => setCuletSize(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Độ Dày Của Đai:</label>
                <input
                    type="text"
                    value={girdleThickness}
                    onChange={(e) => setGirdleThickness(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Chiều Cao Mặt Trên:</label>
                <input
                    type="text"
                    value={crownHeight}
                    onChange={(e) => setCrownHeight(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Tổng Độ Sâu:</label>
                <input
                    type="text"
                    value={totalDepth}
                    onChange={(e) => setTotalDepth(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Độ Sâu Gian Hàng:</label>
                <input
                    type="text"
                    value={pavilionDepth}
                    onChange={(e) => setPavilionDepth(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Lớp Đối Xứng:</label>
                <input
                    type="text"
                    value={symmetry}
                    onChange={(e) => setSymmetry(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <button type="submit" className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">Tiếp theo</button>
        </form>
    );
}

export default CutForm;
