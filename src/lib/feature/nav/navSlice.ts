import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavState {
    sectionName: string;
}
  
const initialState:NavState = {
    sectionName: 'Dashboard',
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setSectionName: (state, action:PayloadAction<string>) => {
            state.sectionName = action.payload;
        },
    }
});

export const { setSectionName } = navSlice.actions;