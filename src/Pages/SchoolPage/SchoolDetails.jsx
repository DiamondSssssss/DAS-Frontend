import { Autocomplete, TextField } from "@mui/material";
import Button from "components/Button";
import CustomInput from "components/CustomInput";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoading, updateBreadCrumb } from "redux/appSlice";
import { fetchSchoolDetail } from "redux/schoolDetailSlice";
// const sample = {
//   schoolId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   adminEmail: "admin@example.com",
//   name: "Example School",
//   address: "123 Main Street",
//   province: "Example Province",
//   status: 0,
// };

const provinces = [
  "An Giang",
  "Bà Rịa-Vũng Tàu",
  "Bắc Giang",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "TP. Hồ Chí Minh",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên - Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

const SchoolDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // @ts-ignore
  const { token } = useSelector((state) => state.user);

  // @ts-ignore
  const { entities, error, loading } = useSelector(
    // @ts-ignore
    (state) => state.schoolDetail
  );

  const fetchData = (id, token) => {
    // @ts-ignore
    dispatch(fetchSchoolDetail({ id, token }));
  };

  const handleSubmit = () => {};

  useEffect(() => {
    console.log("Location state", location.state);
    if (location.state) {
      let root = "/" + location.pathname.split("/")[1];
      fetchData(location.state.schoolId, token);
      console.log(location.state.schoolId);
      dispatch(updateBreadCrumb([root, location.state.name]));
    }
  }, [location]);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  console.log(entities);

  const [newProvince, setNewProvince] = useState("");

  // const [data, setData] = useState(sample);
  return (
    <div className="h-full w-full flex flex-row gap-4 relative py-[5%] px-[10%] rounded-lg overflow-auto hide-scrollbar bg-white shadow-card">
      <div className="controllers absolute top-[12px] right-[12px] flex gap-2">
        <Button
          className="bg-red_base text-white font-bold px-4"
          disabled={location.state}
          // onClick={() => setMode(VIEW_MODE.EDIT)}
        >
          Chỉnh sửa
        </Button>
        <Button
          disabled
          className=" ring-2 ring-red_fog text-red_base font-bold rounded-3xl px-4 bg-white"
        >
          Vô hiệu hóa tài khoản
        </Button>
      </div>
      <div className=" h-full w-[30%] flex flex-col justify-center items-center gap-6">
        <div className="rounded-xl ">
          <img
            className="object-contain"
            src="/images/profileImage.png"
            alt="profile"
          />
        </div>
      </div>
      <div className=" h-full ml-auto w-[50%] flex flex-col gap-2 justify-center">
        <form action="" onSubmit={handleSubmit}>
          <CustomInput
            className="text-blue_base font-bold"
            name={"name"}
            label={"Tên trường"}
            disable="true"
            value={entities.name || "Chưa cập nhật"}
            labelClass="font-bold text-blue_dark text-[1.2rem]"
          />
          <CustomInput
            className="text-blue_base font-bold"
            name={"adminEmail"}
            label={"Địa chỉ:"}
            disable="true"
            value={
              (`${entities.address}`.length > 80
                ? `${entities.address}`.slice(0, 80) + "..."
                : entities.address) || "Chưa cập nhật"
            }
            labelClass="font-bold text-blue_dark text-[1.2rem]"
          />
          <CustomInput
            className="text-blue_base font-bold"
            name={"address"}
            label={"Thành phố:"}
            disable="true"
            value={entities.city || "Chưa cập nhật"}
            labelClass="font-bold text-blue_dark text-[1.2rem]"
          />
          <CustomInput
            className="text-blue_base font-bold"
            name={"province"}
            label={"Tỉnh:"}
            disable="true"
            value={entities.province || "Chưa cập nhật"}
            labelClass="font-bold text-blue_dark text-[1.2rem]"
          />
          <Autocomplete
            disablePortal
            freeSolo
            value={newProvince}
            // onChange={(event, newValue) => setSelectedSchool(newValue)}
            options={provinces}
            sx={{ width: 532 }}
            renderInput={(params) => (
              <TextField hidden={true} {...params} label="Chọn tỉnh" />
            )}
            // className={`${mode === VIEW_MODE.VIEW ? "hidden" : ""}`}
            clearOnEscape
            // getOptionLabel={}
          />
        </form>
      </div>
    </div>
  );
};

export default SchoolDetails;
