import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectionForm() {
    const [loai, setLoai] = useState("");
    const [trangThai, setTrangThai] = useState("");
    const [xuatXu, setXuatXu] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loai && trangThai && xuatXu) {
            const selectedOptions = { loai, trangThai, xuatXu };
            navigate.to({
                pathname: "/info",
                state: selectedOptions,
            });
        } else {
            alert("Vui lòng chọn tất cả các thuộc tính.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-gray-50">
                <h1 className="text-2xl font-bold mb-4">Chọn Đặc Tính</h1>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Loại:</label>
                    <div className="flex gap-4">
                        <button type="button" className={`p-2 rounded-full ${loai === "Kim Cương" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setLoai("Kim Cương")}>Kim Cương</button>
                        <button type="button" className={`p-2 rounded-full ${loai === "Đá Giả Kim Cương" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setLoai("Đá Giả Kim Cương")}>Đá Giả Kim Cương</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Trạng Thái:</label>
                    <div className="flex gap-4">
                        <button type="button" className={`p-2 rounded-full ${trangThai === "Đã Xử Lý" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setTrangThai("Đã Xử Lý")}>Đã Xử Lý</button>
                        <button type="button" className={`p-2 rounded-full ${trangThai === "Chưa Xử Lý" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setTrangThai("Chưa Xử Lý")}>Chưa Xử Lý</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Xuất Xứ:</label>
                    <div className="flex gap-4">
                        <button type="button" className={`p-2 rounded-full ${xuatXu === "Tự Nhiên" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setXuatXu("Tự Nhiên")}>Tự Nhiên</button>
                        <button type="button" className={`p-2 rounded-full ${xuatXu === "Nhân Tạo" ? "bg-blue-600 text-white" : "bg-gray-300"}`} onClick={() => setXuatXu("Nhân Tạo")}>Nhân Tạo</button>
                    </div>
                </div>
                <button type="submit" className="p-3 bg-orange-500 text-white font-bold rounded-md mt-4">Tiếp theo</button>
            </form>
        </>
    );
}

export default SelectionForm;
