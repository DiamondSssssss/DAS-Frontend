import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuperMarketService } from "services/SuperMarketService";
export const fetchListPay = createAsyncThunk(
  "ListPay/fetchListPay",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await SuperMarketService.getListPay(token, params);
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

const ListPaySlice = createSlice({
  name: "ListPay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListPay.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchListPay.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchListPay.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = ListPaySlice.actions;
export default ListPaySlice.reducer;
