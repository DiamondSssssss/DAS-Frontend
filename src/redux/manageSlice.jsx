import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ManageService } from "services/ManageService";
export const fetchManage = createAsyncThunk(
  "manage/fetchManage",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await ManageService.getOwnExam(token, params);
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

const manageSlice = createSlice({
  name: "manage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchManage.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchManage.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchManage.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = manageSlice.actions;
export default manageSlice.reducer;
