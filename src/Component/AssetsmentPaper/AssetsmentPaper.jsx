import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AssetsmentPaper/AssetsmentPaper.css";

const AssessmentPaper = () => {
  const [uploadedProportionImage, setUploadedProportionImage] = useState(null);
  const [uploadedClarityImage, setUploadedClarityImage] = useState(null);

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

  return (
    <Container className="mt-5 report-container">
      <div className="text-center mb-4">
        <h1 className="report-title">DAS REPORT</h1>
        <h2 className="report-id">10931</h2>
      </div>
      <Row>
        <Col md={4}>
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">DAS Natural Grading Report</h3>
              <p>May 12th, 2024</p>
              <p>DAS report number: 1234</p>
              <p>Shape and cutting style: Round Brilliant</p>
              <p>Measurement: 7.72-7.74x4.54mm</p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">GRADING RESULT</h3>
              <p>Carat Weight: 1.61 carat</p>
              <p>Color Grade: D</p>
              <p>Clarity Grade: Internally Flawless</p>
              <p>Cut Grade: Excellent</p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">ADDITIONAL GRADING INFORMATION</h3>
              <p>Polish: Excellent</p>
              <p>Symmetry: Excellent</p>
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
                src={"./src/assets/All-Scales.jpg"}
                alt="Grading Scale"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AssessmentPaper;
