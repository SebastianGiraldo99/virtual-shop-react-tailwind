import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCardContex } from "../../Context"


function MyOrders(){
    const context = useContext(ShoppingCardContex);
                if(!context){
                    throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
                }
    const {order} = context;
    return (
        <Layout>
                <h1>My Orders Page</h1>
            {
                order.map((order)=>(
                    
                        <OrdersCard 
                        key={order.id}
                        id={order.id}
                        date = {order.date}
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}/>
                ))
            }
            
        </Layout>
    );
}

export {MyOrders};