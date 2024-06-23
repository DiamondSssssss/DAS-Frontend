import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests
import html2canvas from 'html2canvas';
import "bootstrap/dist/css/bootstrap.min.css";
import "../AssetsmentPaper/AssetsmentPaper.css";

const AssessmentPaperPreview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        id, loai, trangThai, xuatXu, carat, colorGrade, clarityGrade, cutGrade, size,
        shape, cuttingStyle, polish, symmetry, fluorescence,
        uploadedProportionImage, uploadedClarityImage, loggedAccount
    } = location.state || {};
    const reportRef = useRef(null);

    const handleDownload = async () => {
        try {
            const canvas = await html2canvas(reportRef.current, {
                scrollX: 0,
                scrollY: 0,
                scale: 1,
                windowWidth: document.documentElement.offsetWidth,
                windowHeight: document.documentElement.offsetHeight,
            });
            const paperImage = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = paperImage;
            link.download = `Assessment_Paper_${id}.png`;
            link.click();
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    // Function to convert report to image and handle form submission
    const handleSubmit = async () => {
        try {
            // Convert the report to an image
            const canvas = await html2canvas(reportRef.current, {
                scrollX: 0,
                scrollY: 0,
                scale: 1,
                windowWidth: document.documentElement.offsetWidth,
                windowHeight: document.documentElement.offsetHeight,
            });
            const paperImage = canvas.toDataURL("image/png");

            // Prepare data object based on AssessmentPaperDto structure
            const assessmentData = {
                sampleId: parseInt(id), // Assuming id is from useParams()
                type: loai,
                size: parseFloat(size),
                shape: `${shape} ${cuttingStyle}`,
                cuttingStyle,
                color: colorGrade,
                clarity: clarityGrade,
                polish,
                symmetry,
                fluorescence,
                weight: parseFloat(carat),
                dateCreated: new Date().toISOString(), // Current date
                paperImage, // Base64 image
                accountId: loggedAccount.accountId, // Example account ID
            };

            // Make POST request to backend
            const response = await axios.post('http://localhost:8080/api/assessment-papers', assessmentData);

            console.log('Submission successful:', response.data);
            // Optionally, navigate to another page or display a success message
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <Container className="mt-5 report-container">
            <div ref={reportRef}>
                <div className='gold-outline'>
                    <div className="text-center mb-4">
                        <h1 className="report-title">DAS REPORT #{id}</h1>
                        <h2 className="report-id"></h2>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Row className="mb-4">
                                <Col>
                                    <h3 className="section-title">DAS Natural Grading Report</h3>
                                    <p>May 12th, 2024</p>
                                    <p>DAS report number: 1234</p>
                                    <p>Shape and cutting style: {shape} {cuttingStyle}</p>
                                    <p>Measurement: 7.72-7.74x4.54mm</p>
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
                                    <p>Polish: {polish}</p>
                                    <p>Symmetry: {symmetry}</p>
                                    <p>Fluorescence: {fluorescence}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row className="mb-4">
                                <Col>
                                    <h3 className="section-title">PROPORTION</h3>
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
                                        src={"/src/assets/All-Scales.jpg"}
                                        alt="Grading Scale"
                                        className="img-fluid"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Buttons section */}
            <Row className="mb-4">
                <Col>
                    <Button variant="primary" onClick={handleDownload}>
                        Download
                    </Button>
                    <Button variant="success" onClick={handleSubmit} className="ml-3">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AssessmentPaperPreview;
