import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/Networkutils";
import { Root } from "../../../model/RootObject";
import { RootState } from "../../storeindex";

const usersAdapter = createEntityAdapter<Root>()

const initialState = usersAdapter.getInitialState()
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
        
        })
        .addCase(getProducts.fulfilled, usersAdapter.setAll)
        .addCase(getProducts.rejected, (state, action) => {
      
        });
    },

});

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state: RootState) => state.user)
export default userSlice.reducer;