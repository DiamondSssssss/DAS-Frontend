import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuperMarketService } from "services/SuperMarketService";
export const fetchListBought = createAsyncThunk(
  "ListPay/fetchListBought",
  // @ts-ignore

  async ({ token, params }, thunkApi) => {
    try {
      const res = await SuperMarketService.getListBought(token, params);
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
  name: "ListBought",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListBought.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchListBought.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchListBought.rejected, (state, action) => {
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
