import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeamMemberListThunk, fetchTeamsDetailsThunk } from "./team.thunk";

export const fetchTeamsDetailsSlice = createAsyncThunk(
  "fetchTeamsDetails",
  fetchTeamsDetailsThunk
);
export const fetchTeamMemberListSlice = createAsyncThunk(
  "fetchTeamMemberListThunk",
  fetchTeamMemberListThunk
);

const initialState = {
  teams: [],
  campaigns: [],
  totalItems: 0,
  data: null,
  status: "idle",
  loading: false,
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
        state.campaigns = action.payload.content;
        state.totalItems = action.payload.totalElements;
        state.loading = false;
      })
      .addCase(fetchTeamsDetailsSlice.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.loading = false;
      })

      // fetching team member list
      .addCase(fetchTeamMemberListSlice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMemberListSlice.fulfilled, (state, action) => {
        console.log(action.payload, "slice");
        state.teams = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeamMemberListSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teamsSlice.reducer;
