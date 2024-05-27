import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubjectSectionService } from "services/SubjectSectionService";

export const fetchSubjects = createAsyncThunk(
  "subject/fetchSubjects",
  // @ts-ignore

  async ({ grade, subjectEnum, token }, thunkApi) => {
    try {
      const res = await SubjectSectionService.getAllBySubjectId(
        grade,
        subjectEnum,
        token
      );
      console.log("fdsấdfádfsadfsadf", res);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  entities: [],
  loading: false,
  error: null,
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubjects.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchSubjects.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchSubjects.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = subjectSlice.actions;
export default subjectSlice.reducer;
