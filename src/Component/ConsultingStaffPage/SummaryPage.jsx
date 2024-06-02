import React from "react";
import { useLocation } from "react-router-dom";

function SummaryPage() {
const location = useLocation();
const { loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, depthPercentage, tablePercentage,
crownAngle, pavilionAngle, culetSize, girdleThickness, crownHeight, totalDepth, pavilionDepth, symmetry } =
location.state || {};

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
</div>
);
}

export default SummaryPage;