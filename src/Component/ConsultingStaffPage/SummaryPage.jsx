import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AssetsmentPaper/AssetsmentPaper.css"; // Ensure correct path to assetmentPaper.css
import { handleSession } from "../../utils/sessionUtils";

const SummaryPage = () => {
    const { id, sampleId } = useParams();
    const navigate = useNavigate();
    const [loggedAccount, setLoggedAccount] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [assessmentData, setAssessmentData] = useState(null);
    const [uploadedProportionImage, setUploadedProportionImage] = useState(null);
    const [uploadedClarityImage, setUploadedClarityImage] = useState(null);

    useEffect(() => {
        const account = handleSession(navigate);
        setLoggedAccount(account);

        // Fetch the assessment data
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/assessmentpapers/${id}`);
                setAssessmentData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [navigate, id]);

    const handleProportionImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedProportionImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClarityImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedClarityImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const assessmentPaperDto = {
                ...assessmentData,
                crossSection: uploadedProportionImage,
                longitudinalSection: uploadedClarityImage,
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
        if (assessmentData) {
            const {
                loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, size,
                depthPercentage, tablePercentage, crownAngle, pavilionAngle, culetSize,
                girdleThickness, crownHeight, totalDepth, pavilionDepth, symmetry
            } = assessmentData;

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
        }
    };

    if (!assessmentData) {
        return <div>Loading...</div>;
    }

    const {
        loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, size,
        depthPercentage, tablePercentage, crownAngle, pavilionAngle, culetSize,
        girdleThickness, crownHeight, totalDepth, pavilionDepth, symmetry, images
    } = assessmentData;

    return (
        <Container className="mt-5 report-container">
            <div className="text-center mb-4">
                <h1 className="report-title">DAS REPORT</h1>
                <h2 className="report-id">{id}</h2>
            </div>
            <Row>
                <Col md={4}>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">DAS Natural Grading Report</h3>
                            <p>{new Date().toLocaleDateString()}</p>
                            <p>DAS report number: {id}</p>
                            <p>Shape and cutting style: {loai}</p>
                            <p>Measurement: {size}</p>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">GRADING RESULT</h3>
                            <p>Carat Weight: {carat} carat</p>
                            <p>Color Grade: {colorGrade}</p>
                            <p>Clarity Grade: {clarityGrade}</p>
                            <p>Cut Grade: {cutGrade}</p>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">ADDITIONAL GRADING INFORMATION</h3>
                            <p>Polish: Excellent</p>
                            <p>Symmetry: {symmetry}</p>
                            <p>Fluorescence: None</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">PROPORTION</h3>
                            <Form.Group className="mt-3">
                                <Form.Control
                                    type="file"
                                    label="Upload Image"
                                    accept="image/*"
                                    onChange={handleProportionImageUpload}
                                />
                            </Form.Group>
                            {uploadedProportionImage && (
                                <div className="image-container">
                                    <img
                                        src={uploadedProportionImage}
                                        alt="Proportion"
                                        className="uploaded-image"
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">CLARITY CHARACTERISTICS</h3>
                            <Form.Group className="mt-3">
                                <Form.Control
                                    type="file"
                                    label="Upload Image"
                                    accept="image/*"
                                    onChange={handleClarityImageUpload}
                                />
                            </Form.Group>
                            {uploadedClarityImage && (
                                <div className="image-container">
                                    <img
                                        src={uploadedClarityImage}
                                        alt="Clarity"
                                        className="uploaded-image"
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className="mb-4">
                        <Col>
                            <h3 className="section-title">GRADING SCALE</h3>
                            <img
                                src={"./src/assets/All-Scales.jpg"} // Make sure this path is correct
                                alt="Grading Scale"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="button-container text-center">
                <button onClick={downloadPdf} className="download-pdf btn btn-danger">
                    Tải về PDF
                </button>
                <button onClick={handleSubmit} disabled={isSubmitting} className="submit-report btn btn-primary ml-3">
                    {isSubmitting ? 'Đang Tạo Báo Cáo...' : 'Tạo Báo Cáo'}
                </button>
            </div>
        </Container>
    );
};

export default SummaryPage;
