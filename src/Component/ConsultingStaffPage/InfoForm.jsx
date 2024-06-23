import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, InputNumber, Button, Typography, Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

function InfoForm() {
  const [carat, setCarat] = useState(0);
  const [colorGrade, setColorGrade] = useState("");
  const [clarityGrade, setClarityGrade] = useState("");
  const [cutGrade, setCutGrade] = useState("");
  const [size, setSize] = useState(0);
  const [shape, setShape] = useState("");
  const [cuttingStyle, setCuttingStyle] = useState("");
  const [polish, setPolish] = useState("");
  const [symmetry, setSymmetry] = useState("");
  const [fluorescence, setFluorescence] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { loai, trangThai, xuatXu } = location.state || {};

  const handleSubmit = () => {
    const reportData = {
      loai,
      trangThai,
      xuatXu,
      carat,
      colorGrade,
      clarityGrade,
      cutGrade,
      size,
      shape,
      cuttingStyle,
      polish,
      symmetry,
      fluorescence,
    };

    navigate(
      `/assessmentstaff/assessmentbooking/${id}/selection/info/summary`,
      { state: reportData }
    );
  };

  return (
    <Form
      onFinish={handleSubmit}
      className="flex flex-col p-10 bg-white shadow-lg rounded-lg w-full max-w-2xl mx-auto mt-10"
    >
      <div className="text-center mb-6">
        <Title level={2} className="text-gray-700">Fill Information</Title>
      </div>
      <Form.Item
        label="Carat Weight"
        name="carat"
        rules={[
          { required: true, message: "Vui lòng điền trọng lượng carat!" },
        ]}
        className="text-xl"
      >
        <InputNumber
          value={carat}
          onChange={(value) => setCarat(value)}
          className="w-full text-xl"
          min={0}
          step={0.01}
        />
      </Form.Item>

      <Form.Item
        label="Size"
        name="size"
        rules={[
          { required: true, message: "Vui lòng điền kích cỡ kim cương!" },
        ]}
        className="text-xl"
      >
        <InputNumber
          value={size}
          onChange={(value) => setSize(value)}
          className="w-full text-xl"
          min={0}
          step={0.01}
        />
      </Form.Item>

      <Form.Item
        label="Color Grade"
        name="colorGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp màu!" }]}
        className="text-xl"
      >
        <Select
          value={colorGrade}
          onChange={(value) => setColorGrade(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Clarity Grade"
        name="clarityGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp rõ ràng!" }]}
        className="text-xl"
      >
        <Select
          value={clarityGrade}
          onChange={(value) => setClarityGrade(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Flawless", "Internally Flawless", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2", "I3"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Cut Grade"
        name="cutGrade"
        rules={[{ required: true, message: "Vui lòng điền cắt lớp!" }]}
        className="text-xl"
      >
        <Select
          value={cutGrade}
          onChange={(value) => setCutGrade(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Shape"
        name="shape"
        rules={[{ required: true, message: "Vui lòng chọn hình dạng!" }]}
        className="text-xl"
      >
        <Select
          value={shape}
          onChange={(value) => setShape(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Round", "Princess", "Emerald", "Asscher", "Marquise", "Oval", "Radiant", "Pear", "Heart", "Cushion"].map((shape) => (
            <Option key={shape} value={shape}>
              {shape}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Cutting Style"
        name="cuttingStyle"
        rules={[{ required: true, message: "Vui lòng chọn phong cách cắt!" }]}
        className="text-xl"
      >
        <Select
          value={cuttingStyle}
          onChange={(value) => setCuttingStyle(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Brilliant", "Step", "Mixed"].map((style) => (
            <Option key={style} value={style}>
              {style}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Polish"
        name="polish"
        rules={[{ required: true, message: "Vui lòng chọn độ bóng!" }]}
        className="text-xl"
      >
        <Select
          value={polish}
          onChange={(value) => setPolish(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Symmetry"
        name="symmetry"
        rules={[{ required: true, message: "Vui lòng chọn độ đối xứng!" }]}
        className="text-xl"
      >
        <Select
          value={symmetry}
          onChange={(value) => setSymmetry(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Fluorescence"
        name="fluorescence"
        rules={[{ required: true, message: "Vui lòng chọn huỳnh quang!" }]}
        className="text-xl"
      >
        <Select
          value={fluorescence}
          onChange={(value) => setFluorescence(value)}
          className="w-full text-xl"
          dropdownRender={(menu) => (
            <div className="shadow-lg">{menu}</div>
          )}
        >
          {["None", "Faint", "Medium", "Strong", "Very Strong"].map((grade) => (
            <Option key={grade} value={grade}>
              {grade}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" className="mt-4 w-full text-xl">
          Tiếp theo
        </Button>
      </Form.Item>
    </Form>
  );
}

export default InfoForm;
