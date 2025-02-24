import { CalendarDaysIcon, ShoppingBagIcon} from "@heroicons/react/16/solid";

import { Link } from "react-router-dom";

interface propsOrderCard {
    totalPrice: number,
    totalProducts: number,
    id: number,
    date : string,
}
const OrdersCard: React.FC<propsOrderCard> = props =>{
    const  {totalPrice, totalProducts, id, date}  = props;
    // let renderXmarkIcon;
    
    return (
        // <div className="w-full h-30 flex justify-between gap-2 bg-neutral-200 rounded-lg shadow p-2 my-1 ">
        //     <p>
        //         <span>DATE</span>
        //         <span>{totalProducts}</span>
        //         <span>{totalPrice}</span>
        //     </p>
        // </div>
        <div className="flex flex-col bg-gray-500 mb-4 rounded-3xl" >
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                    <h2 className="text-lg font-medium tracking-tighter flex items-center text-white lg:text-2xl">
                        <CalendarDaysIcon className="w-6 h-6"/>{new Date(date).toUTCString().slice(0,16)}
                    </h2>
                    <p className="mt-2 text-xl flex items-center text-white">
                        <ShoppingBagIcon className='h-5 w-5 mr-1'/>
                        {totalProducts} Products
                    </p>
                </div>
                <div className="mt-6">
                    <p>
                    <span className="text-5xl font-medium text-white"> $ </span>
                    <span className="text-5xl font-light tracking-tight text-black">
                        {totalPrice}
                    </span>
                    
                    </p>
                </div>
                </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
                <Link key={id} to={`/my-orders/${id}`} className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
                    View Order
                </Link>
            </div>
        </div>
    );
}

export {OrdersCard};