import React from "react";
import "./style.css";

export const EvaluateService = () => {
    return (
        <div className="evaluate-service">
            <div className="section">
                <p className="header">CÁC DỊCH VỤ GIÁM ĐỊNH KIM CƯƠNG HIỆN CÓ TẠI PNJLAB</p>
                <div className="table-container">
                    <table className="service-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>LOẠI DỊCH VỤ</th>
                                <th>NỘI DUNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Giám định thường</td>
                                <td>
                                    <ul>
                                        <li>Thời gian gửi thực hiện giám định tùy theo từng thời điểm gửi.</li>
                                        <li>Số lượng không hạn chế. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Giám định nhanh 3h</td>
                                <td>
                                    <ul>
                                        <li>Thời gian thực hiện giám định trong 3 giờ làm việc tính từ lúc nhận sản phẩm vào</li>
                                        <li>Số lượng gửi tùy từng thời điểm. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Giám định nhanh 48h</td>
                                <td>
                                    <ul>
                                        <li>Thời gian thực hiện giám định trong 48 giờ làm việc tính từ lúc nhận sản phẩm vào.</li>
                                        <li>Số lượng gửi tùy từng thời điểm. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Niêm phong thường (Seal lại)</td>
                                <td>
                                    <ul>
                                        <li>Thời gian gửi thực hiện giám định tùy theo từng thời điểm gửi.</li>
                                        <li>Số lượng không hạn chế. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Niêm phong (Seal lại nhanh 3h)</td>
                                <td>
                                    <ul>
                                        <li>Thời gian thực hiện giám định trong 3 giờ làm việc tính từ lúc nhận sản phẩm vào.</li>
                                        <li>Số lượng gửi tùy từng thời điểm. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Niêm phong (Seal lại nhanh 48h)</td>
                                <td>
                                    <ul>
                                        <li>Thời gian thực hiện giám định trong 48 giờ làm việc tính từ lúc nhận sản phẩm vào.</li>
                                        <li>Số lượng gửi tùy từng thời điểm. Bảng giá dịch vụ theo qui định.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Cấp lại giấy giám định</td>
                                <td>
                                    <ul>
                                        <li>Thực hiện cấp lại giấy giám định theo yêu cầu khách hàng.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Khắc mã số cạnh</td>
                                <td>
                                    <ul>
                                        <li>Thực hiện khắc mã số cạnh trên viên đá theo yêu cầu.</li>
                                        <li>Chỉ thực hiện khắc những viên đá có kích thước (size) trên 4.00mm.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="section">
                <p className="header">TIÊU CHUẨN GIÁM ĐỊNH KIM CƯƠNG PNJLAB</p>
                <div className="table-container">
                    <table className="service-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>TIÊU CHUẨN GIÁM ĐỊNH</th>
                                <th>NỘI DUNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Loại đá</td>
                                <td>Kim cương thiên nhiên (Natural Diamond)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kích thước (Measurements)</td>
                                <td>Từ 3.00mm trở lên.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Dạng cắt mài (Shape&cut)</td>
                                <td>Tất cả các dạng cắt mài.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Màu sắc (Color)</td>
                                <td>
                                    <ul>
                                        <li>Thang tiêu chuẩn: Từ màu D đến Z</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Độ tinh khiết (Clarity)</td>
                                <td>
                                    <ul>
                                        <li>Thang tiêu chuẩn: FL, IF, VVS1-VVS2, VS1-VS2, SI1-SI2, I1-I2-I3.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Cắt mài (Cut)</td>
                                <td>
                                    <ul>
                                        <li>Thang tiêu chuẩn: Excellent, Very Good, Good, Fair, Poor</li>
                                        <li>Chỉ thực hiên phân cấp với viên có dạng cắt mài (shape&cut): Round Brilliant.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tỉ lệ cắt mài (Proportions)</td>
                                <td>Đo các thông số tỉ lệ cắt mài viên đá.</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Mài bóng (Polish) Đối xứng (Symmetry)</td>
                                <td>
                                    <ul>
                                        <li>Thang tiêu chuẩn: Excellent, Very Good, Good, Fair, Poor</li>
                                        <li>Không thực hiện phân cấp những viên có kích thước (size) từ 3.00 đến 3.99mm.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Phát quang (Fluorescence)</td>
                                <td>
                                    <ul>
                                        <li>Thang tiêu chuẩn: None, Faint, Medium, Strong, Very Strong.</li>
                                        <li>Không thực hiện phân cấp những viên có kích thước (size) từ 3.00 đến 3.99mm.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Niêm phong (Ép Seal)</td>
                                <td>Tất cả viên đá được PNJLab thực hiện giám định.</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Giấy giám định (Diamond Grading Report)</td>
                                <td>
                                    <ul>
                                        <li>Phát hành Giấy giám định những viên có kích thước (size) trên 4.00mm.</li>
                                        <li>Không phát hành Giấy giám định những viên có kích thước (size) từ 3.00 đến 3.99mm.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
