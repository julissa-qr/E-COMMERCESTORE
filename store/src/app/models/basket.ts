export interface BasketItem {
    productId: number;
    name: string;
    price: number;
    pictureUrl: string;
    brand: string;
    type: string;
    quantity: number;
}

export interface Basket {
    id: number;
    customerId: string;
    items: BasketItem[];
}
