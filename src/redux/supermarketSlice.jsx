import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SuperMarketService } from "services/SuperMarketService";
export const fetchSupermarket = createAsyncThunk(
  "Supermarket/fetchSupermarket",
  // @ts-ignore

  async ( { token, params }, thunkApi ) => {
    try {
      const res = await SuperMarketService.getExam( token, params );
      return res;
    } catch ( error ) {
      return thunkApi.rejectWithValue( error );
    }
  }
);

const initialState = {
  entities: [],
  loading: false,
  error: null,
};

const SupermarketSlice = createSlice( {
  name: "Supermarket",
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder.addCase( fetchSupermarket.fulfilled, ( state, action ) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    } );
    builder.addCase( fetchSupermarket.pending, ( state, action ) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    } );
    builder.addCase( fetchSupermarket.rejected, ( state, action ) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    } );
  },
} );
export const { } = SupermarketSlice.actions;
export default SupermarketSlice.reducer;
