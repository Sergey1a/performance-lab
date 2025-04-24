import {RootState} from "../store";

export const selectBasket = (state:RootState) => state.basket;

export const selectBasketById = (id:number) => (state: RootState) => state.basket.items.find(item=>item.id === id);