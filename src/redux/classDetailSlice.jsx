import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClassService } from "services/ClassService";
export const fetchClassDetail = createAsyncThunk(
  "class/fetchClassDetail",

  // @ts-ignore
  async ({ id, token }, thunkApi) => {
    try {
      const res = await ClassService.getClassById(id, token);
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

const classDetailSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClassDetail.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchClassDetail.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchClassDetail.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = classDetailSlice.actions;
export default classDetailSlice.reducer;
