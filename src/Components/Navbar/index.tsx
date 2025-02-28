import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContex } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

const Navbar = ()=>{
    const context = useContext(ShoppingCardContex);
    if(!context){
        throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
    }
    const {count} = context;
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light ">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to={'/'}>
                        Shoping
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/shoes'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/electronics'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/furniture'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/miscellaneous'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Miscellaneous
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/others'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            {/* Right side  */}
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    my-email@email.com
                </li>
                <li>
                    <NavLink 
                    to={'/my-orders'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/my-account'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/sign-in'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/shopping-bag'}
                    className={({isActive})=>
                        isActive? activeStyle : undefined
                    }>
                        <div className='flex justify-between'>
                            <ShoppingBagIcon className='h-5 w-5'></ShoppingBagIcon>{count}
                        </div>
                    </NavLink>
                </li>
            </ul>

        </nav>
    );
}

export {Navbar};