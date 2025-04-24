import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FetchItemsParams, Item, ItemsState, Status} from "./types";
import axios from "axios";

export const fetchItems = createAsyncThunk<Item[], FetchItemsParams>(
    'items/fetchItemStatus',
    async ({category, sortBy,sortOrder,currentPage}) => {
        const response = await axios.get<Item[]>(`http://localhost:3001/${category}`,{
            params:{
                _page: currentPage,
                _limit: 8,
                _sort:sortBy,
                _order:sortOrder
            }
        })
        return response.data
    },
)

const initialState:ItemsState  = {
    items: [],
    status: Status.LOADING
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
            setItems: (state, action: PayloadAction<Item[]>) => {
                state.items = action.payload
            }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = Status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    },
})

export const {setItems} = itemsSlice.actions

export default itemsSlice.reducer