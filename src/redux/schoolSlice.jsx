import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SchoolService } from "services/SchoolService";
export const fetchSchools = createAsyncThunk(
  "school/fetchSchools",
  // @ts-ignore

  async ({ token }, thunkApi) => {
    try {
      const res = await SchoolService.getAll(token);
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

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSchools.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchSchools.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchSchools.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = schoolSlice.actions;
export default schoolSlice.reducer;
