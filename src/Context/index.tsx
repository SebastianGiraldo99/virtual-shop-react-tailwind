import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
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
    items: IProductInterface[],
    setItems : Dispatch<SetStateAction<IProductInterface[]>>,
    searchByTitle : string,
    setSearchByTitle : Dispatch<SetStateAction<string>>,
    filteredItems : IProductInterface[],
    setFilteredItems : Dispatch<SetStateAction<IProductInterface[]>>,
    searchCategory : string,
    setSearchCategory : Dispatch<SetStateAction<string>>,
}

const initialObjetcProduct : IProductInterface = getDefaultProduct();
// const initialCheckOut : ICheckOutInterface = getDefaultCheckOut();

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
    
    //Ordenes de compra.
    const [order, setOrder] = useState<ICheckOutInterface[]>([]);

    // GET Prodcutos 
    const [items, setItems] = useState<IProductInterface[]>([]);
    const [filteredItems, setFilteredItems] = useState<IProductInterface[]>([]);
    // By title
    const [searchByTitle, setSearchByTitle] = useState<string>('');
    //By Category
    const [searchCategory, setSearchCategory] = useState<string>('');

    //Call API
    useEffect(()=>{
            fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    },[])

    //Filter produdcts
    const filteredItemByTitle = (items: IProductInterface[], searchByTitle: string) =>{
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    //Filter products by cateogry
    const filteredItemByCategory = (items:IProductInterface[], searchCategory: string)=>{
        if(searchCategory === 'others'){
            return items?.filter((item)=> item.category.name.toLowerCase() != 'shoes' && item.category.name.toLowerCase() != 'electronics' && item.category.name.toLowerCase() != 'furniture' && item.category.name.toLowerCase() != 'miscellaneous' );
        }   
        return items?.filter((item) => item.category.name.toLowerCase().includes(searchCategory.toLowerCase()));
    }


    useEffect(()=>{
        if(searchByTitle) setFilteredItems(filteredItemByTitle(items, searchByTitle))
        if(searchCategory) setFilteredItems(filteredItemByCategory(items, searchCategory))
    }, [items, searchByTitle, searchCategory]);



    


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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems, 
            setFilteredItems,
            searchCategory,
            setSearchCategory,
        }}>
            {children}
        </ShoppingCardContex.Provider>
    );
}