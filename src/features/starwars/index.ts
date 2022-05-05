import { createSlice } from "@reduxjs/toolkit";
import { MovieData, Movie } from "./types";
import { fetchMovies } from "./async";

interface initialSWStateType {
  data?: MovieData;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
const initialStarWarsState: initialSWStateType = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const swDb = createSlice({
  name: "Star Wars",
  initialState: initialStarWarsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
