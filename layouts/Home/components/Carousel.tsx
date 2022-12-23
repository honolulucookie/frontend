import { ReturnProduct } from "./ReturnProduct";
import { useEffect, useState } from "react"; // useEffect is 2nd hook to call api/function first time component is created // useState is to dynamically create state in app
import ProductModel from "../../../models/ProductModel";
export const Carousel = () => {
    
    
        const [products, setProducts] = useState<ProductModel[]>([]); // type ProductModel Array
        const [isLoading, setIsLoading] = useState(true); // display "loading" to user
        const [httpError, setHttpError] = useState(null); // if api fails
    
        //useEffect gets called at creation of component and each time something (such as state) in array changes
        useEffect(() => {
            const fetchProducts = async () => {
                const baseUrl: string = "http://localhost:8089/api/products";
    
                const url: string = `${baseUrl}?page=0&size=9`; // will create: http://localhost:8089/api/products?page=0&size=9
    
                // get all of info from that url ans store in response
                const response = await fetch(url); //use await because asyn function
    
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
    
                // get reponse as a JSON and store it in responseJson, use await bc asyn function
                // making it into JSON makes it easier to read data, object will be type embedded
                const responseJson = await response.json();
    
                //get list of all the products
                const responseData = responseJson._embedded.products;
    
                // create ProductModel Array
                const loadedProducts: ProductModel[] = [];
    
                // for each product in responseData, pass obj in as a loaded product
                for (const key in responseData) {
                    loadedProducts.push({
                        id: responseData[key].id,
                        name: responseData[key].name,
                        price: responseData[key].price,
                        description: responseData[key].description,
                        count: responseData[key].count,
                        countAvailable: responseData[key].countAvailable,
                        category: responseData[key].category,
                        img: responseData[key].img,
                    });
                }
    
                setProducts(loadedProducts);
                setIsLoading(false);
            };
            fetchProducts().catch((error: any) => { // for errors
                setIsLoading(false);
                setHttpError(error.message);
            })
        }, []);
    /*
        if (isLoading) {
            return (
                <SpinnerLoading/>
            )
        }
        */
    
        if (httpError) {
            return (
                <div className='container m-5'>
                    <p>{httpError}</p>
                </div>
            )
        }
    
    return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Explore Products</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            {
                                /* loop through 3 times, and print product with product tag*/
                                products.slice(0, 3).map(product => (
                              
                                    <ReturnProduct product={product} key ={product.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {
                                /* loop through 3 times, and print product with product tag*/
                                products.slice(3, 6).map(product => (
                              
                                    <ReturnProduct product={product} key ={product.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {
                                /* loop through 3 times, and print product with product tag*/
                                products.slice(6, 9).map(product => (
                              
                                    <ReturnProduct product={product} key ={product.id} />
                                ))
                            }
                        </div>
                    </div>

                    {/* End of Images */}
                </div>
                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div> 

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <ReturnProduct product = {products[7]} key={products[7].id}/>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn main-color text-white' href='#'>Add to Cart</a>
            </div>
        </div>
    );
}