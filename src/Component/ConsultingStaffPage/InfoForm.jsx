import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

function InfoForm() {
    const [carat, setCarat] = useState("");
    const [colorGrade, setColorGrade] = useState("");
    const [clarityGrade, setClarityGrade] = useState("");
    const [cutGrade, setCutGrade] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const { id, sampleId } = useParams();

    const { loai, trangThai, xuatXu } = location.state || {};

    const handleSubmit = () => {
        const reportData = {
            loai,
            trangThai,
            xuatXu,
            carat,
            colorGrade,
            clarityGrade,
            cutGrade,
        };

        navigate(`/assessmentstaff/assessmentbooking/${id}/${sampleId}/selection/info/cut`, { state: reportData });
    };

    return (
        <Form onFinish={handleSubmit} className="flex flex-col p-10 bg-gray-50">
            <Title level={2} className="mb-4">Điền Thông Tin</Title>
            <Form.Item
                label="Trọng Lượng Carat"
                name="carat"
                rules={[{ required: true, message: 'Vui lòng điền trọng lượng carat!' }]}
            >
                <Input
                    value={carat}
                    onChange={(e) => setCarat(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </Form.Item>
            <Form.Item
                label="Lớp Màu"
                name="colorGrade"
                rules={[{ required: true, message: 'Vui lòng điền lớp màu!' }]}
            >
                <Input
                    value={colorGrade}
                    onChange={(e) => setColorGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </Form.Item>
            <Form.Item
                label="Lớp Rõ Ràng"
                name="clarityGrade"
                rules={[{ required: true, message: 'Vui lòng điền lớp rõ ràng!' }]}
            >
                <Input
                    value={clarityGrade}
                    onChange={(e) => setClarityGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </Form.Item>
            <Form.Item
                label="Cắt Lớp"
                name="cutGrade"
                rules={[{ required: true, message: 'Vui lòng điền cắt lớp!' }]}
            >
                <Input
                    value={cutGrade}
                    onChange={(e) => setCutGrade(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="mt-4">
                    Tiếp theo
                </Button>
            </Form.Item>
        </Form>
    );
}

export default InfoForm;
