import { createContext, useState } from 'react';

export const ShoppingCardContex = createContext();




export const ShoppingCardProvider= ({children})=>{
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