import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SchoolService } from "services/SchoolService";
export const fetchSchoolDetail = createAsyncThunk(
  "class/fetchSchoolDetail",

  // @ts-ignore
  async ({ id, token }, thunkApi) => {
    try {
      const res = await SchoolService.getSchoolById(id, token);
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

const schoolDetailSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSchoolDetail.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchSchoolDetail.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchSchoolDetail.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = schoolDetailSlice.actions;
export default schoolDetailSlice.reducer;
