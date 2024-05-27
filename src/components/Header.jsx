import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import { setUser } from "redux/userSlice";
import { UserService } from "services/UserService";
import { fetchProfile } from "redux/meSlice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // @ts-ignore
  const { userInfo, token } = useSelector( ( state ) => state.user );
  // @ts-ignore
  const { entities } = useSelector( ( state ) => state.profile );
  const handleSignOutBtn = () => {
    dispatch(
      setUser( {
        userInfo: {
          userType: "",
          token: "",
        },
        token: null,
      } )
    );
    navigate( PATH.LOGIN );
  };
  const handleSignInBtn = () => {
    navigate( PATH.LOGIN );
  };

  useEffect( () => {
    dispatch( fetchProfile( { token: token } ) );
  }, [] );

  return (
    <header className="font-medium bg-white shadow-sm font-baloo2">
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full max-w-[1600px]">
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.jpg"
              className="object-contain h-full"
              alt="Logo"
            />
          </a>
          <div className="flex items-center lg:order-2 gap-8 pr-4">
            { userInfo ? (
              <>
                <div className="flex items-center gap-4">
                  { entities?.userType === 1 && (
                    <>
                      <span className="self-center text-[1rem] font-semibold whitespace-nowrap dark:text-white">
                        { `Xu: ${ entities.point }` }
                      </span>
                    </>
                  ) }

                  <img
                    className="object-contain h-full"
                    src="/images/avatar.jpg"
                    alt="avt"
                  />
                  <span className="self-center text-[1rem] font-semibold whitespace-nowrap dark:text-white">
                    { entities?.fullName }
                  </span>
                </div>
                <Button
                  className="hover:ring-2 hover:ring-blue_base "
                  onClick={ handleSignOutBtn }
                  rightIcon={
                    <img
                      className="h-[1rem]"
                      src="/icons/logout.svg"
                      alt="logout"
                    />
                  }
                >
                  Đăng xuất
                </Button>
              </>
            ) : (
              <Button
                className="!text-[1.1em]"
                onClick={ handleSignInBtn }
                rightIcon={
                  <img
                    className="h-[1.2rem]"
                    src="/icons/logout.svg"
                    alt="login"
                  />
                }
              >
                Sign In
              </Button>
            ) }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
