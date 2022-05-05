import { combineReducers } from "@reduxjs/toolkit";
import { store } from "./store";
import birbia from "../features/birbia";
import swapi from "../features/swapi";

export const rootReducer = combineReducers({
  birbia: birbia,
});

export type RootState = ReturnType<typeof store.getState>;
