// src/components/Footer/Footer.js
import React from 'react';
// import './Footer.scss';
import logo from '../../assets/logodas.png'; // Đảm bảo đường dẫn tới logo là đúng
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <div className="footer-logo">
          <img src={logo} alt="DAS Logo" />
        </div>
      </div>
      <div className="footer-section footer-links">
        <p href="/diamonds">Kim Cương</p>
        <p href="/features">Đặc Điểm Đá Quý</p>
        <p href="/lookup">Tra Cứu</p>
        <p href="/contact">Liên Hệ</p>
      </div>
      <div className="footer-section footer-contact">
        <p>Địa Chỉ: 304-306 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.Hồ Chí Minh, Việt Nam</p>
        <p>Email: example@gmail.com</p>
        <p>SDT: 0123456789</p>
      </div>
    </footer>
  );
};

export default Footer;
