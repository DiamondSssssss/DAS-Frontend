import * as React from "react";

function DiamondInformation() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="flex flex-col mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-zinc-300 h-64 w-full max-w-sm rounded-lg shadow-md"></div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold text-black">Tên Kim Cương</h2>
              <p className="text-lg text-yellow-600 mt-4">Mô Tả</p>
              <button className="mt-8 py-2 px-4 bg-amber-300 text-black font-semibold rounded-md shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2">
                Xem Chi Tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiamondInformation;
