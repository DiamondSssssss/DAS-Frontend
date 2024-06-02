import * as React from "react";

function MyComponent() {
    return (
        <div className="flex flex-col text-white bg-white">
            <div className="flex gap-5 justify-between items-center py-9 pr-16 pl-3 w-full text-3xl bg-black max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
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
            <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-14 mt-16 w-full min-h-[806px] text-violet-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-center pt-3.5 pb-20 ml-8 max-w-full rounded-xl border border-black border-solid bg-amber-300 bg-opacity-50 w-[462px]">
                    <div className="text-3xl">Đặt hẹn</div>
                    <div className="text-xl font-semibold">CÁ NHÂN</div>
                    <div className="flex flex-col self-stretch px-8 mt-4 text-base text-red-600 max-md:px-5 max-md:max-w-full">
                        <div>
                            Tên khách hàng: <span className="text-red-600">*</span>
                        </div>
                        <div className="shrink-0 rounded-xl bg-zinc-300 h-[41px]" />
                        <div className="flex gap-5 mt-6">
                            <div className="flex flex-col flex-1">
                                <div>
                                    Số điện thoại: <span className="text-red-600">*</span>
                                </div>
                                <div className="shrink-0 rounded-xl bg-zinc-300 h-[41px]" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div>
                                    CCCD/CMT: <span className="text-red-600">*</span>
                                </div>
                                <div className="shrink-0 rounded-xl bg-zinc-300 h-[41px]" />
                            </div>
                        </div>
                        <div className="mt-3">
                            Địa chỉ: <span className="text-red-600">*</span>
                        </div>
                        <div className="shrink-0 rounded-xl bg-zinc-300 h-[41px]" />
                        <div className="mt-3.5 text-black">Chọn dịch vụ: </div>
                        <div className="shrink-0 mt-2 rounded-xl bg-zinc-300 h-[41px]" />
                        <div className="mt-4 text-black">Chọn loại dịch vụ</div>
                        <div className="shrink-0 mt-1.5 rounded-xl bg-zinc-300 h-[41px]" />
                        <div className="mt-8">
                            Số lượng(Viên): <span className="text-red-600">*</span>
                        </div>
                        <div className="shrink-0 rounded-xl bg-zinc-300 h-[41px]" />
                        <div className="justify-center items-center px-16 py-3 mt-11 text-xl text-black rounded-xl border border-solid bg-zinc-300 bg-opacity-0 border-violet-950 max-md:px-5 max-md:mt-10">
                            ĐẶT LỊCH
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-16 py-6 mt-96 w-full text-base bg-black max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 max-w-full aspect-[0.93] w-[134px]"
                />
                <div className="flex-auto self-start mt-2 max-md:max-w-full">
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

