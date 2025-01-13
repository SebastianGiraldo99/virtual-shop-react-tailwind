export interface IProductInterface  {
    id : number,
    title : string,
    price : number,
    description : string,
    category : ICategory,
    images : Array<string>
};


export interface ICategory {
    id: number,
    name : string,
    image : string
}

