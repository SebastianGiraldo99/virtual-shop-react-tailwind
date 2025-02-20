import { IProductInterface } from "../Interfaces/IProduct.interface";

export const totalPriceFn = (products: IProductInterface[])=>{
    let sumPrice = 0;
    products.forEach(product => sumPrice += product.price);
    return sumPrice;
}