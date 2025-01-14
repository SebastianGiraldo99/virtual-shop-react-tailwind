import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProductInterface } from '../Interfaces/IProduct.interface';
import { getDefaultProduct } from '../Factory/Product.factory';

interface shoppingCardContextType {
    count : number,
    setCount : Dispatch<SetStateAction<number>>,
    showProductDetail: boolean,
    openProductDetail: () => void,
    closeProductDetail: ()=>void,
    productToShow: IProductInterface,
    setProductShow :Dispatch<SetStateAction<IProductInterface>>
}

const initialObjetcProduct : IProductInterface = getDefaultProduct();

export const ShoppingCardContex = createContext<shoppingCardContextType|undefined>(undefined);




export const ShoppingCardProvider= ({children}: {children:React.ReactNode})=>{
    // Shopping cart
    const [count, setCount] = useState(0);

    // Open Close ProductDetail
    const [showProductDetail, setShowProductDetail] = useState(false);
    const openProductDetail = () => setShowProductDetail(true);
    const closeProductDetail = () => setShowProductDetail(false);

    // Product To show
    const [productToShow, setProductShow] = useState(initialObjetcProduct);

    return (
        <ShoppingCardContex.Provider value={{
            count, 
            setCount,
            showProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductShow
        }}>
            {children}
        </ShoppingCardContex.Provider>
    );
}