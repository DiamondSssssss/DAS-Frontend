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
        doc.text(`Trọng Lượng Carat: ${carat}`, 10, 70);
        doc.text(`Lớp Màu: ${colorGrade}`, 10, 80);
        doc.text(`Lớp Rõ Ràng: ${clarityGrade}`, 10, 90);
        doc.text(`Cắt Lớp: ${cutGrade}`, 10, 100);
        doc.text(`Tỷ Lệ Phần Trăm Độ Sâu: ${depthPercentage}`, 10, 110);
        doc.text(`Tỷ Lệ Bảng: ${tablePercentage}`, 10, 120);
        doc.text(`Góc Mặt Trên: ${crownAngle}`, 10, 130);
        doc.text(`Góc Gian Hàng: ${pavilionAngle}`, 10, 140);
        doc.text(`Kích Thước Culet: ${culetSize}`, 10, 150);
        doc.text(`Độ Dày Của Đai: ${girdleThickness}`, 10, 160);
        doc.text(`Chiều Cao Mặt Trên: ${crownHeight}`, 10, 170);
        doc.text(`Tổng Độ Sâu: ${totalDepth}`, 10, 180);
        doc.text(`Độ Sâu Gian Hàng: ${pavilionDepth}`, 10, 190);
        doc.text(`Lớp Đối Xứng: ${symmetry}`, 10, 200);
        doc.save("summary.pdf");
    };

    return (
        <div className="p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Tổng Hợp Thông Tin</h1>
            <h2 className="text-lg font-bold mb-2">Thông Tin Về Đá Quý:</h2>
            <p>Loại: {loai}</p>
            <p>Trạng Thái: {trangThai}</p>
            <p>Xuất Xứ: {xuatXu}</p>
            <h2 className="text-lg font-bold mt-4 mb-2">Thông Tin Về Mặt Cắt:</h2>
            <p>Trọng Lượng Carat: {carat}</p>
            <p>Lớp Màu: {colorGrade}</p>
            <p>Lớp Rõ Ràng: {clarityGrade}</p>
            <p>Cắt Lớp: {cutGrade}</p>
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
