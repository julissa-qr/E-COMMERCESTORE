import { Basket } from "./basket";

export interface User{
    email: string;
    token: string;
    basket?: Basket
    roles?: string[]; //extract the roles
}