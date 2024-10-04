import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./features/todo/todoSlice";
// import todoReducer from "../redux/todoSlice/todoSlice";
// import authReducer from "../redux/authSlice/auth.slice";

const store = configureStore({
    reducer: {
        auth: '',
    },
});

export default store;