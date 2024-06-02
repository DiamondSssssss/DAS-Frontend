import { Button, Form, Input, InputNumber, Select } from "antd";
import { Option } from "antd/es/mentions";
import "./AssessmentRequestCustomer.css";
import axios from "axios";
import { useState } from "react";

function AssessmentRequest() {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  const handleFormSubmit = (values) => {
    const data = {
      requestId: -1,
      ...values,
      serviceId: parseInt(values.serviceId),
      accountId: 1,
      status: 1,
      dateCreated: new Date().toISOString(),
      meetingDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    };

    axios.post('http://localhost:8080/api/assessmentrequests', data)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container-booking">
      <Form
        {...formItemLayout}
        form={form}
        onFinish={handleFormSubmit}
        style={{ maxWidth: 600 }}
      >
        <h2>Đặt Hẹn</h2>
        <Form.Item
          label="Tên Khách Hàng"
          name="name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số Điện Thoại"
          name="phone"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Địa Chỉ"
          name="address"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="serviceId"
          label="Chọn Dịch Vụ"
          rules={[{ required: true, message: "Please choose one!" }]}
        >
          <Select placeholder="Chọn Dịch Vụ">
            <Option value={1}>Giám Định Kim Cương 72H</Option>
            <Option value={2}>Giám Định Kim Cương 48H</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Số Lượng(Viên)"
          name="numberOfSamples"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">Đặt Lịch</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AssessmentRequest;