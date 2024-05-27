import Badge from "components/Badge";
import { ButtonBlue } from "components/ButtonBlue";
import CustomTable from "components/CustomTable";
import DropDown from "components/DropDown";
import { gradeChoices, subjectChoices } from "constant/selectOptions";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/constants";
import { gradeFormat, subjectFormat } from "utils/FieldFormat";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setSnackbar } from "redux/appSlice";
import { fetchSubjects } from "redux/subjectSlice";
import { SubjectSectionService } from "services/SubjectSectionService";

const subjects = subjectChoices.map((item) => {
  return {
    name: subjectFormat(item),
    id: item,
  };
});
const grades = gradeChoices.map((item) => {
  return {
    name: gradeFormat(item),
    id: item,
  };
});

const SubjectPage = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    grade: {},
    subject: {},
  });
  const [filterData, setFilterData] = useState([]);
  const handleRowClick = (item) => {
    navigate(PATH.SUBJECTS + `/${item.subjectId}`, { state: item });
  };

  const dispatch = useDispatch();
  // @ts-ignore
  const { token } = useSelector((state) => state.user);

  const [data, setData] = useState([]);

  const handleFilter = () => {
    setFilterData((prev) => {
      const filterData = data.filter((item) => {
        if (filter.grade && filter.subject) {
          return (
            item.grade === filter.grade.id && item.name === filter.subject.name
          );
        } else return false;
      });

      return filterData;
    });
  };
  const updateFilter = (field, value) => {
    const updateFilter = { ...filter };
    updateFilter[field] = value;
    setFilter(updateFilter);
  };

  const columns = useMemo(
    () => [
      {
        name: "Tên môn học",
        field: "name",
        formatValue: (value) => (
          <span className="text-[1.4rem] font-bold text-blue_dark">
            {value}
          </span>
        ),
        width: "60%",
      },
      {
        name: "Lớp",
        field: "grade",
        width: "40%",
        formatValue: (value) => <Badge color="green"> Lớp {value}</Badge>,
      },
    ],
    []
  );
  const fetchData = async () => {
    try {
      dispatch(setLoading(true));
      const res = await SubjectSectionService.getSubjects(token);
      setData(res);
    } catch (error) {
      dispatch(setSnackbar({ color: "red", message: error.message }));
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full overflow-hidden m-auto flex flex-col gap-4 ">
      <div className="relative ml-[5%] flex flex-row items-center w-full h-[10%] p-2 gap-7  ">
        <DropDown
          data={grades}
          onSelected={(value) => updateFilter("grade", value)}
        />
        <DropDown
          data={subjects}
          onSelected={(value) => updateFilter("subject", value)}
        />
        <ButtonBlue onClick={handleFilter} className="blueButton">
          Tìm kiếm
        </ButtonBlue>
      </div>
      <div className="flex-1 overflow-auto hide-scrollbar">
        <CustomTable
          columns={columns}
          data={filterData}
          onClickRow={handleRowClick}
        />
      </div>
    </div>
  );
};

export default SubjectPage;
