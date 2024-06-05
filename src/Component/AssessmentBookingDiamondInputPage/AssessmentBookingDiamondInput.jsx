import React from 'react';
import { Form, Input, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './AssessmentBookingDiamondInput.css';

const AssessmentBookingDiamondInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, numberOfSamples } = location.state || {};
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
    // Here you can handle the form submission, such as sending the data to a server
  };

  const renderDiamondFields = () => {
    const diamondFields = [];
    for (let i = 0; i < numberOfSamples; i++) {
      diamondFields.push(
        <div key={i} className="diamond-field">
          <div className="diamond-field-title">Diamond {i + 1}</div>
          <Form.Item
            label="Name"
            name={`diamond${i + 1}Name`}
            rules={[{ required: true, message: 'Please input diamond name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Size"
            name={`diamond${i + 1}Size`}
            rules={[{ required: true, message: 'Please input diamond size!' }]}
          >
            <Input />
          </Form.Item>
        </div>
      );
    }
    return diamondFields;
  };

  return (
    <div className="assessment-booking-diamond-input">
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        {renderDiamondFields()}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AssessmentBookingDiamondInput;