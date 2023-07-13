import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./reducers/example/exampleSlice";
import { postsApi } from "./reducers/apiExample/apiExampleSlice";

export const store = configureStore({
    reducer: {
        //api
        [postsApi.reducerPath]: postsApi.reducer,
        //non-api
        example: exampleSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})