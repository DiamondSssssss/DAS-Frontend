import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logodas.png'; // Đường dẫn đến logo
import { AccountCircle } from '@mui/icons-material'; // Import icon người dùng từ Material-UI
// import './Header.scss';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img className='logoimg' src={logo} alt="DAS Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li onClick={() => navigate('/about')}>Về DAS</li>
          <li onClick={() => navigate('/diamonds')}>Kim Cương</li>
          <li onClick={() => navigate('/services')}>Dịch Vụ Giám Định</li>
          <li onClick={() => navigate('/lookup')}>Tra Cứu</li>
        </ul>
      </nav>
      <div className="actions">
        <button onClick={() => navigate('/makerequest')} className="appointment-btn">Đặt Hẹn</button>
        <div className="user-icon" onClick={() => navigate('/login')}>
          <AccountCircle style={{ color: 'white', fontSize: 30 }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
