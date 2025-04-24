import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BasketItem, BasketState} from "./types";

const initialState:BasketState  = {
    items: [],
    totalPrice: 0
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<{id:number,name:string,image:string,price:number,count:number}>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                findItem.count += 1
            } else {
               state.items.push({...action.payload, count : 1})
            }

            state.totalPrice += action.payload.price
        },
        itemMinus: (state, action: PayloadAction<{ id: number; price: number }>) => {
            console.log(action.payload)
            const findItem = state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                findItem.count -= 1

                if(findItem.count === 0) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
            }

            state.totalPrice -= action.payload.price
        },
        deleteItem: (state, action: PayloadAction<{ id: number; price: number;count: number }>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id);

            if (findItem) {
                state.totalPrice -= action.payload.price * action.payload.count;
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
        },
        clearBasket: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    },
})

export const {addItems,itemMinus,deleteItem,clearBasket} = basketSlice.actions

export default basketSlice.reducer