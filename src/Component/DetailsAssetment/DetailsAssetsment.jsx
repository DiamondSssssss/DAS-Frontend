import React, { useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, TreeSelect } from "antd";

function DetailsAssetsment() {
  const [diamonds, setDiamonds] = useState([]);
  const { RangePicker } = DatePicker;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const handleDiamondsChange = (updatedDiamonds) => {
    setDiamonds(updatedDiamonds);
  };

  const handleSubmit = (values) => {
    const fullData = {
      ...values,
      diamonds: diamonds,
    };
    const jsonData = JSON.stringify(fullData);
    console.log(jsonData);
    // Gửi jsonData tới server hoặc xử lý theo nhu cầu của bạn
  };

  return (
    <>
      <Form
        {...formItemLayout}
        onFinish={handleSubmit}
        style={{ maxWidth: 600 }}
      >
        <div className="container-requestbooking">
          <h2>Mã Giao Dịch</h2>

          <Form.Item
            label="Tên Khách Hàng"
            name="name"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Điện Thoại"
            name="phonenumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Dịch Vụ"
            name="service"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Lượng(Viên)"
            name="amount"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Địa Chỉ Giao Dịch"
            name="address"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ngày Hẹn"
            name="date"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Thanh Toán"
            name="payment"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <TreeSelect />
          </Form.Item>

          <Form.Item
            label="Ngày Trả Dự Kiến"
            name="estimatedReturnDate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <RangePicker />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Tiếp Tục
            </Button>
          </Form.Item>
        </div>
      </Form>
      <DetailsAssetsment onDiamondsChange={handleDiamondsChange} />
    </>
  );
}

export default DetailsAssetsment;
