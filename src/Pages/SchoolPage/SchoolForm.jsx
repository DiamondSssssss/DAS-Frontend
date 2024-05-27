import CustomModal from "components/CustomModal";
import { requiredError } from "constant";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "components/FormInput";
import Button from "components/Button";
import DropDown from "components/DropDown";
import BasicSelect from "components/CustomSelect";
import { SchoolService } from "services/SchoolService";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchools } from "redux/schoolSlice";
import { setSnackbar } from "redux/appSlice";

const SchoolForm = ({ onClose, open }) => {
  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    // adminEmail: yup.string().email().required(requiredError),
    name: yup.string().required(requiredError),
    address: yup.string().required(requiredError),
    city: yup.string().required(requiredError),
    province: yup.string().required(requiredError),
  });

  const method = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue, reset } = method;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await SchoolService.create(data, token);
      if (res) {
        // @ts-ignore
        dispatch(fetchSchools({ token }));
      }
      dispatch(setSnackbar({ color: "green", message: "Tạo thành công" }));
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    } finally {
      onClose();
      reset(undefined);
    }
  };

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

  return (
    <CustomModal header="Thêm trường học mới" open={open} onClose={onClose}>
      <FormProvider {...method}>
        <form
          className="flex flex-col gap-2 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput label={"Tên trường:"} name={"name"} />
          <FormInput label={"Thành phố:"} name={"city"} />
          {/* <FormInput label={"Tỉnh:"} name={"province"} /> */}

          {/* <DropDown className="" data={provinces} name={"province"} /> */}
          <BasicSelect
            label={"Chọn tỉnh:"}
            name={"province"}
            choices={provinces}
            format={(value) => value}
          />
          <FormInput label={"Địa chỉ:"} name={"address"} />
          {/* <BasicSelect
            label={"Chọn khối"}
            name={"grade"}
            choices={provinces}
            format={(value) => value}
          /> */}

          <div className="w-full flex flex-row-reverse mt-2">
            <Button
              className="hover:ring-blue_base	 !font-baloo2 !font-bold"
              type="submit"
            >
              THÊM TRƯỜNG
            </Button>
          </div>
        </form>
      </FormProvider>
    </CustomModal>
  );
};

export default SchoolForm;
