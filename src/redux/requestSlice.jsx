import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuperMarketService } from "services/SuperMarketService";
export const fetchrequest = createAsyncThunk(
  "request/fetchrequest",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await SuperMarketService.getRequest(token, params);
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

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchrequest.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchrequest.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchrequest.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = requestSlice.actions;
export default requestSlice.reducer;
