import React from 'react';
import './AssessmentRequestDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const AssessmentRequestDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [request, setRequest] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/assessmentrequests/${id}`);
        setRequest(response.data);
      } catch (error) {
        console.error("Error fetching the requests:", error);
      }
    };

    fetchData();
  }, [id]);

  const getServiceText = (service) => {
    switch (service) {
      case 1:
        return "Giám định kim cương";
      case 2:
        return "Niêm phong kim cương";
      case 3:
        return "Cấp lại giấy giám định";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className='text-2xl font-bold mb-4'>Chi tiết yêu cầu giám định</h2>
      <p className='text-xl mb-2'>Mã giao dịch: <span className='font-semibold'>#{request.requestId}</span></p>
      <p className='text-xl mb-2'>Tên khách hàng: <span className='font-semibold'>{request.name}</span></p>
      <p className='text-xl mb-2'>Số điện thoại: <span className='font-semibold'>{request.phone}</span></p>
      <p className='text-xl mb-2'>Dịch vụ: <span className='font-semibold'>{getServiceText(request.serviceId)}</span></p>
      <p className='text-xl mb-2'>Số lượng: <span className='font-semibold'>{request.numberOfSamples}</span></p>
      <p className='text-xl mb-2'>Ngày hẹn: <span className='font-semibold'>{request.dateCreated}</span></p>
      <p className='text-xl mb-4'>Địa chỉ giao dịch: <span className='text-sm font-semibold'>304-306 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.Hồ Chí Minh, Việt Nam</span></p>
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150'
              onClick={() => navigate(`/consultingstaff/assessmentrequest/${id}/createbooking`, {state: { numberOfSamples: request.numberOfSamples, requestId: request.requestId }})}>
        Đặt Hẹn
      </button>
    </div>
  );
}

export default AssessmentRequestDetail;
