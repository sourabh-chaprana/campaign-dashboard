import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPrimarySelectThunk, fetchPrimaryhOptionsThunk } from "./stepper.thunk";

// Async thunk for fetching primary attributes
export const fetchPrimarySelectSlice = createAsyncThunk('stepper/fetchPrimarySelect', fetchPrimarySelectThunk);

// Async thunk for fetching primary options by attributeCode
export const fetchPrimaryOptionsSlice = createAsyncThunk('stepper/fetchPrimaryOptions', fetchPrimaryhOptionsThunk);

const initialState = {
    primary: [],
    secondary: [],
    primaryOption: {}, // Store options keyed by attributeCode
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

            // Fetch Primary Options for a given attributeCode
            .addCase(fetchPrimaryOptionsSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPrimaryOptionsSlice.fulfilled, (state, action) => {
                const { attributeCode, data } = action.payload;
                state.loading = false;
                // Store options keyed by attributeCode
                state.primaryOption = {
                    ...state.primaryOption,
                    [attributeCode]: data
                };
            })
            .addCase(fetchPrimaryOptionsSlice.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default stepperSlice.reducer;
