import { configureStore } from '@reduxjs/toolkit'
import filter from './filterSlice/filter'
import items from "./itemSlice/items";
import basket from "./basketSlice/basket";

export const store = configureStore({
    reducer: {
        filter,
        items,
        basket
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch