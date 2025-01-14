import { XMarkIcon } from '@heroicons/react/16/solid';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCardContex } from '../../Context';
const ProductDetail = () =>{
    const context = useContext(ShoppingCardContex);
        if(!context){
            throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
        }
    const {showProductDetail, closeProductDetail, productToShow} = context;
    console.log('PRODUCT TO SHOW : ',productToShow)

    return (
        <aside className={`${showProductDetail ? 'flex' : 'hidden'} product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'> 
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon onClick={()=>{closeProductDetail()}} className='w-6 h-6 text-black cursor-pointer'></XMarkIcon>
            </div>
            <figure className=' px-6 '>
                <img className='w-full h-full rounded-lg' 
                src={productToShow.images?.[0] || ''} alt={productToShow.title || ''} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    );
}

export {ProductDetail};