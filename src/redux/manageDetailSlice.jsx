import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ManageService } from "services/ManageService";
export const fetchManageDetails = createAsyncThunk(
  "manageDetails/fetchManageDetails",
  // @ts-ignore

  async ({ token, questionSetId }, thunkApi) => {
    try {
      const res = await ManageService.getQuestionSetById(questionSetId, token);
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

const manageDetailsSlice = createSlice({
  name: "manageDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchManageDetails.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchManageDetails.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchManageDetails.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = manageDetailsSlice.actions;
export default manageDetailsSlice.reducer;
