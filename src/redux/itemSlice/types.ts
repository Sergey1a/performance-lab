export type Item = {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
}

export type FetchItemsParams = {
    category: string;
    sortBy: string;
    sortOrder: string;
    currentPage?: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface ItemsState {
    items: Item [];
    status: Status;
}