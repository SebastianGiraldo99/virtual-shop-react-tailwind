import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface shoppingCardContextType {
    count : number,
    setCount : Dispatch<SetStateAction<number>>
}

export const ShoppingCardContex = createContext<shoppingCardContextType|undefined>(undefined);




export const ShoppingCardProvider= ({children}: {children:React.ReactNode})=>{
    const [count, setCount] = useState(0);

    return (
        <ShoppingCardContex.Provider value={{
            count, 
            setCount,
        }}>
            {children}
        </ShoppingCardContex.Provider>
    );
}