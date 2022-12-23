import React from 'react'
import ProductModel from '../../../models/ProductModel';

export const ReturnProduct: React.FC<{product: ProductModel}> = (props) => { // prop is product which is going to be ProductModel and can have all of ProductModel's attributes
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {props.product.img ? /* If image is true, do the first section, if false, do the second section: display the default img*/
                    <img
                    src={props.product.img}
                    width='151'
                    height='233'
                    alt="product"
                    />
                    : 
                    <img
                    src={require('./../../../Images/ProductImages/book-luv2code-1000.png')}
                    width='151'
                    height='233'
                    alt="product"
                    />
                    
                }
                
                <h5 className='mt-2'>{props.product.name}</h5>
                <p>{props.product.price}</p>
                <a className='btn main-color text-white' href='#'>Add to cart</a>

            </div>
        </div>
    );
}