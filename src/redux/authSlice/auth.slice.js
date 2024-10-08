import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authLoginThunk } from "./auth.thunk";



export const authLoginSlice = createAsyncThunk('authLoginSlice', authLoginThunk);

const initialState = {
    token: [],
    data: null,
    status: 'idle',
    error: null,
};

const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authLoginSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(authLoginSlice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(authLoginSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
          
    },

});

export default loginSlice.reducer;