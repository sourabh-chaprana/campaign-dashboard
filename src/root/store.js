import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "../redux/teamSlice/team.slice";
// import authLoginSlice from "../"
import loginSlice from "../redux/authSlice/auth.slice";
import stepperSlice from "../redux/stepperSlice/stepper.slice";

const store = configureStore({
    reducer: {
        teamsDetails: teamSlice,
        login:loginSlice,
        stepper:stepperSlice,
    },
});

export default store;