import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "./feature/nav/navSlice";
import { filterSlice } from "./feature/filter/filterSlice";

export const makeStore = () => {
    return configureStore({ reducer: {
        [navSlice.name]: navSlice.reducer,
        [filterSlice.name]: filterSlice.reducer
    }})
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];