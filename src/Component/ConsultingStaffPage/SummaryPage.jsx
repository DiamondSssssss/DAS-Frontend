import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import axios from "axios";
import { handleSession } from "../../utils/sessionUtils";

function SummaryPage() {
    const { id, sampleId } = useParams();
    const navigate = useNavigate();
    const [loggedAccount, setLoggedAccount] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    useEffect(() => {
        const account = handleSession(navigate);
        setLoggedAccount(account);
    }, [navigate]);

    const location = useLocation();
    const {
        loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, size,
        depthPercentage, tablePercentage, crownAngle, pavilionAngle, culetSize,
        girdleThickness, crownHeight, totalDepth, pavilionDepth, symmetry, images
    } = location.state || {};

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const crossSection = images.image1 ? await getBase64(images.image1) : null;
            const longitudinalSection = images.image2 ? await getBase64(images.image2) : null;
            const transverseSection = images.image3 ? await getBase64(images.image3) : null;

            const assessmentPaperDto = {
                type: loai,
                size: parseFloat(size),
                shape: "shape",
                color: colorGrade,
                clarity: clarityGrade,
                polish: "polish",
                symmetry: symmetry,
                fluorescence: "fluorescence",
                weight: parseFloat(carat),
                comments: "comments",
                dateCreated: new Date().toISOString(),
                tablePercentage: parseFloat(tablePercentage),
                depthPercentage: parseFloat(depthPercentage),
                crownAngle: parseFloat(crownAngle),
                pavilionAngle: parseFloat(pavilionAngle),
                girdleThickness: girdleThickness,
                culetSize: parseFloat(culetSize),
                totalDepth: parseFloat(totalDepth),
                crownHeight: parseFloat(crownHeight),
                pavilionDepth: parseFloat(pavilionDepth),
                symmetryGrade: parseFloat(symmetry),
                crossSection,
                longitudinalSection,
                transverseSection,
                sealId: 3,
                accountId: loggedAccount.accountId,
                sampleId: sampleId
            };

            const response = await axios.post('http://localhost:8080/api/assessmentpapers', assessmentPaperDto);
            console.log('Successfully submitted:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const renderImage = (image) => {
        if (image) {
            if (typeof image === 'string') {
                return <img src={image} alt="Hình Ảnh" className="mb-4 w-full" />;
            }
            return <img src={URL.createObjectURL(image)} alt="Hình Ảnh" className="mb-4 w-full" />;
        }
        return null;
    };

    return (
        <div className="p-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">Tổng Hợp Thông Tin</h1>
            <h2 className="text-lg font-bold mb-2">Thông Tin Về Đá Quý:</h2>
            <div className="mb-4">
                <p>Loại: {loai}</p>
                <p>Trạng Thái: {trangThai}</p>
                <p>Xuất Xứ: {xuatXu}</p>
            </div>
            <h2 className="text-lg font-bold mt-4 mb-2">Thông Tin Về Mặt Cắt:</h2>
            <div className="mb-4">
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
            </div>
            <h2 className="text-lg font-bold mt-4 mb-2">Hình Ảnh:</h2>
            <div className="mb-4">
                {renderImage(images.image1)}
                {renderImage(images.image2)}
                {renderImage(images.image3)}
            </div>
            <button onClick={downloadPdf} className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">
                Tải về PDF
            </button>
            <button onClick={handleSubmit} disabled={isSubmitting} className="p-3 bg-blue-500 text-white font-bold rounded-md mt-4 ml-4">
                {isSubmitting ? 'Đang Tạo Báo Cáo...' : 'Tạo Báo Cáo'}
            </button>
        </div>
    );
}

export default SummaryPage;
