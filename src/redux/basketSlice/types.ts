export type BasketItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    category?: string;
    count: number;
}

export interface BasketState {
    items: BasketItem[];
    totalPrice: number;
}