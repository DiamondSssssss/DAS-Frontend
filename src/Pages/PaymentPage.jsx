import { Card, CardContent, CardActions } from "@mui/material";
import { auth } from "apis";
import axios from "axios";
import CustomModal from "components/CustomModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProfile } from "redux/meSlice";

const pointPack = [
  {
    id: 1,
    name: "GÓI THƯỜNG",
    point: 100,
    price: 10000,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
        color="green"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "TIẾT KIỆM",
    point: 500,
    price: 45000,
    saving: "5.000",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
        color="green"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "SIÊU TIẾT KIỆM",
    point: 1000,
    price: 85000,
    saving: "15.000",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
        color="green"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

const PaymentPage = () => {
  function formatNumber(number) {
    return number.toLocaleString("de-DE", { minimumFractionDigits: 0 });
  }
  const [openSuccess, setOpenSuccess] = useState(false);
  const [paymentResponseMessage, setPaymentResponseMessage] = useState("");
  // @ts-ignore
  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  // @ts-ignore
  const { entities } = useSelector((state) => state.profile);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = [];

  useEffect(() => {
    console.log("searchParams", searchParams);
    if (searchParams.has("partnerCode")) {
      searchParams.forEach((value, key) => {
        params.push({ key, value });
      });
      console.log("fddd", params);
      const message = params.filter((param) => param.key == "message");
      console.log("fddd", message[0].value);
      setPaymentResponseMessage(message[0].value);
      // @ts-ignore
      dispatch(fetchProfile({ token: token }));
      setOpenSuccess(true);
    }
  }, []);

  const handleBuy = async (itemPrice) => {
    console.log("Price: ", itemPrice);
    try {
      const headers = auth(token);
      const res = await axios.get(
        `https://sealbean.ddns.net/backend/api/v0/transactions/buy-point?PointValue=${itemPrice}`,
        { headers: headers }
      );
      if (res) {
        console.log("Success", res);
        window.location.href = res.data;
      }
    } catch (error) {
      console.log("Bug at buy", error);
    }
  };
  return (
    <>
      <div
        className="h-full w-full flex flex-col justify-center items-center gap-4 relative py-[5%] px-[10%] rounded-lg shadow-card"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,117,167,1) 20%, rgba(255,255,255,1) 60%)",
        }}
      >
        <div className="controllers top-[12px] right-[12px] flex gap-2 items-center">
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-6 mb-6 text-white">
              {/* <img alt="Avatar" src={ProfileImg} /> */}
              {/* <div className="p-2 border-8 border-yellow-400 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2023/06/27/03/15/ai-generated-8091289_640.jpg"
                  alt=""
                  className="w-[150px] h-[150px] rounded-full"
                />
              </div> */}

              <p className="text-3xl font-medium">
                <b className="flex items-end gap-2">
                  Xu của bạn:
                  <h2 className=" font-bold" style={{ fontSize: "35px" }}>
                    {entities.point}
                  </h2>
                </b>
                <br />
                Bạn có thể dùng XU để mua câu hỏi, tạo đề thi và quét phiếu trả
                lời.
                <p>
                  Ngoài ra bạn có thể kiếm XU bằng cách đóng góp câu hỏi miễn
                  phí cho cộng đồng hoặc bán các câu hỏi của bản thân !
                </p>
              </p>
              {/* <Button className="text-white bg-blue-500">Mua điểm</Button> */}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {pointPack.length > 0 ? (
                pointPack.map((item, index) => (
                  <Card
                    // style={{ height: "300px" }}
                    className="p-4 bg-white rounded-lg shadow-md overflow-auto"
                    key={index + item.id}
                  >
                    {/* <CardHeader>cai deo gi z</CardHeader> */}
                    <CardContent className="text-center h-[87%]">
                      <h1 className="text-center text-[#707070] font-bold text-2xl">
                        {item.name}
                      </h1>
                      <h1 className="text-5xl text-center text-[#003957] my-5">
                        {" "}
                        <span className="font-extrabold text-5xl">
                          {item.point}
                        </span>{" "}
                        XU
                      </h1>
                      <ul className="pl-5 mb-4 list-none ">
                        {item.price >= 45.0 ? (
                          <li className="flex items-center gap-2 ">
                            {item.icon} Chỉ với
                            <span className="font-semibold text-[#00C886]">
                              {formatNumber(item.price)}VND
                            </span>
                          </li>
                        ) : (
                          <li className="flex items-center gap-2">
                            {item.icon} Chỉ với {formatNumber(item.price)}VND
                          </li>
                        )}

                        {item.saving ? (
                          <li className="flex items-center gap-2">
                            {item.icon}{" "}
                            <span>
                              Tiết kiệm{" "}
                              <span className="font-bold text-gray-600">
                                {formatNumber(item.saving)}VNĐ
                              </span>
                            </span>
                          </li>
                        ) : (
                          ""
                        )}

                        <li className="flex items-center gap-2">
                          {item.icon} Mua được mọi loại bộ câu hỏi
                        </li>
                      </ul>
                    </CardContent>
                    <CardActions className="w-full flex items-center justify-center">
                      <button
                        onClick={() => handleBuy(item.price)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      >
                        <span className="text-xl font-bold">Mua Xu</span>
                      </button>
                    </CardActions>
                  </Card>
                ))
              ) : (
                <div>Thêm gói vào</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openSuccess &&
      paymentResponseMessage != "Transaction denied by user." ? (
        <>
          <CustomModal
            header="Thanh toán thành công"
            children={
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-green-600">
                  Xu đã được cộng vào tài khoản
                </h1>
                <p className="text-lg font-medium text-gray-600">
                  Cảm ơn quý thầy cô đã sử dụng dịch vụ
                </p>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setOpenSuccess(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            }
            open={openSuccess}
            onClose={() => setOpenSuccess(false)}
          />
        </>
      ) : (
        <>
          <CustomModal
            header="Lỗi"
            children={
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-red-600">
                  Xu chưa được cộng vào tài khoản
                </h1>
                <p className="text-lg font-medium text-gray-600">
                  Thanh toán thất bại
                </p>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setOpenSuccess(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            }
            open={openSuccess}
            onClose={() => setOpenSuccess(false)}
          />
        </>
      )}
    </>
  );
};

export default PaymentPage;
