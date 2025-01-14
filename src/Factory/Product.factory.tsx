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
const defaultCategory: ICategory = getDefaultCategory();