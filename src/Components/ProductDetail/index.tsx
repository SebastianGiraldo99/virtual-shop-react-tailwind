import { XMarkIcon } from '@heroicons/react/16/solid';
import './styles.css';
const ProductDetail = () =>{
    return (
        <aside className='product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg'>
            <div className='flex justify-between items-center p-6'> 
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon className='w-6 h-6 text-black'></XMarkIcon>

            </div>
        </aside>
    );
}

export {ProductDetail};