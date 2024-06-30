import React, { useState, useEffect } from 'react';
import './CommitmentPaper.css';

export const CommitmentPaperPage = () => {
    const [formData, setFormData] = useState({
        creationDate: '',
        userName: 'Nguyễn Văn A',
        orderId: 'DH001',
        title: '',
        description: ''
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData(prevData => ({ ...prevData, creationDate: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Report Submitted', formData);
        // Here you can add the logic to save the report, e.g., sending it to a server
    };

    return (
        <div className="paper-container">
            <div className="header">
                <div className="left">
                    <p>CƠ QUAN, ĐƠN VỊ....</p>
                    <p>Số: ....................</p>
                </div>
                <div className="right">
                    <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                    <p><strong>Độc lập - Tự do - Hạnh phúc</strong></p>
                    <p>{`${new Date().toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    })}`}</p>
                </div>
            </div>
            <div className="title-section">
                <h2>BIÊN BẢN GIÁM ĐỊNH</h2>
                <p>Về việc: {formData.title}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <p>Hôm nay, vào ngày {formData.creationDate.split('-')[2]} tháng {formData.creationDate.split('-')[1]} năm {formData.creationDate.split('-')[0]}</p>
                    <p>Tại: ...................................................</p>
                    <p>Mô tả: {formData.description}</p>
                    <p>Đơn hàng: ..........</p>
                </div>
                <div className="field">
                    <p>Người dùng: Ông/Bà {formData.userName}</p>
                </div>
                <div className="field">
                    <label className="label">Mô tả:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="textarea"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="button">Tạo biên bản</button>
            </form>
        </div>
    );
};

export default CommitmentPaperPage;
