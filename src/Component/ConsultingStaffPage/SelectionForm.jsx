import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Radio, Button, Form, Typography } from 'antd';

const { Title } = Typography;

function SelectionForm() {
    const [loai, setLoai] = useState("");
    const [trangThai, setTrangThai] = useState("");
    const [xuatXu, setXuatXu] = useState("");
    const navigate = useNavigate();
    const { id, sampleId } = useParams();

    const handleLoaiChange = (e) => {
        const value = e.target.value;
        setLoai(value);
        if (value === "Đá Giả Kim Cương") {
            setTrangThai(""); // Reset trạng thái
            setXuatXu(""); // Reset xuất xứ
        }
    };

    const handleSubmit = () => {
        if (loai && (loai === "Đá Giả Kim Cương" || (trangThai && xuatXu))) {
            const selectedOptions = { loai, trangThai, xuatXu };
            navigate(`/assessmentstaff/assessmentbooking/${id}/${sampleId}/selection/info`, { state: selectedOptions });
        } else {
            alert("Vui lòng chọn tất cả các thuộc tính.");
        }
    };

    return (
        <Form onFinish={handleSubmit} className="flex flex-col p-10 bg-gray-50">
            <Title level={2} className="mb-4">Chọn Đặc Tính</Title>
            <Form.Item label="Loại:" className="mb-4">
                <Radio.Group onChange={handleLoaiChange} value={loai}>
                    <Radio.Button value="Kim Cương">Kim Cương</Radio.Button>
                    <Radio.Button value="Đá Giả Kim Cương">Đá Giả Kim Cương</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Trạng Thái:" className="mb-4">
                <Radio.Group 
                    onChange={(e) => setTrangThai(e.target.value)} 
                    value={trangThai} 
                    disabled={loai === "Đá Giả Kim Cương"}
                >
                    <Radio.Button value="Đã Xử Lý">Đã Xử Lý</Radio.Button>
                    <Radio.Button value="Chưa Xử Lý">Chưa Xử Lý</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Xuất Xứ:" className="mb-4">
                <Radio.Group 
                    onChange={(e) => setXuatXu(e.target.value)} 
                    value={xuatXu} 
                    disabled={loai === "Đá Giả Kim Cương"}
                >
                    <Radio.Button value="Tự Nhiên">Tự Nhiên</Radio.Button>
                    <Radio.Button value="Nhân Tạo">Nhân Tạo</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Button type="primary" htmlType="submit" className="mt-4">
                Tiếp theo
            </Button>
        </Form>
    );
}

export default SelectionForm;
