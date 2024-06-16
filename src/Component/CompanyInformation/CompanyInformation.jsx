import React from "react";
import logo from "../../assets/logodas.png"; // Ensure the path to the logo is correct

const InfoPage = () => {
  return (
    <div className="bg-white text-gray-900 mt-10 w-full ">
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Giới thiệu</h2>
          <p className="text-lg text-yellow-500 mb-4">Mô Tả</p>
          <p className="text-lg">
            Công Ty Giám Định DAS đã và đang khẳng định uy tín của mình đối với
            khách hàng trong và ngoài nước và trở thành một trong những Công Ty
            Giám Định hàng đầu hiện nay. Cùng với nhu cầu sử dụng trang sức kim
            cương, đá quý, bán quý ngày càng tăng cao, thì việc có những giấy
            chứng nhận giám định chất lượng có uy tín càng được người tiêu dùng
            quan tâm hàng đầu.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Dịch vụ tại DAS
          </h2>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Service"
              className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Dịch vụ tại DAS</h3>
              <p className="text-lg mb-4">
                Công Ty Giám Định DAS đã và đang khẳng định uy tín của mình đối
                với khách hàng trong và ngoài nước và trở thành một trong những
                Công Ty Giám Định hàng đầu hiện nay. Cùng với nhu cầu sử dụng
                trang sức kim cương, đá quý, bán quý ngày càng tăng cao, thì
                việc có những giấy chứng nhận giám định chất lượng có uy tín
                càng được người tiêu dùng quan tâm hàng đầu.
              </p>
              <p className="text-gray-700">Giám Định, Tư Vấn Về Kim Cương.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InfoPage;
