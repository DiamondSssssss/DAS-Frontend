import CustomModal from "components/CustomModal";
import { requiredError } from "constant";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "components/FormInput";
import Button from "components/Button";
import BasicSelect from "components/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "redux/appSlice";
import { fetchUsers } from "redux/usersSlice";
import { DocumentService } from "services/DocumentService";

const formatType = (key) => {
  switch (key) {
    case 0:
      return "Mẫu phiếu trả lời";

    case 1:
      return "Mẫu bài kiểm tra";

    default:
      break;
  }
};

const TestSampleForm = ({ onClose, open }) => {
  // @ts-ignore
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    FileImport: yup.mixed().required(requiredError),
    Name: yup.string().required(requiredError),
    Description: yup.string().required(requiredError),
    Type: yup.number().required(requiredError),
  });

  const method = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue, reset, register } = method;

  const onSubmit = async (data) => {
    const { FileImport } = data;
    const reqBody = { ...data, FileImport: FileImport[0] };
    try {
      const res = await DocumentService.add(reqBody, token);
      if (res) {
        dispatch(setSnackbar({ color: "green", message: "Tạo thành công" }));
      }
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    } finally {
      onClose();
      reset(undefined);
    }
  };

  return (
    <CustomModal header="Thêm mẫu bài kiểm tra" open={open} onClose={onClose}>
      <FormProvider {...method}>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <FormInput name={"Name"} label={"Tên"} />
          <FormInput name={"Description"} label={"Mô tả"} />
          <BasicSelect
            name={"Type"}
            label={"Loại"}
            choices={[0, 1]}
            format={(value) => formatType(value)}
          />
          <input type="file" multiple={false} {...register("FileImport")} />

          <div className="w-full flex flex-row-reverse mt-2">
            <Button
              className="hover:ring-blue_base	 !font-baloo2 !font-bold"
              type="submit"
            >
              Thêm
            </Button>
          </div>
        </form>
      </FormProvider>
    </CustomModal>
  );
};

export default TestSampleForm;
