import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionService } from "services/TransactionService";
export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  // @ts-ignore

  async ({ token }, thunkApi) => {
    try {
      const res = await TransactionService.getAll(token);
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

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(fetchTransactions.pending, (state, action) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    });
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    });
  },
});
export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
