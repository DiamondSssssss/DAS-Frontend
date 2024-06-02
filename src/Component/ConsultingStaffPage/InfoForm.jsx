import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function InfoForm() {
    const [carat, setCarat] = useState("");
    const [colorGrade, setColorGrade] = useState("");
    const [clarityGrade, setClarityGrade] = useState("");
    const [cutGrade, setCutGrade] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const { loai, trangThai, xuatXu } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();

        const reportData = {
            loai,
            trangThai,
            xuatXu,
            carat,
            colorGrade,
            clarityGrade,
            cutGrade,
        };

        navigate.to({
            pathname: "/cut",
            state: reportData,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Điền Thông Tin</h1>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Trọng Lượng Carat:</label>
                <input
                    type="text"
                    value={carat}
                    onChange={(e) => setCarat(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Lớp Màu:</label>
                <input
                    type="text"
                    value={colorGrade}
                    onChange={(e) => setColorGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Lớp Rõ Ràng:</label>
                <input
                    type="text"
                    value={clarityGrade}
                    onChange={(e) => setClarityGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Cắt Lớp:</label>
                <input
                    type="text"
                    value={cutGrade}
                    onChange={(e) => setCutGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <button type="submit" className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">Tiếp theo</button>
        </form>
    );
}

export default InfoForm;
