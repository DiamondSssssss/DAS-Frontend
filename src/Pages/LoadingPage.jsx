import React from "react";
import {  Spinner } from "flowbite-react";

const LoadingPage = () => {
  return (
    <div className="fixed z-50  top-0 bottom-0 left-0 right-0 w-full h-screen overflow-hidden bg-gray-700 opacity-50 flex flex-col items-center justify-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default LoadingPage;
