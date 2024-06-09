import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, InputNumber, Button, Typography, Select } from "antd";

const { Title } = Typography;

function InfoForm() {
  const [carat, setCarat] = useState(0);
  const [colorGrade, setColorGrade] = useState("");
  const [clarityGrade, setClarityGrade] = useState("");
  const [cutGrade, setCutGrade] = useState("");
  const [size, setSize] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { id, sampleId } = useParams();

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
    };

    navigate(
      `/assessmentstaff/assessmentbooking/${id}/${sampleId}/selection/info/cut`,
      { state: reportData }
    );
  };

  return (
    <Form onFinish={handleSubmit} className="flex flex-col p-10 bg-gray-50">
      <Title level={2} className="mb-4">
        Điền Thông Tin
      </Title>
      <Form.Item
        label="Trọng Lượng Carat"
        name="carat"
        rules={[
          { required: true, message: "Vui lòng điền trọng lượng carat!" },
        ]}
      >
        <InputNumber
          value={carat}
          onChange={(value) => setCarat(value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          min={0}
          step={0.01}
        />
      </Form.Item>

      <Form.Item
        label="Kích cỡ"
        name="size"
        rules={[
          { required: true, message: "Vui lòng điền kích cỡ kim cương!" },
        ]}
      >
        <InputNumber
          value={size}
          onChange={(value) => setSize(value)}
          className="p-2 border border-gray-300 rounded-md w-full"
          min={0}
          step={0.01}
        />
      </Form.Item>

      <Form.Item
        label="Lớp Màu"
        name="colorGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp màu!" }]}
      >
        <Select
          value={colorGrade}
          onChange={(value) => setColorGrade(value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          {["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map((grade) => (
            <Select.Option key={grade} value={grade}>
              {grade}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Lớp Rõ Ràng"
        name="clarityGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp rõ ràng!" }]}
      >
        <Select
          value={clarityGrade}
          onChange={(value) => setClarityGrade(value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          {["Flawless", "Internally Flawless", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1", "I2", "I3"].map((grade) => (
            <Select.Option key={grade} value={grade}>
              {grade}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Cắt Lớp"
        name="cutGrade"
        rules={[{ required: true, message: "Vui lòng điền cắt lớp!" }]}
      >
        <Select
          value={cutGrade}
          onChange={(value) => setCutGrade(value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          {["Excellent", "Very Good", "Good", "Fair", "Poor"].map((grade) => (
            <Select.Option key={grade} value={grade}>
              {grade}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="mt-4">
          Tiếp theo
        </Button>
      </Form.Item>
    </Form>
  );
}

export default InfoForm;
