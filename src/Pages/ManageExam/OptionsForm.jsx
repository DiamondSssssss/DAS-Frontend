import CustomModal from "components/CustomModal";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "components/FormInput";
import { requiredError } from "constant";
import Button from "components/Button";
import BasicSelect from "components/CustomSelect";
import { useNavigate } from "react-router-dom";
import { PATH } from "./../../routes/constants";
import {
  MATRIX_CASE,
  gradeChoices,
  subjectChoices,
} from "constant/selectOptions";
import { gradeFormat, subjectFormat } from "utils/FieldFormat";

const OptionsForm = ({
  onClose,
  open,
  data = {
    questionSetId: "",
    grade: "",
    subjectEnum: "",
  },
  setTestFormData,
  openTestForm,
}) => {
  const schema = yup.object().shape({
    grade: yup.number().required(requiredError),
    subject: yup.number().required(requiredError),
    numberQuestion: yup.number().required(requiredError),
    both: yup.boolean().required(requiredError),
    questionSetId: yup.string().required(requiredError),
  });
  const method = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // @ts-ignore
  const { handleSubmit, setValue, reset } = method;

  const onSubmit = async (data) => {
    setTestFormData(data);
    onClose();
    openTestForm();
  };

  useEffect(() => {
    // @ts-ignore
    if (data) {
      // @ts-ignore
      setValue("questionSetId", data.questionSetId);
      // @ts-ignore
      setValue("grade", data.grade);
      // @ts-ignore
      setValue("subject", data.subjectEnum);
      // @ts-ignore
      setValue("both", false);
      // @ts-ignore
      setValue("numberQuestion", data.numOfQuestion);
    }

    console.log("data", data);
  }, [data]);

  return (
    <CustomModal
      header="Tạo đề thi mới từ bộ câu hỏi "
      open={open}
      onClose={onClose}
    >
      <FormProvider {...method}>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label={"Lớp"}
            name={"grade"}
            // choices={[data.grade]}
            // format={(value) => gradeFormat(value)}
            disabled={true}
          />
          <FormInput
            label={"Môn Học"}
            name={"subject"}
            value={subjectFormat(data.subjectEnum)}
            disabled={true}
          />
          <FormInput
            type="number"
            label={" Số câu hỏi hiện có trong bộ câu hỏi:"}
            name={"numberQuestion"}
            disabled={true}
          />
          {/* 
          <FormInput
            type="checkbox"
            label={"Chọn thêm câu hỏi từ ngân hàng đề:"}
            name={"both"}
            className="rounded-none w-[20px] h-[20px] mr-[25%] flex-none"
          /> */}

          <div className="w-full flex flex-row-reverse mt-2">
            <Button
              className="hover:ring-blue_base	 !font-baloo2 !font-bold"
              type="submit"
              // onClick={handleSubmit}
            >
              Xác nhận
            </Button>
          </div>
        </form>
      </FormProvider>
    </CustomModal>
  );
};

export default OptionsForm;
