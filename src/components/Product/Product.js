import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    // console.log(props.product)
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='singleProductStyle'>
            {/* <h1>This is Product Component:{img}</h1> */}
            <img src={img} alt="" />
            <div className='product'>
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <h5>Manufacturer : {seller}</h5>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handlerAddToCart(props.product)} className='btn-card'>
                <p className='btn-text'>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;