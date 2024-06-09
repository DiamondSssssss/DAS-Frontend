import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, Input, Button, Typography, Select } from "antd";

const { Title } = Typography;

function InfoForm() {
  const [carat, setCarat] = useState("");
  const [colorGrade, setColorGrade] = useState("");
  const [clarityGrade, setClarityGrade] = useState("");
  const [cutGrade, setCutGrade] = useState("");
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
        <Input
          value={carat}
          onChange={(e) => setCarat(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </Form.Item>
      <Form.Item
        label="Lớp Màu"
        name="colorGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp màu!" }]}
      >
        <Select>
          <Select.Option value="demo">D</Select.Option>
          <Select.Option value="demo">E</Select.Option>
          <Select.Option value="demo">F</Select.Option>
          <Select.Option value="demo">G</Select.Option>
          <Select.Option value="demo">H</Select.Option>
          <Select.Option value="demo">I</Select.Option>
          <Select.Option value="demo">J</Select.Option>
          <Select.Option value="demo">K</Select.Option>
          <Select.Option value="demo">L</Select.Option>
          <Select.Option value="demo">M</Select.Option>
          <Select.Option value="demo">N</Select.Option>
          <Select.Option value="demo">O</Select.Option>
          <Select.Option value="demo">P</Select.Option>
          <Select.Option value="demo">Q</Select.Option>
          <Select.Option value="demo">R</Select.Option>
          <Select.Option value="demo">S</Select.Option>
          <Select.Option value="demo">T</Select.Option>
          <Select.Option value="demo">U</Select.Option>
          <Select.Option value="demo">V</Select.Option>
          <Select.Option value="demo">W</Select.Option>
          <Select.Option value="demo">X</Select.Option>
          <Select.Option value="demo">Y</Select.Option>
          <Select.Option value="demo">Z</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Lớp Rõ Ràng"
        name="clarityGrade"
        rules={[{ required: true, message: "Vui lòng điền lớp rõ ràng!" }]}
      >
        {/* <Input
          value={clarityGrade}
          onChange={(e) => setClarityGrade(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        /> */}
        <Select>
          <Select.Option value="demo">Flawless</Select.Option>
          <Select.Option value="demo">Internally Flawless</Select.Option>
          <Select.Option value="demo">VVS1</Select.Option>
          <Select.Option value="demo">VVS2</Select.Option>
          <Select.Option value="demo">VS1</Select.Option>
          <Select.Option value="demo">VS2</Select.Option>
          <Select.Option value="demo">SI1</Select.Option>
          <Select.Option value="demo">SI2</Select.Option>
          <Select.Option value="demo">I1</Select.Option>
          <Select.Option value="demo">I2</Select.Option>
          <Select.Option value="demo">I3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Cắt Lớp"
        name="cutGrade"
        rules={[{ required: true, message: "Vui lòng điền cắt lớp!" }]}
      >
        <Input
          value={cutGrade}
          onChange={(e) => setCutGrade(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
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
