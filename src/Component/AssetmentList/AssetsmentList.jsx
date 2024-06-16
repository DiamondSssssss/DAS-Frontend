import React from "react";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./AssetsmentList.css";

function AssetsmentList() {
  const location = useLocation();
  const navigate = useNavigate();
  const { diamonds } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container-assetsmentlist">
        <div className="container">
          <div className="row">
            {/* BEGIN INVOICE */}
            <div className="col-xs-12">
              <div className="grid invoice">
                <div className="grid-body">
                  <div className="invoice-title">
                    <div className="row">
                      <div className="col-xs-12">
                        <img src="../src/image/logo.png" alt="" />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-xs-12">
                        <h2>
                          Hóa Đơn
                          <br />
                          <span className="small">Đơn hàng #1082</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-xs-6">
                      <address>
                        <strong>Người Nhận:</strong>
                        <br />
                        Twitter, Inc.
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        <abbr title="Phone">ĐT:</abbr> (123) 456-7890
                      </address>
                    </div>
                    <div className="col-xs-6 text-right">
                      <address>
                        <strong>Người Gửi:</strong>
                        <br />
                        Elaine Hernandez
                        <br />
                        P. Sherman 42,
                        <br />
                        Wallaby Way, Sydney
                        <br />
                        <abbr title="Phone">ĐT:</abbr> (123) 345-6789
                      </address>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <address>
                        <strong>Phương Thức Thanh Toán:</strong>
                        <br />
                        Visa ending **** 1234
                        <br />
                        h.elaine@gmail.com
                        <br />
                      </address>
                    </div>
                    <div className="col-xs-6 text-right">
                      <address>
                        <strong>Ngày Đặt Hàng:</strong>
                        <br />
                        17/06/14
                      </address>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <h3>Tóm Tắt Đơn Hàng</h3>
                      <br/>
                      <table className="table table-striped table-hover ">
                        <thead>
                          <tr className="">
                            <th>
                              <strong>#</strong>
                            </th>
                            <th className="text-center">
                              <strong>Dịch vụ</strong>
                            </th>
                            <th className="text-center">
                              <strong>Số lượng</strong>
                            </th>
                            <th className="text-right">
                              <strong>Giá</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {diamonds.map((diamond, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <strong>{diamond.name}</strong>
                              </td>
                              <td className="text-center">1</td>
                              <td className="text-right">${diamond.price}</td>
                            </tr>
                          ))}
                          
                          <tr>
                            <td colSpan="2" />
                            <td className="text-right">
                              <strong>Thành tiền</strong>
                            </td>
                            <td className="text-right">
                              <strong>$243</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END INVOICE */}
          </div>
        </div>
        <Button type="primary" onClick={handleBack}>
          Quay Lại
        </Button>
      </div>
    </>
  );
}

export default AssetsmentList;
