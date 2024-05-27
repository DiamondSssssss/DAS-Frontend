import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserService } from "services/UserService";
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  // @ts-ignore

  async ( { token }, thunkApi ) => {
    try {
      const res = await UserService.getAll( token );
      return res;
    } catch ( error ) {
      return thunkApi.rejectWithValue( error );
    }
  }
);

const initialState = {
  entities: {},
  loading: false,
  error: null,
};

const usersSlice = createSlice( {
  name: "users",
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder.addCase( fetchUsers.fulfilled, ( state, action ) => {
      return {
        entities: action.payload,
        loading: false,
        error: null,
      };
    } );
    builder.addCase( fetchUsers.pending, ( state, action ) => {
      return {
        entities: [],
        loading: true,
        error: null,
      };
    } );
    builder.addCase( fetchUsers.rejected, ( state, action ) => {
      return {
        entities: [],
        loading: false,
        error: action.payload,
      };
    } );
  },
} );
export const { } = usersSlice.actions;
export default usersSlice.reducer;
