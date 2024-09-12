import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterStates {
    filterName: string; 
    filterType: string;
}

const initialState:IFilterStates = {
    filterName: 'All Task',
    filterType: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterName: (state, action:PayloadAction<string>) => {
            state.filterName = action.payload;
        },
        setFilterTypes: (state, action) => {
            state.filterType = action.payload;
        }
    }
});

export const { setFilterName, setFilterTypes } = filterSlice.actions;