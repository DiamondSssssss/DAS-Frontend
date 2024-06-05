import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './AssessmentBookingDiamondInput.css';
import axios from 'axios';

const AssessmentBookingDiamondInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingData, numberOfSamples } = location.state || {};
  const [form] = Form.useForm();

  const [diamondPrices, setDiamondPrices] = useState([]);
  const [service, setService] = useState({});

  useEffect(() => {
    const fetchDiamondPrices = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/servicepricelists");
        setDiamondPrices(response.data);
      } catch (error) {
        console.error("Error fetching the prices:", error);
      }
    };

    const fetchServicePrice = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/services/${bookingData.serviceId}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching the service prices:", error);
      }
    };

    fetchDiamondPrices();
    fetchServicePrice();
  }, [bookingData.serviceId]);

  const calculatePrice = (size) => {
    const { servicePrice } = service;
    const priceData = diamondPrices.find(price => size >= price.sizeFrom && size <= price.sizeTo);

    if (priceData) {
      const { initPrice, sizeFrom, priceUnit } = priceData;
      const price = servicePrice + initPrice + (size - sizeFrom) * priceUnit;
      return Math.round(price); // Làm tròn giá trị thành số nguyên
    }

    return 'N/A';
  };

  const handleSubmit = async (values) => {
    const samples = [];
    let totalPrice = 0;
    for (let i = 0; i < numberOfSamples; i++) {
      const samplePrice = Math.round(parseFloat(values[`diamond${i + 1}Price`])); // Làm tròn giá trị thành số nguyên
      samples.push({
        name: values[`diamond${i + 1}Name`],
        size: parseFloat(values[`diamond${i + 1}Size`]),
        price: samplePrice,
        isDiamond: 1,
        status: 1,
      });
      totalPrice += samplePrice;
    }

    const bookingPayload = {
      ...bookingData,
      bookingSamples: samples,
      totalPrice: totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/assessmentbookings', bookingPayload);
      console.log(response.data);
      navigate('/'); // Chuyển hướng đến trang thành công
    } catch (error) {
      console.error('Error creating assessment booking:', error);
    }
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
            rules={[{ required: true, message: 'Nhập tên mẫu!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Size"
            name={`diamond${i + 1}Size`}
            rules={[{ required: true, message: 'Nhập kích cỡ!' }]}
          >
            <Input onChange={(e) => {
              const size = parseFloat(e.target.value);
              const price = calculatePrice(size);
              form.setFieldsValue({ [`diamond${i + 1}Price`]: price });
            }} />
          </Form.Item>
          <Form.Item
            label="Estimated Price"
            name={`diamond${i + 1}Price`}
          >
            <Input disabled />
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