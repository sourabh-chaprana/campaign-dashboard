import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPrimarySelectThunk ,fetchPrimaryhOptionsThunk} from "./stepper.thunk";



export const fetchPrimarySelectSlice = createAsyncThunk('fetchPrimarySelect', fetchPrimarySelectThunk);
export const fetchPrimaryOptionsSlice = createAsyncThunk('fetchPrimaryOptions', fetchPrimaryhOptionsThunk);


const initialState = {
    primary: [],
    secondary: [],
    primaryOption:[],
    SecondOption:[],
    totalItems: 0,
    data: null,
    status: 'idle',
    error: null,
};

const stepperSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPrimarySelectSlice.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPrimarySelectSlice.fulfilled, (state, action) => {
           
            state.primary = action.payload;
            state.loading = false;
          })
          .addCase(fetchPrimarySelectSlice.rejected, (state, action) => {
            state.error = action?.error?.message;
            state.loading = false;
          })
          .addCase(fetchPrimaryOptionsSlice.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPrimaryOptionsSlice.fulfilled, (state, action) => {
           
            state.primaryOption = action.payload;
            state.loading = false;
          })
          .addCase(fetchPrimaryOptionsSlice.rejected, (state, action) => {
            state.error = action?.error?.message;
            state.loading = false;
          });
          
        
    },

});

export default stepperSlice.reducer;