import { ICheckOutInterface } from "../Interfaces/ICheckOutInterface";
import { ICategory, IProductInterface } from "../Interfaces/IProduct.interface";

export const getDefaultProduct = () : IProductInterface =>({
    id: 0,
    title: 'Defaul Title',
    price: 0,
    description : 'Default Description',
    category : defaultCategory,
    images: []
});



export const getDefaultCategory = ():ICategory=>({
    id: 0,
    name: 'Default Category',
    image: ''
});

export const getDefaultCheckOut = ():ICheckOutInterface => ({
    id: 0,
    date : new Date().toISOString(),
    products: [defaultProduct],
    totalProducts : 0,
    totalPrice : 0
})
const defaultCategory: ICategory = getDefaultCategory();
const defaultProduct : IProductInterface = getDefaultProduct();