import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort, SortPropertyEnum} from "./types";

const initialState:FilterSliceState  = {
    currentPage: 1,
    sort: {
        name: "цена (DESC)",
        sortProperty: SortPropertyEnum.TITLE_DESC,
    },
    category: "food",
}

export const filterSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload
            console.log(action.payload)
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
            console.log(action.payload)
        }
    },
})

export const {setSort,setCategory,setCurrentPage} = filterSlice.actions

export default filterSlice.reducer