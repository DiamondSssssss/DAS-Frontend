import * as React from "react";

function MyComponent() {
    return (
        <div className="flex flex-col bg-white">
            <div className="flex gap-5 justify-between items-center py-9 pr-16 pl-3 w-full text-3xl text-white bg-black max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
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
            <div className="overflow-hidden relative flex-col justify-center items-start pt-40 pr-16 pb-20 pl-44 w-full text-5xl text-center text-white min-h-[300px] max-md:pt-10 max-md:pr-5 max-md:pl-8 max-md:max-w-full max-md:text-4xl">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                Về DAS
                <br />
            </div>
            <div className="flex flex-col self-start mt-28 ml-20 font-bold text-center max-md:mt-10 max-md:ml-2.5">
                <div className="text-5xl text-blue-800 max-md:text-4xl">Giới thiệu</div>
                <div className="mt-11 text-3xl text-yellow-300 max-md:mt-10">Mô Tả</div>
            </div>
            <div className="px-20 py-12 mt-16 w-full bg-amber-200 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start mt-1.5 font-bold text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">
                            <div className="ml-11 text-5xl text-center text-blue-800 max-md:ml-2.5 max-md:text-4xl">
                                Dịch vụ tại DAS
                            </div>
                            <div className="self-stretch mt-5 text-2xl max-md:max-w-full">
                                Công Ty Giám Định DAS đã và đang khẳng định uy tín của mình đối
                                với khách hàng trong và ngoài nước và trở thành một trong những
                                Công Ty Giám Định hàng đầu hiện nay. Cùng với nhu cầu sử dụng
                                trang sức kim cương, đá quý, bán quý ngày càng tăng cao, thì
                                việc có những giấy chứng nhận giám định chất lượng có uy tính
                                càng được người tiêu dùng quan tâm hàng đầu.
                            </div>
                            <div className="flex gap-3.5 mt-7 text-xl font-semibold">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="shrink-0 border border-blue-700 border-solid aspect-[1.15] w-[46px]"
                                />
                                <div className="flex-auto my-auto">
                                    Giám Định, Tư Vấn Về Kim Cương.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-16 pt-3.5 pb-7 w-full text-base text-white bg-black mt-[529px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 max-w-full aspect-[1.03] w-[134px]"
                />
                <div className="flex-auto max-md:max-w-full">
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


