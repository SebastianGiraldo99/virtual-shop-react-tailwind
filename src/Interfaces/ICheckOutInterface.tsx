import { IProductInterface } from "./IProduct.interface";

export interface ICheckOutInterface {
    id: number,
    date: string,
    products: IProductInterface[],
    totalProducts: number,
    totalPrice : number
}