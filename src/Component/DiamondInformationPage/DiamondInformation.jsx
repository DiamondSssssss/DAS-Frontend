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
            <div className="overflow-hidden relative flex-col justify-center items-start pt-40 pr-16 pb-20 pl-72 w-full text-4xl text-center text-white min-h-[300px] max-md:pt-10 max-md:pr-5 max-md:pl-8 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                Kim Cương
            </div>
            <div className="flex flex-col mt-28 ml-56 max-w-full w-[665px] max-md:mt-10">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                            <div className="shrink-0 mx-auto max-w-full bg-zinc-300 h-[300px] w-[400px] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-3xl font-bold text-center max-md:mt-10">
                                <div className="text-black">Tên Kim Cương</div>
                                <div className="flex flex-col px-5 mt-12 max-md:mt-10">
                                    <div className="text-yellow-300">Mô Tả</div>
                                    <div className="mt-16 text-amber-300 max-md:mt-10">
                                        Xem Chi Tiết
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                            <div className="shrink-0 mx-auto max-w-full bg-zinc-300 h-[300px] w-[400px] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-3xl font-bold text-center max-md:mt-10">
                                <div className="text-black">Tên Kim Cương</div>
                                <div className="flex flex-col px-5 mt-12 max-md:mt-10">
                                    <div className="text-yellow-300">Mô Tả</div>
                                    <div className="mt-16 text-amber-300 max-md:mt-10">
                                        Xem Chi Tiết
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                            <div className="shrink-0 mx-auto max-w-full bg-zinc-300 h-[300px] w-[400px] max-md:mt-7" />
                        </div>
                        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-3xl font-bold text-center max-md:mt-10">
                                <div className="text-black">Tên Kim Cương</div>
                                <div className="flex flex-col px-5 mt-12 max-md:mt-10">
                                    <div className="text-yellow-300">Mô Tả</div>
                                    <div className="mt-16 text-amber-300 max-md:mt-10">
                                        Xem Chi Tiết
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-16 pt-3.5 pb-7 mt-24 w-full text-base text-white bg-black max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
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


