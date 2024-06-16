import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AssetsmentPaper/AssetsmentPaper.css";

// Placeholder image paths (replace these with the actual paths or import statements)
const proportionImg = "/mnt/data/image.png";
const clarityImg = "/mnt/data/image.png";
const gradingScaleImg = "/mnt/data/image.png";
const qrCodeImg = "/mnt/data/image.png";

const AssessmentPaper = () => {
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
              <img
                src={proportionImg}
                alt="Proportion Diagram"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">CLARITY CHARACTERISTICS</h3>
              <img
                src={clarityImg}
                alt="Clarity Characteristics Diagram"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="mb-4">
            <Col>
              <h3 className="section-title">GRADING SCALE</h3>
              <img
                src={gradingScaleImg}
                alt="Grading Scale"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="description-section">
        <h3>Description</h3>
        <img src={qrCodeImg} alt="QR" className="img-fluid" />
      </div>
    </Container>
  );
};

export default AssessmentPaper;
