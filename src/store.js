import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./reducers/exampleSlice";

export const store = configureStore({
    reducer: {
        example: exampleSlice,
    }
})