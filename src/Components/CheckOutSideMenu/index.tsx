import { XMarkIcon } from '@heroicons/react/16/solid';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCardContex } from '../../Context';
import { OrderCard } from '../OrderCard';
import {totalPriceFn} from '../../utils/index';
import { ICheckOutInterface } from '../../Interfaces/ICheckOutInterface';
const CheckOutSideMenu = () =>{
    const context = useContext(ShoppingCardContex);
        if(!context){
            throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
        }
    const {isShowShoppingCart, closeShoppingCart, cartProduct,setCartProduct, order ,setOrder, setCount, count} = context;

    const handleDelete = (id:number) =>{
        const filteredProducts = cartProduct.filter(product => (product.id != id));
        setCartProduct(filteredProducts);
        const new_quatity = count -1;
        setCount(new_quatity);
    };

    const handleCheckOut = () =>{
        const orderToAdd : ICheckOutInterface = {
            //CREAR INTERFAZ
            date : new Date().toISOString(),
            products: cartProduct,
            totalProducts : cartProduct.length,
            totalPrice : totalPriceFn(cartProduct)
        }
        setOrder([...order, orderToAdd]);
        setCartProduct([]);
        setCount(0);
        

    }

    return (
        <aside className={`${isShowShoppingCart ? 'flex' : 'hidden'} check-out-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg overflow-y-auto`}>
            <div className='flex justify-between items-center p-6'> 
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon onClick={()=>{closeShoppingCart()}} className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
            </div>
            <div className='flex-1'>
                {
                    cartProduct.map((product)=> (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images?.[0]}
                        price={product.price}
                        handleDelete ={handleDelete}/>
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>
                        Total:
                    </span>
                    <span className='font-medium text-2xl'>
                        ${totalPriceFn(cartProduct)}
                    </span>
                </p>
                <button className='w-full bg-black py-3 text-yellow-50 rounded-lg'
                onClick={()=> handleCheckOut()}>CheckOut</button>
            </div>
        </aside>
    );
}

export {CheckOutSideMenu};