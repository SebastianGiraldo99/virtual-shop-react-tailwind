import { XMarkIcon } from "@heroicons/react/16/solid";

interface propsOrderCard {
    id: number,
    title: string,
    imageUrl : string,
    price: number,
    handleDelete : (id:number) => void
}
const OrderCard: React.FC<propsOrderCard> = props =>{
    const {id, title, imageUrl, price, handleDelete}  = props;
    return (
        <div className="w-full h-30 flex justify-between gap-2 bg-neutral-200 rounded-lg shadow p-2 my-1 ">
            <div className="flex  gap-2">
                <img className="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg" src={imageUrl} alt={title} />
                <div className="flex flex-col">
                    <span className="font-bold text-neutral-700 italic">{title}</span>
                    <p className="line-clamp-3">
                        ${price}
                    </p>
                </div>
            </div>
            <div className="">
            <XMarkIcon 
            className='w-6 h-6 text-black cursor-pointer'
            onClick={()=>handleDelete(id)}
            ></XMarkIcon>
            </div>  
        </div>
    );
}

export {OrderCard};