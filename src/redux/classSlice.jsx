import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClassService } from "services/ClassService";
export const fetchClasses = createAsyncThunk(
  "class/fetchClasses",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await ClassService.getOwnClass(token, params);
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

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchClasses.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchClasses.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = classSlice.actions;
export default classSlice.reducer;
