import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeamsDetailsThunk } from "./team.thunk";



export const fetchTeamsDetailsSlice = createAsyncThunk('fetchTeamsDetails', fetchTeamsDetailsThunk);

const initialState = {
    teams: [],
    campaigns: [],
    totalItems: 0,
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
            state.loading = true;
          })
          .addCase(fetchTeamsDetailsSlice.fulfilled, (state, action) => {
            state.campaigns = action?.payload?.items;
            state.totalItems = action?.payload?.totalItems;
            state.loading = false;
          })
          .addCase(fetchTeamsDetailsSlice.rejected, (state, action) => {
            state.error = action?.error?.message;
            state.loading = false;
          });
          
    },

});

export default teamsSlice.reducer;