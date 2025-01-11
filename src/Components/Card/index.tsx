import React from "react";

interface CardProps {
    children: React.ReactNode;
}

const Card :React.FC<CardProps> = ({children}) =>{
    return (
    <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
        <div className="h-48 bg-gray-700 rounded-xl">
            <img src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg" alt="Product" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <span className="text-xl font-bold">{children?.toString()}</span>
                <p className="text-xs text-gray-700">ID: 23432252</p>
            </div>
            <span className="font-bold text-red-600">$25.99</span>
            </div>
            <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
        </div>
    </div>
    
    );
}

export {Card};