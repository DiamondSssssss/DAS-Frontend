import React, { useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, TreeSelect } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import moment from 'moment';
  function Receipt() {
    const [diamonds, setDiamonds] = useState([]);
    const { RangePicker } = DatePicker;
    const location = useLocation();
    const navigate = useNavigate();
    const { numberOfSamples, requestId } = location.state || {};
    const [amount, setAmount] = useState(numberOfSamples || 0);
    const [form] = Form.useForm();
    const { id } = useParams();
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

    const handleSubmit = (values) => {
      const fullData = {
        ...values,
        sampleReturnDate: values.sampleReturnDate.format('YYYY-MM-DDTHH:mm:ss'),
        requestId: requestId,
        dateCreated: moment().format('YYYY-MM-DDTHH:mm:ss'),
        paymentStatus: 0,
        status: 1,
        accountId: 1,
        quantity: amount,
      };
      console.log(fullData);
      navigate(`/consultingstaff/assessmentrequest/${id}/createbooking/inputdiamonds`, {
        state: { bookingData: fullData, numberOfSamples: amount },
      });
    };
    const handleBack = () => {
      history.goBack();
    };

    const serviceOptions = [
      {
        title: "Giám định kim cương 24h",
        value: 1,
      },
      {
        title: "Giám định kim cương 48h",
        value: 2,
      },
    ];

    const paymentOptions = [
      {
        title: "Tiền mặt",
        value: 1,
      },
      {
        title: "Chuyển khoản",
        value: 2,
      },
    ];
    return (
      <>
        <Form {...formItemLayout} onFinish={handleSubmit} form={form} style={{ maxWidth: 600 }}>
          <div className="container-requestbooking">
            <Form.Item
              label="Dịch Vụ"
              name="serviceId"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <TreeSelect treeData={serviceOptions} placeholder="Xin hãy chọn dịch vụ" />
            </Form.Item>
            <Form.Item
              label="Số Lượng(Viên)"
              name="numberOfSamples"
              initialValue={amount}
              rules={[{ required: true, message: "Please input!" }]}
            >
              <InputNumber style={{ width: "100%" }} onChange={(value) => setAmount(value)} />
            </Form.Item>
            <Form.Item
              label="Ngày trả mẫu"
              name="sampleReturnDate"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <DatePicker style={{ width: "100%" }} format="YYYY-MM-DDTHH:mm:ss" />
            </Form.Item>
            <Form.Item
              label="Thanh Toán"
              name="paymentType"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <TreeSelect treeData={paymentOptions} placeholder="Chọn phương thức thanh toán" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Tiếp Tục
              </Button>
              <Button
                type="default"
                onClick={handleBack}
                style={{ marginLeft: 8 }}
              >
                Quay Về
              </Button>
            </Form.Item>
          </div>
        </Form>
      </>
    );
  }

  export default Receipt;
