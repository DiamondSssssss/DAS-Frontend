import React from 'react'
import './AssessmentRequestDetail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
const AssessmentRequestDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [request, setRequest] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/assessmentrequests/${id}`);
                setRequest(response.data);
            } catch (error) {
                console.error("Error fetching the requests:", error);
            }
        };

        fetchData();
    }, []);
    const getServiceText = (service) => {
        switch (service) {
            case 1:
                return "Giám định kim cương";
            case 2:
                return "Niêm phong kim cương";
            case 3:
                return "Cấp lại giấy giám định";
            default:
                return "Không xác định";
        }
    };
    return (

        <div>
            <p className='text-1xl'>Mã giao dịch: #{request.requestId}</p>
            <p className='text-1xl'>Tên khách hàng: {request.name}</p>
            <p className='text-1xl'>Số điện thoại: {request.phone} </p>
            <p className='text-1xl'>Dịch vụ: {getServiceText(request.serviceId)} </p>
            <p className='text-1xl'>Số lượng: {request.numberOfSamples}</p>
            <p className='text-1xl'>Ngày hẹn: {request.dateCreated}</p>
            <p className='text-1xl'>Địa chỉ giao dịch: <span className='text-sm'>304-306 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.Hồ Chí Minh, Việt Nam</span></p>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => navigate(`/assessmentrequests/${id}/update`)}>Đặt Hẹn</button>
        </div>
    )
}

export default AssessmentRequestDetail