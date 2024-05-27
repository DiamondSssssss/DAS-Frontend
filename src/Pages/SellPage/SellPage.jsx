import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/Button";
import BasicSelect from "components/CustomSelect";
import FormInput from "components/FormInput";
import { requiredError } from "constant";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
const subjects = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Science" },
  { id: 3, name: "History" },
  { id: 4, name: "English" },
  { id: 5, name: "Computer Science" },
];
const classes = [
  { id: 1, name: "Class A" },
  { id: 2, name: "Class B" },
  { id: 3, name: "Class C" },
];
const SellPage = () => {
  const schema = yup.object().shape({
    grade: yup.number().required(requiredError),
    subject: yup.number().required(requiredError),
    section: yup.number().required(requiredError),
    price: yup.number().required(requiredError),
    name: yup.string().required(requiredError),
  });
  const method = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue, reset } = method;

  const onSubmit = async (data) => {
  };
  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 ">
      <div className="flex-1 overflow-auto hide-scrollbar">
        <div className="w-[50%] h-full m-auto text-blue_dark bg-white rounded-2xl shadow-sm p-4">
          <div className="w-full text-center font-bold font-baloo2 text-black ">
            Đăng ký bán bộ câu hỏi
          </div>
          <FormProvider {...method}>
            <form
              className="flex flex-col gap-2 items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <BasicSelect
                label={"Chọn Lớp"}
                name={"grade"}
                choices={classes}
                format={(item) => item.name}
              />
              <BasicSelect
                label={"Chọn Môn học"}
                name={"subject"}
                choices={subjects}
                format={(item) => item.name}
              />
              <BasicSelect
                label={"Chọn Chương "}
                name={"section"}
                choices={subjects}
                format={(item) => item.name}
              />
              <FormInput type="number" label={" Giá Bán"} name={"price"} />
              <FormInput label={"bộ câu hỏi"} name={"name"} />

              <div className="w-full flex flex-row-reverse mt-2 gap-2">
                <Button
                  className="hover:ring-blue_base !font-baloo2 !font-bold"
                  type="submit"
                >
                  Hủy
                </Button>
                <Button
                  className="hover:bg-blue_base hover:text-white !font-baloo2 !font-bold"
                  type="submit"
                >
                  Bán bộ câu hỏi
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
