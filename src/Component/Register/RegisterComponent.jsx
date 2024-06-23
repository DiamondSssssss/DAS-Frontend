// src/components/RegisterComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import illustration from "../../assets/loginbackground.png";

const RegisterComponent = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userInfo = {
      emailOrPhone,
      fullName,
      password,
    };

    // Gửi userInfo đến backend để đăng ký
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full overflow-hidden">
        <div className="hidden md:flex w-1/2 bg-blue-800 items-center justify-center">
          <img
            src={illustration}
            alt="Illustration"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-12">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-4xl font-bold mt-4 text-gray-900">DAS</h1>
            <h2 className="text-xl text-gray-800 mt-2">
              We Valued Your Diamond!
            </h2>
          </div>
          <form onSubmit={handleRegister} className="w-full">
            <input
              type="text"
              placeholder="Email hoặc Số điện thoại"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
              required
            />
            <input
              type="text"
              placeholder="Họ và Tên"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full text-xl"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
