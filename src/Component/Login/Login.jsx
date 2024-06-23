// src/Component/Login/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { signInWithGoogle, signInWithPhoneNumber } from "../../utils/authUtils";
import "../Login/Login.css";
import illustration from "../../assets/loginbackground.png";

const GoogleLoginComponent = () => {
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState("google");

  const handleLoginSuccess = async (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
    navigate("/");
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed", error);
  };

  const loginWithGoogle = async () => {
    try {
      const userInfo = await signInWithGoogle();
      handleLoginSuccess(userInfo);
    } catch (error) {
      handleLoginFailure(error);
    }
  };

  const loginWithPhoneNumber = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await signInWithPhoneNumber(phoneNumber, password);
      handleLoginSuccess(userInfo);
    } catch (error) {
      handleLoginFailure(error);
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
          {user ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900">
                Welcome, {user.name}
              </h3>
              <Avatar
                src={user.picture}
                alt={user.name}
                className="w-20 h-20 mx-auto my-4"
              />
              <p className="text-xl text-gray-700">Email: {user.email}</p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex justify-around">
                <button
                  className={`${
                    loginMethod === "google"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } py-2 px-4 rounded w-full mx-2`}
                  onClick={() => setLoginMethod("google")}
                >
                  Đăng nhập Google
                </button>
                <button
                  className={`${
                    loginMethod === "phone"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } py-2 px-4 rounded w-full mx-2`}
                  onClick={() => setLoginMethod("phone")}
                >
                  Đăng nhập SĐT
                </button>
              </div>
              {loginMethod === "google" ? (
                <button
                  className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full text-xl"
                  onClick={loginWithGoogle}
                >
                  Dùng tài khoản Google
                </button>
              ) : (
                <form onSubmit={loginWithPhoneNumber} className="mb-4">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full text-xl mb-4"
                  >
                    Đăng nhập
                  </button>
                </form>
              )}
              <div className="text-center">
                <p className="text-gray-700">
                  Chưa có tài khoản?{" "}
                  <Link to="/register" className="text-blue-500 hover:underline">
                    Đăng ký
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleLoginComponent;
