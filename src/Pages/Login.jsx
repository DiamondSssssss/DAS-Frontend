import React, { useEffect, useState } from "react";
import { LayoutLogin } from "components/LayoutLogin";
import Logo from "../asset/logo.png";
import GGIcon from "../asset/gg-icon.png";
import { ButtonBlue } from "components/ButtonBlue";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { AuthService } from "services/AuthService";
import { setUser } from "redux/userSlice";
import { setLoading, setSnackbar } from "redux/appSlice";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  const responseMessage = async (response) => {
    const { credential } = response;
    setToken(credential);
  };

  const login = async (token) => {
    try {
      dispatch(setLoading(true));
      const userRes = await AuthService.login(token);
      dispatch(setUser(userRes));
      navigate(PATH.HOME, { replace: true });
    } catch (error) {
      alert(error);
    } finally {
      dispatch(
        setSnackbar({
          color: "green",
          message: "",
        })
      );
      dispatch(setLoading(false));
    }
  };

  const errorMessage = (error) => {
    alert(error);
  };

  useEffect(() => {
    if (token !== "") {
      login(token);
    }
  }, [token]);

  return (
    <LayoutLogin>
      <div className="border-[2px] rounded-[20px] shadow-2xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[55%] w-[35%] bg-bg_form1">
        <div className=" shadow-2xl z-10 absolute top-0 w-full flex flex-row h-[10%] items-center justify-between px-[100px]">
          <div
            onClick={handleRegisterClick}
            className={`cursor-pointer text-color_text_form BalooBhai2 flex flex-col items-center  ${
              isActive ? "text-blue_base" : ""
            }`}
          >
            Đăng ký
            <hr
              className={`  w-[100px] border-blue_base border-[2px] rounded-[2px] ${
                isActive ? "" : "hidden"
              } `}
            ></hr>
          </div>
          <div
            onClick={handleLoginClick}
            className={`cursor-pointer text-color_text_form BalooBhai2 ${
              !isActive ? "text-blue_base" : ""
            }`}
          >
            Đăng nhập
            <hr
              className={`  w-[100px] border-blue_base rounded-[2px] border-[2px] ${
                !isActive ? "" : "hidden"
              } `}
            ></hr>
          </div>
        </div>
        <div className=" shadow-2xl z-10 rounded-[20px] top-[10%] absolute bg-bg_form2 h-[90%] w-full flex flex-col items-center justify-center ">
          <img
            className=" mt-[10%] h-[30%] object-contain"
            src={Logo}
            alt="Logo"
          ></img>
          <p className={`mt-[5%] BalooBhai2 ${!isActive ? "" : "hidden"}`}>
            Chào mừng bạn quay trở lại !!!
          </p>
          <ButtonBlue className="py-4 px-1  cursor-pointer gap-3 mt-[10%] border-[1.5px] BalooBhai2 h-[13%] w-[60%]  rounded-[30px] shadow-md flex flex-row items-center justify-center">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </ButtonBlue>
          <hr className={`mt-5 w-[35%] bg-color_hr border-color_hr `}></hr>
        </div>

        <div className="drop-shadow-3xl z-0 2px absolute rounded-[20px] w-full h-full bg-[#F2F2F2] bg-opacity-[20%]"></div>
      </div>
    </LayoutLogin>
  );
};

export default Login;
