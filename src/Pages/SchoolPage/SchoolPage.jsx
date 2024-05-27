import CustomTable from "components/CustomTable";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import SchoolForm from "./SchoolForm";
import { useState } from "react";
import { ButtonBlue } from "components/ButtonBlue";
import { fetchSchools } from "redux/schoolSlice";
import IconAdd from "asset/icon add.svg";
import DropDown from "components/DropDown";
import CustomInput from "components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSnackbar } from "redux/appSlice";
import { Badge } from "flowbite-react";
import { useMemo } from "react";

const provinces = [
  { id: 0, name: "Chọn tỉnh" },
  { id: 1, name: "An Giang" },
  { id: 2, name: "Bà Rịa-Vũng Tàu" },
  { id: 3, name: "Bắc Giang" },
  { id: 4, name: "Bắc Kạn" },
  { id: 5, name: "Bạc Liêu" },
  { id: 6, name: "Bắc Ninh" },
  { id: 7, name: "Bến Tre" },
  { id: 8, name: "Bình Định" },
  { id: 9, name: "Bình Dương" },
  { id: 10, name: "Bình Phước" },
  { id: 11, name: "Bình Thuận" },
  { id: 12, name: "Cà Mau" },
  { id: 13, name: "Cần Thơ" },
  { id: 14, name: "Cao Bằng" },
  { id: 15, name: "Đà Nẵng" },
  { id: 16, name: "Đắk Lắk" },
  { id: 17, name: "Đắk Nông" },
  { id: 18, name: "Điện Biên" },
  { id: 19, name: "Đồng Nai" },
  { id: 20, name: "Đồng Tháp" },
  { id: 21, name: "Gia Lai" },
  { id: 22, name: "Hà Giang" },
  { id: 23, name: "Hà Nam" },
  { id: 24, name: "Hà Nội" },
  { id: 25, name: "Hà Tĩnh" },
  { id: 26, name: "Hải Dương" },
  { id: 27, name: "Hải Phòng" },
  { id: 28, name: "Hậu Giang" },
  { id: 29, name: "TP. Hồ Chí Minh" },
  { id: 30, name: "Hòa Bình" },
  { id: 31, name: "Hưng Yên" },
  { id: 32, name: "Khánh Hòa" },
  { id: 33, name: "Kiên Giang" },
  { id: 34, name: "Kon Tum" },
  { id: 35, name: "Lai Châu" },
  { id: 36, name: "Lâm Đồng" },
  { id: 37, name: "Lạng Sơn" },
  { id: 38, name: "Lào Cai" },
  { id: 39, name: "Long An" },
  { id: 40, name: "Nam Định" },
  { id: 41, name: "Nghệ An" },
  { id: 42, name: "Ninh Bình" },
  { id: 43, name: "Ninh Thuận" },
  { id: 44, name: "Phú Thọ" },
  { id: 45, name: "Phú Yên" },
  { id: 46, name: "Quảng Bình" },
  { id: 47, name: "Quảng Nam" },
  { id: 48, name: "Quảng Ngãi" },
  { id: 49, name: "Quảng Ninh" },
  { id: 50, name: "Quảng Trị" },
  { id: 51, name: "Sóc Trăng" },
  { id: 52, name: "Sơn La" },
  { id: 53, name: "Tây Ninh" },
  { id: 54, name: "Thái Bình" },
  { id: 55, name: "Thái Nguyên" },
  { id: 56, name: "Thanh Hóa" },
  { id: 57, name: "Thừa Thiên - Huế" },
  { id: 58, name: "Tiền Giang" },
  { id: 59, name: "Trà Vinh" },
  { id: 60, name: "Tuyên Quang" },
  { id: 61, name: "Vĩnh Long" },
  { id: 62, name: "Vĩnh Phúc" },
  { id: 63, name: "Yên Bái" },
];

const columns = [
  {
    name: "Trường học",
    field: "school",
    formatValue: (value) => (
      <span className=" font-bold text-blue_dark">{value}</span>
    ),
    width: "40%",
  },
  {
    name: "Status",
    field: "status",
    formatValue: (value) => (
      <span className="font-bold text-green_base rounded-lg bg-green_fog p-2">
        {value}
      </span>
    ),
  },
  {
    name: "Tỉnh",
    field: "province",
  },
  {
    name: "Địa chỉ",
    field: "location",
  },
];
const data = [
  {
    school: "THPT Nguyễn Khuyến",
    status: "1",
    province: "TP.Ho Chi Minh",
    location: "Quận Bình Thạnh",
  },
  {
    school: "THPT Nguyễn Khuyến",
    status: "1",
    province: "TP.Ho Chi Minh",
    location: "Quận Bình Thạnh",
  },
  {
    school: "THPT Nguyễn Khuyến",
    status: "1",
    province: "TP.Ho Chi Minh",
    location: "Quận Bình Thạnh",
  },
  {
    school: "THPT Nguyễn Khuyến",
    status: "1",
    province: "TP.Ho Chi Minh",
    location: "Quận Bình Thạnh",
  },
];

const SchoolPage = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);

  // @ts-ignore
  const { entities, error, loading } = useSelector((state) => state.school);

  const columns = useMemo(
    () => [
      {
        name: "Trường học",
        field: "name",
        formatValue: (value) => (
          <span className=" font-bold text-blue_dark">{value}</span>
        ),
        width: "30%",
      },
      {
        name: "Địa chỉ",
        field: ["address"],
        formatValue: (value) => (
          <Badge color="white">
            {value.length > 25 ? value.slice(0, 25) + "..." : value}
          </Badge>
        ),
        width: "25%",
      },
      {
        name: "Thành phố",
        field: "city",
        formatValue: (value) => <Badge color="white">{value}</Badge>,
        width: "20%",
      },
      {
        name: "Tỉnh",
        field: "province",
        formatValue: (value) => <Badge color="white">{value}</Badge>,
        width: "20%",
      },
      {
        name: "Xóa",
        // onclick: handleDeleteClass,
        type: "button",
        formatValue: (value) => (
          <img className="h-[30px] w-[30px]" src="/images/delete.png" />
        ),
        className: " !font-bold text-blue_base !ring-0",
      },
    ],
    []
  );

  const navigate = useNavigate();
  const handleRowClick = (item) => {
    console.log("ITEM", item);
    navigate(PATH.SCHOOLS + `/${item.schoolId}`, { state: item });
  };
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  // const loadProvinces = () => {
  //   const provincesList = [];
  //   let i = 0;
  //   if (entities) {
  //     entities.forEach((entity) => {
  //       provincesList.push({ id: i, name: entity.province });
  //       i++;
  //     });
  //   }
  //   console.log("cccc", provincesList);
  //   return provincesList;
  // };

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchSchools({ token }));
    console.log(entities);
  }, []);
  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 ">
      <div className="relative ml-[5%] flex flex-row items-center w-full h-[10%] p-2 gap-7  ">
        <DropDown data={provinces} />

        <ButtonBlue className="blueButton">Lọc</ButtonBlue>

        <button
          className="right-[9%] absolute h-fit w-fit px-4 py-1 pl-7 bg-white text-blue_dark rounded-[25px] shadow-2xl font-semibold font-baloo2"
          onClick={handleOpenModal}
        >
          <div className="absolute top-1/2 -translate-y-1/2 pr-2 left-2 ">
            <img className="h-4 w-4 " src={IconAdd} />
          </div>
          Thêm trường
        </button>

        <div className="w-1/3 absolute left-1/2 -translate-x-1/2">
          <CustomInput
            label={null}
            name={"email"}
            placeholder="Nhập email người dùng bạn muốn tìm kiếm"
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto hide-scrollbar">
        <CustomTable
          tableName={"school"}
          columns={columns}
          data={entities}
          onClickRow={handleRowClick}
        />
      </div>
      <SchoolForm open={open} onClose={handleCloseModal} />
    </div>
  );
};

export default SchoolPage;
