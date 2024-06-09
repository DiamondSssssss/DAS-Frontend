import React from 'react';
// import './SuccessPage.scss';
import './SuccessPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
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
    <div className="success-page">
      <div className="success-message">
        <div className="checkmark">
          <svg viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="none" />
            <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h1>ĐẶT HẸN THÀNH CÔNG</h1>
        <p>Chúc mừng bạn đã đặt hẹn thành công, thông tin lịch hẹn</p>
        <div className="transaction-code">
          <h2>Mã giao dịch: #{data.requestId}</h2>
          <div className="appointment-details">
            <p>Tên khách hàng: {data.name}</p>
            <p>Số điện thoại: {data.phone}</p>
            <p>Dịch vụ: {getServiceText(data.serviceId)}</p>
            <p>Số lượng(Viên): {data.numberOfSamples}</p>
            <p>Ngày hẹn: {data.date}</p>
            <p>Địa chỉ giao dịch: {data.address}</p>
          </div>
          <button onClick={navigate('/')}>TẢI VỀ</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
