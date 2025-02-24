import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCardContex } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";




const MyOrder =() =>{
    const context = useContext(ShoppingCardContex);
            if(!context){
                throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
            }
        const {order} = context;
        const currentPath = window.location.pathname;
        const id_order : number = parseInt(currentPath.substring(currentPath.lastIndexOf('/')+1))|| 0;
        const product_filtered = order.find(product => (product.id === id_order));
        let index : number = product_filtered ?  order.indexOf(product_filtered) : -1 ;
        if(id_order === 0) index = order?.length - 1 ;
        
        

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-5">
                <Link to={'/my-orders'} className="absolute left-0 " >
                    <ChevronLeftIcon  className='w-6 h-6 text-black cursor-pointer'/>
                </Link>
                
                <h1> My Order Page</h1>
            </div>
           
            <div className=' flex flex-col w-80'>
                {
                    order?.[index]?.products.map((product)=> (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images?.[0]}
                        price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>


            
        
    );
}

export {MyOrder};