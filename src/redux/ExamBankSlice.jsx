import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ManageService } from "services/ManageService";
export const fetchExamBank = createAsyncThunk(
  "ExamBank/fetchExamBank",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await ManageService.getExamBank(token, params);
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

const ExamBankSlice = createSlice({
  name: "ExamBank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExamBank.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchExamBank.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchExamBank.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = ExamBankSlice.actions;
export default ExamBankSlice.reducer;
