class ProductModel {
    id: number;
    name: string;
    price?: number;
    description?: string;
    count?: number;
    countAvailable?: number;
    category?: string;
    img?: string;

  
    constructor(id: number, name: string, price: number, description: string, count: number, countAvailable: number, category: string, img: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.count = count;
        this.countAvailable = countAvailable,
        this.category = category;
        this.img = img;
    }

}

export default ProductModel;