import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProductInterface } from '../Interfaces/IProduct.interface';
import { getDefaultProduct } from '../Factory/Product.factory';
import { ICheckOutInterface } from '../Interfaces/ICheckOutInterface';

interface shoppingCardContextType {
    count : number,
    setCount : Dispatch<SetStateAction<number>>,
    showProductDetail: boolean,
    openProductDetail: () => void,
    closeProductDetail: ()=>void,
    productToShow: IProductInterface,
    setProductShow :Dispatch<SetStateAction<IProductInterface>>,
    cartProduct : IProductInterface[],
    setCartProduct : Dispatch<SetStateAction<IProductInterface[]>>,
    isShowShoppingCart : boolean,
    openShoppingCart : () => void,
    closeShoppingCart : () => void,
    order : ICheckOutInterface[],
    setOrder : Dispatch<SetStateAction<ICheckOutInterface[]>>,



}

const initialObjetcProduct : IProductInterface = getDefaultProduct();

export const ShoppingCardContex = createContext<shoppingCardContextType|undefined>(undefined);




export const ShoppingCardProvider= ({children}: {children:React.ReactNode})=>{
    // Shopping cart ~ Increment Cart
    const [count, setCount] = useState(0);

    // Open Close ProductDetail
    const [showProductDetail, setShowProductDetail] = useState(false);
    const openProductDetail = () => setShowProductDetail(true);
    const closeProductDetail = () => setShowProductDetail(false);

    // Product To show
    const [productToShow, setProductShow] = useState(initialObjetcProduct);
    // ShoppingCart ~ Adding produt to cart
    const [cartProduct, setCartProduct] = useState<IProductInterface[]>([]);
    const [isShowShoppingCart, setShowShoppingCart] = useState(false);
    const openShoppingCart = () => setShowShoppingCart(true);
    const closeShoppingCart = () => setShowShoppingCart(false);
    
    const [order, setOrder] = useState<ICheckOutInterface[]>([]);


    return (
        <ShoppingCardContex.Provider value={{
            count, 
            setCount,
            showProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductShow,
            cartProduct,
            setCartProduct,
            isShowShoppingCart,
            openShoppingCart,
            closeShoppingCart,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCardContex.Provider>
    );
}