import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "../redux/teamSlice/team.slice";
// import authLoginSlice from "../"
import loginSlice from "../redux/authSlice/auth.slice";

const store = configureStore({
    reducer: {
        teamsDetails: teamSlice,
        login:loginSlice
    },
});

export default store;