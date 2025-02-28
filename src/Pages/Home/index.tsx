import { useContext } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCardContex } from "../../Context";


function Home(){
    const context = useContext(ShoppingCardContex);
    if(!context){
        throw new Error('useContext debe ser usado dentro de ShoppingCardProvider');
    }
    const {items, setSearchByTitle, searchByTitle, filteredItems, setSearchCategory} = context;

    const currentPath = window.location.pathname;
    const category =  currentPath.substring(currentPath.lastIndexOf('/')+1);
    if(category.length>0){
        setSearchCategory(category);
    }
    

   

    const renderView = () =>{
        if( (searchByTitle?.length>0 && filteredItems?.length>0) || (category.length>0 && filteredItems?.length>0 )){
            return (
                filteredItems?.map(item => (<Card key={item.id} data={item}/>))
            )
        }
        if(category.length>0 && filteredItems?.length == 0){
            return <p>No Results to this Category</p>
        }
        if((category.length == 0 && items?.length>0) || filteredItems?.length == 0){
            return (
                items?.map(item => (<Card key={item.id} data={item}/>))
            )
        }
        else{
            return <p>No Results to found</p>
        }
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-2xl">Exclusive Products Prime.</h1>
            </div>
            <input 
            type="text"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" 
            placeholder="Search a product."
            onChange={(event)=>setSearchByTitle(event.target.value)} />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                renderView()
            }
            </div>
            <ProductDetail/>
        </Layout>
    );
}

export {Home};