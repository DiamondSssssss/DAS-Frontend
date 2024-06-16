import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, InputNumber, TreeSelect } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import moment from 'moment';
import { handleSession } from "../../utils/sessionUtils";

const CreateAssessmentBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { numberOfSamples, requestId } = location.state || {};
  const [amount, setAmount] = useState(numberOfSamples || 0);
  const [form] = Form.useForm();
  const [loggedAccount, setLoggedAccount] = useState({});

  useEffect(() => {
    const account = handleSession(navigate);
    setLoggedAccount(account);
  }, []);

  const handleSubmit = (values) => {
    const fullData = {
      ...values,
      sampleReturnDate: values.sampleReturnDate.format('YYYY-MM-DDTHH:mm:ss'),
      requestId: requestId,
      dateCreated: moment().format('YYYY-MM-DDTHH:mm:ss'),
      paymentStatus: 0,
      status: 1,
      accountId: loggedAccount.accountId,
      quantity: amount,
    };
    navigate(`/consultingstaff/assessmentrequest/${id}/createbooking/inputdiamonds`, {
      state: { bookingData: fullData, numberOfSamples: amount },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const serviceOptions = [
    { title: "Giám định kim cương 24h", value: 1 },
    { title: "Giám định kim cương 48h", value: 2 },
  ];

  const paymentOptions = [
    { title: "Tiền mặt", value: 1 },
    { title: "Chuyển khoản", value: 2 },
  ];

  return (
    <Form
      {...formItemLayout}
      onFinish={handleSubmit}
      form={form}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <Form.Item
        label="Dịch Vụ"
        name="serviceId"
        rules={[{ required: true, message: "Vui lòng chọn dịch vụ!" }]}
      >
        <TreeSelect treeData={serviceOptions} placeholder="Xin hãy chọn dịch vụ" />
      </Form.Item>
      <Form.Item
        label="Số Lượng (Viên)"
        name="numberOfSamples"
        initialValue={amount}
        rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
      >
        <InputNumber min={1} max={100} style={{ width: "100%" }} onChange={setAmount} />
      </Form.Item>
      <Form.Item
        label="Ngày trả mẫu"
        name="sampleReturnDate"
        rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}
      >
        <DatePicker style={{ width: "100%" }} format="YYYY-MM-DDTHH:mm:ss" />
      </Form.Item>
      <Form.Item
        label="Thanh Toán"
        name="paymentType"
        rules={[{ required: true, message: "Vui lòng chọn phương thức thanh toán!" }]}
      >
        <TreeSelect treeData={paymentOptions} placeholder="Chọn phương thức thanh toán" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">Tiếp Tục</Button>
        <Button type="default" onClick={handleBack} className="ml-2">Quay Về</Button>
      </Form.Item>
    </Form>
  );
}

export default CreateAssessmentBooking;
