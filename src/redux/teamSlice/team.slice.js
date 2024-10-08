import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeamsDetailsThunk } from "./team.thunk";



export const fetchTeamsDetailsSlice = createAsyncThunk('fetchTeamsDetails', fetchTeamsDetailsThunk);

const initialState = {
    teams: [],
    data: null,
    status: 'idle',
    error: null,
};

const teamsSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeamsDetailsSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeamsDetailsSlice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchTeamsDetailsSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
          
    },

});

export default teamsSlice.reducer;