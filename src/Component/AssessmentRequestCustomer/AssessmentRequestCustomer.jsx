import { Button, Form, Input, InputNumber, Select } from "antd";
import { Option } from "antd/es/mentions";
import "./AssessmentRequestCustomer.css";

function AssessmentRequestCustomer() {
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
  return (
    <>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
          maxWidth: 600,
        }}
      ></Form>
      <div className="container-booking">
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
        >
          <h2> Đặt Hẹn </h2>
          <Form.Item
            label="Tên Khách Hàng"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Điện Thoại"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="CCCD"
            name="cccd"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Địa Chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Chọn Dịch Vụ"
            label="service"
            rules={[
              {
                required: true,
                message: "Please choose one!",
              },
            ]}
          >
            <Select placeholder="Chọn Dịch Vụ">
              <Option value="">Giám Định</Option>
              <Option value="">Giám Định</Option>
              <Option value="">Giám Định</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Số Lượng(Viên)"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <button type="submit" value="Submit">
              Đặt Lịch
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default AssessmentRequestCustomer;
