import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import diamondIcon from '../../assets/logodas.png';
import signInWithGoogle from '../../utils/authUtils';
import './Login.scss';

const GoogleLoginComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = async (userInfo) => {
    setUser(userInfo);
    navigate('/');
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed', error);
  };

  const login = async () => {
    try {
      const userInfo = await signInWithGoogle();
      handleLoginSuccess(userInfo);
    } catch (error) {
      handleLoginFailure(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Avatar className="avatar" sx={{ width: 100, height: 100 }}>
            <img src={diamondIcon} alt="Diamond Icon" style={{ width: '100%', height: '100%' }} />
          </Avatar>
          <h1>DAS</h1>
          <h2>We Valued Your Diamond!</h2>
        </div>
        {user ? (
          <div className="user-info">
            <h3>Welcome, {user.name}</h3>
            <Avatar src={user.picture} alt={user.name} sx={{ width: 56, height: 56, margin: 'auto' }} />
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <button className="login-button" onClick={login}>
            Dùng tài khoản Google
          </button>
        )}
      </div>
    </div>
  );
};

export default GoogleLoginComponent;
