import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieData } from "./types";
import { RootState } from "../../app/store";

export const fetchMovies = createAsyncThunk<
  MovieData,
  void,
  { state: RootState }
>("fetchMovies", async () => {
  try {
    let response = await fetch("https://swapi.dev/api/films");
    return response.json();
  } catch (err) {
    console.log(err);
  }
});
