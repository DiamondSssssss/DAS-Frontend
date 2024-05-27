import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExamService } from "services/ExamService";
export const fetchExamDetail = createAsyncThunk(
  "exam/fetchExamDetail",

  // @ts-ignore
  async ({ id, token }, thunkApi) => {
    try {
      const res = await ExamService.getExamById(id, token);
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

const examDetailSlice = createSlice({
  name: "examDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExamDetail.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchExamDetail.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchExamDetail.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = examDetailSlice.actions;
export default examDetailSlice.reducer;
