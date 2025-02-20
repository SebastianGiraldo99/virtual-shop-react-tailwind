import { IProductInterface } from "./IProduct.interface";

export interface ICheckOutInterface {
    date: string,
    products: IProductInterface[],
    totalProducts: number,
    totalPrice : number
}