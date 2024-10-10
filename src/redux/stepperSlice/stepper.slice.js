import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPrimarySelectThunk, fetchPrimaryhOptionsThunk,fetchSecondarySelectThunk,fetchSecondaryOptionsThunk } from "./stepper.thunk";


export const fetchPrimarySelectSlice = createAsyncThunk('fetchPrimarySelect', fetchPrimarySelectThunk);
export const fetchPrimaryOptionsSlice = createAsyncThunk('fetchPrimaryOptions', fetchPrimaryhOptionsThunk);


export const fetchSecondarySelectSlice = createAsyncThunk('fetchSelectVal', fetchSecondarySelectThunk);
export const fetchSecondaryOptionsSlice = createAsyncThunk('fetchSecondaryOptions', fetchSecondaryOptionsThunk);



const initialState = {
    primary: [],
    secondary: [],
    primaryOption: {}, 
    secondaryOption: {},
    totalItems: 0,
    data: null,
    status: 'idle',
    loading: false,
    error: null,
};

const stepperSlice = createSlice({
    name: "stepper",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Primary Attributes
            .addCase(fetchPrimarySelectSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPrimarySelectSlice.fulfilled, (state, action) => {
                state.primary = action.payload; // Store the fetched primary attributes
                state.loading = false;
            })
            .addCase(fetchPrimarySelectSlice.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })

           
            .addCase(fetchPrimaryOptionsSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPrimaryOptionsSlice.fulfilled, (state, action) => {
                const { attributeCode, data } = action.payload;
                state.loading = false;
                state.primaryOption = {
                    ...state.primaryOption,
                    [attributeCode]: data
                };
            })
            .addCase(fetchPrimaryOptionsSlice.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(fetchSecondarySelectSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSecondarySelectSlice.fulfilled, (state, action) => {
                state.secondary = action.payload; // Store the fetched secondary attributes
                state.loading = false;
            })
            .addCase(fetchSecondarySelectSlice.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(fetchSecondaryOptionsSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSecondaryOptionsSlice.fulfilled, (state, action) => {
                const { attributeCode, data } = action.payload;
                state.loading = false;
                state.secondaryOption = {
                    ...state.secondaryOption,
                    [attributeCode]: data
                };
            })
            .addCase(fetchSecondaryOptionsSlice.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })

            ;
    },
});

export default stepperSlice.reducer;
