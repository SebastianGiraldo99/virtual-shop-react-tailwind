import { IProductInterface } from "../../Interfaces/IProduct.interface";
import { ShoppingCardContex } from "../../Context";
import { useContext } from "react";

interface CardProps {
    data: IProductInterface
};

const Card: React.FC<CardProps> = ({data}) =>{
    const context = useContext(ShoppingCardContex);
    if(!context){
        throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
    }
    const {count, setCount, openProductDetail, setProductShow, setCartProduct, cartProduct, openShoppingCart, closeProductDetail, closeShoppingCart} = context;

    const showProduct = (productDetail: IProductInterface) =>{
        openProductDetail();
        closeShoppingCart();
        setProductShow(productDetail)
    }

    const addProductsToCart = (event:React.MouseEvent, productData: IProductInterface) =>{
        event.stopPropagation();
        setCartProduct([...cartProduct, productData]);
        setCount(count + 1);
        closeProductDetail();
        openShoppingCart();
    }

    const disabledButton= (id:number) =>{
        const isInCard = cartProduct.filter(product => product.id === id).length>0;
        if(isInCard){
            return <button  className="hover:bg-gray-500 text-gray-50 bg-gray-400 py-2 rounded-md cursor-not-allowed">Added</button>
        }else{
            return <button onClick={(event)=> addProductsToCart(event, data)} className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
        }
        
    }

    return (
    <div className="w-full h-full bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl my-8">
        <div className="h-1/2 bg-gray-700 rounded-xl cursor-pointer" onClick={()=> {showProduct(data)}}>
            <img src={data.images[0]} alt={data.title} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <span className="text-xl font-bold cursor-pointer" onClick={()=> {showProduct(data)}}>{data.title}</span>
                <p className="text-xs text-gray-700">{data.category.name}</p>
            </div>
            <span className="font-bold text-red-600">${data.price}</span>
            </div>
            {disabledButton(data.id)}
        </div>
    </div>
    
    );
}

export {Card};