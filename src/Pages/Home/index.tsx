import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { IProductInterface } from "../../Interfaces/IProduct.interface";
import { ProductDetail } from "../../Components/ProductDetail";


function Home(){
    const [items, setItems] = useState<IProductInterface[]>([]);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data));
    },[])
    return (
        <Layout>
            
            <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map(item => (<Card key={item.id} data={item}/>))
            }
            </div>
            <ProductDetail/>
        </Layout>
    );
}

export {Home};