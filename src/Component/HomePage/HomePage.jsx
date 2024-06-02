import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col text-white bg-white">
      <div className="flex gap-5 justify-between items-center py-9 pr-16 pl-2.5 w-full text-3xl bg-black max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 self-stretch max-w-full aspect-[1.28] w-[130px]"
        />
        <div className="self-stretch my-auto">Về DAS</div>
        <div className="self-stretch my-auto">Kim Cương</div>
        <div className="self-stretch my-auto">Dịch Vụ Giám Định</div>
        <div className="self-stretch my-auto">Tra Cứu</div>
        <div className="justify-center self-stretch px-7 py-5 my-auto text-center text-sky-600 rounded-xl border-sky-500 border-solid bg-neutral-900 border-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
          Đặt Hẹn
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 self-stretch my-auto aspect-square w-[53px]"
        />
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-3.5 w-full aspect-[3.13] max-md:max-w-full"
      />
      <img
        loading="lazy"
        srcSet="..."
        className="self-center w-full aspect-[3.85] max-w-[1420px] mt-[463px] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex gap-5 px-16 pt-5 pb-2.5 w-full text-base bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 max-w-full aspect-[0.92] w-[134px]"
        />
        <div className="flex-auto my-auto max-md:max-w-full">
          Kim Cương Đặc Điểm Đá Quý Tra Cứu LIên Hệ
          <br />
          <br />
          Địa Chỉ: 304-306 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.Hồ Chí
          Minh, Việt Nam
          <br />
          <br />
          Gmail: <br />
          <br />
          Sđt: <br />
        </div>
      </div>
    </div>
  );
}

