import React from "react";
import defaultImg1 from "../asset/defaultImg1.png";

import ProfileImg from "../asset/ProfileImg.svg";

import { MenuButtonMore } from "./MenuButtonMore";
import { statusFormat } from "utils/dataFormat";
import { useLocation } from "react-router-dom";

const price = ( props ) => {
  return (
    <div className="flex flex-row justify-between">
      <div>{ props?.seller }</div>
      <div className="">{ props?.price } Xu</div>
    </div>
  );
};

export const Card = ( props ) => {
  const location = useLocation();
  console.log( location );
  console.log( props.status );
  //remove some button when props.type === 0
  let dataButton = props?.dataButton;
  if ( props.type === 0 ) {
    const buttonsToRemove = [
      "Xoá Bộ câu hỏi",
      "Đăng ký bán",
      "Chia sẻ cho người khác",
      "Đóng góp bộ câu hỏi",
    ];
    dataButton = dataButton.filter(
      ( button ) => !buttonsToRemove.includes( button.name )
    );
  }
  return (
    <div className="shadow-xl h-fit w-fit px-2 py-3 bg-white rounded-[10px] flex flex-col">
      <div className="w-full flex flex-row items-center justify-between">
        <span className="block truncate font-baloo2 font-medium w-[70%]">
          { `${ props?.name }`.length > 30
            ? `${ props?.name }`.slice( 30 ) + "..."
            : props?.name }
        </span>
        {/* <EllipsisVerticalIcon className="w-5 h-5"></EllipsisVerticalIcon> */ }
        <MenuButtonMore dataButton={ dataButton } />
      </div>

      <img
        className="rounded-[10px] object-contain "
        src={ props?.Image }
        alt=""
      />
      <div className="mt-2">
        { props?.seller ? price( props ) : <> </> }

        { props?.status ? (
          <>
          </>
        ) : (
          <div className="flex flex-row justify-between">
            <div className="text-red-500">
              { statusFormat( props?.status ) }
            </div>
          </div>
        ) }

        { props.sellPrice && props.status !== 0 && <div className="">Giá bán: { props.sellPrice } Xu</div> }


        { props?.type && location.pathname !== "/supermarketexamAll" ? (
          <></>
        ) : (
          <div className="text-gray-500 text-sm flex justify-end">
            { props?.type === 0 ? "Đã mua" : "" }
          </div>
        ) }

      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Bộ 10 câu hỏi hoá học hay nhất",
  Image: defaultImg1,
  ImageProfile: ProfileImg,
  Name: "Nguyễn Văn An",
  HandleTrueDelete: function () { },
};
