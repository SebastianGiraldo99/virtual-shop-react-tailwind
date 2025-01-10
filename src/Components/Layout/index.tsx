import React from "react";

// El error ocurre porque en TypeScript no has especificado el tipo de la propiedad children en el componente Layout.
// Para solucionarlo, puedes definir explícitamente el tipo de children utilizando el tipo proporcionado por React: 
// React.ReactNode.
interface LayoutProps {
    children: React.ReactNode;
}
const Layout : React.FC<LayoutProps> =({children})=>{
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
};
export {Layout};