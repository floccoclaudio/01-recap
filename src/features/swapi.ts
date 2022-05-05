import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const swapi = createSlice({
  name: "swapi",
  initialState: swapiInitialState,
  reducers: {},
});

export default swapi.reducer;
