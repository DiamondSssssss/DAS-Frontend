import Button from "components/Button";
import CustomInput from "components/CustomInput";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSnackbar, updateBreadCrumb } from "redux/appSlice";
import { ExamService } from "services/ExamService";
// const data = [
//   {
//     name: "File đề thi : Bài Test 1 (tất cả các đề và mã đề)",
//     file: "Bai-Test-1-de-thi-chi-tiet-2024.pdf",
//   },
//   {
//     name: "File đề thi : Bài Test 1 (tất cả các đề và mã đề)",
//     file: "Bai-Test-1-de-thi-chi-tiet-2024.pdf",
//   },
//   {
//     name: "File đề thi : Bài Test 1 (tất cả các đề và mã đề)",
//     file: "Bai-Test-1-de-thi-chi-tiet-2024.pdf",
//   },
//   {
//     name: "File đề thi : Bài Test 1 (tất cả các đề và mã đề)",
//     file: "Bai-Test-1-de-thi-chi-tiet-2024.pdf",
//   },
// ];
const DownloadPage = () => {
  const location = useLocation();

  // @ts-ignore
  const { token } = useSelector( ( state ) => state.user );

  const [ examId, setExamId ] = useState( "60fe9474-b7df-ee11-90eb-90610ca5f0a3" );
  const [ data, setData ] = useState();

  const dispatch = useDispatch();

  // // Lấy tên trang
  // let root = "/" + location.pathname.split("/")[1];
  // //Cập nhật Header, ví dụ line dưới tên trang -> thay string thành thông tin nhận được từ data (res) trả về
  // dispatch(updateBreadCrumb([root,"Bài Test 1", "Lớp 10A1","Môn Sinh Học"]));

  const fetchResource = async ( examId ) => {
    try {
      dispatch( setLoading( true ) );
      const res = await ExamService.getResourceByExamId( examId, token );
      if ( res ) {
        setData( res );
        console.log( "Dsdssd", res );
      }
    } catch ( error ) {
      dispatch(
        setSnackbar( {
          color: "red",
          message: error,
        } )
      );
    } finally {
      dispatch( setLoading( false ) );
    }
  };

  useEffect( () => {
    console.log( location );
    if ( location.state ) {
      console.log( "fetch Resource", location.state.examId );
      fetchResource( location.state.examId || "" );
    }
    // console.log("data", data.fileTotalAnswer.name);
  }, [ location ] );
  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 ">
      <div className="flex-1 overflow-auto hide-scrollbar">
        <div className="w-[75%] h-full m-auto flex flex-col gap-4">
          <div className=" rounded-xl bg-white shadow-sm px-20 py-6 text-blue_dark ">
            <p className="font-bold uppercase mb-4">
              {
                // @ts-ignore
                data?.examName
              }
            </p>
            {/* <Button>
              {" "}
              <img
                className="w-[20px] h-[20x]"
                src="/images/print.png"
                alt="printIcon"
              />{" "}
              IN ĐỀ - Có phiếu trả lời riêng
            </Button> */}
          </div>
          <div className="flex-1 w-full flex flex-col gap-4 rounded-xl bg-white shadow-sm px-20 py-6 text-blue_dark ">
            {
              // @ts-ignore
              data?.paperOfExams?.map( ( item, index ) => (
                <div className="flex gap-2 items-end w-full relative">
                  <CustomInput
                    className="flex-1"
                    key={ index }
                    // @ts-ignore
                    value={ data?.examName + " - Mã đề " + ( index + 1 ) }
                    disabled
                    name={ "exam" }
                    iconEnum={ 1 }
                    // @ts-ignore
                    label={ data?.examName + " - Mã đề " + ( index + 1 ) }
                  />
                  <Button className="absolute !rounded-r-0 !rounded-r-xl right-0 !py-1 !h-[58%] cursor-pointer !font-bold !bg-blue_base !text-white">
                    <a href={ item.s3Url } download>
                      Tải về
                    </a>
                  </Button>
                </div>
              ) )
            }
            {
              // @ts-ignore
              data?.anserSheets?.map( ( item, index ) => (
                <div className="flex gap-2 items-end w-full relative">
                  <CustomInput
                    className="flex-1"
                    key={ index }
                    // @ts-ignore
                    value={ item?.name }
                    disabled
                    name={ "exam" }
                    iconEnum={ 2 }
                    // @ts-ignore
                    label={ item?.name }
                  />
                  <Button className="absolute !rounded-r-0 !rounded-r-xl right-0 !py-1 !h-[58%] cursor-pointer !font-bold !bg-blue_base !text-white">
                    <a href={ item.s3Url } target="_blank" rel="noreferrer" download>
                      Tải về
                    </a>
                  </Button>
                </div>
              ) )
            }
            {
              // @ts-ignore
              data?.fileTotalAnswer && (
                <div className="flex gap-2 items-end w-full relative">
                  <CustomInput
                    className="flex-1"
                    // key={index}
                    // @ts-ignore
                    value={ data?.fileTotalAnswer?.name }
                    disabled
                    name={ "exam" }
                    iconEnum={ 3 }
                    // @ts-ignore
                    label={ data?.fileTotalAnswer?.name }
                  />
                  <Button className="absolute !rounded-r-0 !rounded-r-xl right-0 !py-1 !h-[58%] cursor-pointer !font-bold !bg-blue_base !text-white">
                    <a href={ data?.fileTotalAnswer?.s3Url } download>
                      Tải về
                    </a>
                  </Button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
