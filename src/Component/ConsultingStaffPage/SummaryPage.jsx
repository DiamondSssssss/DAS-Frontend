import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

function SummaryPage() {
    const location = useLocation();
    const { loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, depthPercentage, tablePercentage, crownAngle, pavilionAngle, culetSize, girdleThickness, crownHeight, totalDepth, pavilionDepth, symmetry } = location.state || {};

    const downloadPdf = () => {
        const doc = new jsPDF();
        doc.text("Tổng Hợp Thông Tin", 10, 10);
        doc.text("Thông Tin Về Đá Quý:", 10, 20);
        doc.text(`Loại: ${loai}`, 10, 30);
        doc.text(`Trạng Thái: ${trangThai}`, 10, 40);
        doc.text(`Xuất Xứ: ${xuatXu}`, 10, 50);
        doc.text("Thông Tin Về Mặt Cắt:", 10, 60);
        // Thêm các dòng văn bản khác vào tài liệu PDF ở đây
        doc.save("summary.pdf");
    };

    return (
        <div className="p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Tổng Hợp Thông Tin</h1>
            <h2 className="text-lg font-bold mb-2">Thông Tin Về Đá Quý:</h2>
            <p>Loại: {loai}</p>
            <p>Trạng Thái: {trangThai}</p>
            <p>Xuất Xứ: {xuatXu}</p>
            <p>Trọng Lượng Carat: {carat}</p>
            <p>Lớp Màu: {colorGrade}</p>
            <p>Lớp Rõ Ràng: {clarityGrade}</p>
            <p>Cắt Lớp: {cutGrade}</p>
            <h2 className="text-lg font-bold mt-4 mb-2">Thông Tin Về Mặt Cắt:</h2>
            <p>Tỷ Lệ Phần Trăm Độ Sâu: {depthPercentage}</p>
            <p>Tỷ Lệ Bảng: {tablePercentage}</p>
            <p>Góc Mặt Trên: {crownAngle}</p>
            <p>Góc Gian Hàng: {pavilionAngle}</p>
            <p>Kích Thước Culet: {culetSize}</p>
            <p>Độ Dày Của Đai: {girdleThickness}</p>
            <p>Chiều Cao Mặt Trên: {crownHeight}</p>
            <p>Tổng Độ Sâu: {totalDepth}</p>
            <p>Độ Sâu Gian Hàng: {pavilionDepth}</p>
            <p>Lớp Đối Xứng: {symmetry}</p>
            <button onClick={downloadPdf} className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">Tải về PDF</button>
        </div>
    );
}

export default SummaryPage;
