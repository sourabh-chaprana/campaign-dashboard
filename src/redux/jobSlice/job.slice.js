import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addJobThunk } from "./job.thunk";


export const addJobSlice = createAsyncThunk('addJob', addJobThunk);

const initialState = {
    jobs: [],
    data: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addJobSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addJobSlice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(addJobSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
          
    },

});

export default authSlice.reducer;