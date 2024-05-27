import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExamService } from "services/ExamService";
export const fetchExams = createAsyncThunk(
  "exam/fetchExams",
  // @ts-ignore

  async ({ params, token }, thunkApi) => {
    try {
      const res = await ExamService.getOwnExam(params, token);
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

const examSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExams.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchExams.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchExams.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = examSlice.actions;
export default examSlice.reducer;
