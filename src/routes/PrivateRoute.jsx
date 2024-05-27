import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATH } from "./constants";

const isLogin = ( state ) => {
  if ( state?.userInfo?.userType === "" && state?.userInfo?.token === "" )
    return false;

  return true;
};

const PrivateRoute = ( { element } ) => {
  // @ts-ignore
  const state = useSelector( ( state ) => state.user );
  const navigate = useNavigate();

  useEffect( () => {
    if ( !isLogin( state ) ) {
      console.log( "unlogin", state );
      navigate( PATH.LOGIN );
    }
  }, [ state ] );

  return <>{ element }</>;
};

export default PrivateRoute;
