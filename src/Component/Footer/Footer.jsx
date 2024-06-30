import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logodas.png"; // Ensure the path to the logo is correct

const Footer = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Kim Cương", route: "/diamonds" },
    { label: "Đặc Điểm Đá Quý", route: "/features" },
    { label: "Tra Cứu", route: "/lookup" },
    { label: "Liên Hệ", route: "/contact" },
  ];

  const address =
    "304-306 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.Hồ Chí Minh, Việt Nam";
  const email = "example@gmail.com";
  const phone = "0123456789";

  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 space-y-8 md:space-y-0 w-full">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={logo} alt="DAS Logo" className="h-20" />
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          {navigationItems.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer hover:text-gray-400"
              onClick={() => navigate(item.route)}
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left space-y-2 w-full md:w-auto">
          <p>Địa Chỉ: {address}</p>
          <p>Email: {email}</p>
          <p>SDT: {phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
