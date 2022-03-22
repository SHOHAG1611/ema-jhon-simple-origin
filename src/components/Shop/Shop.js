import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    /* btn add for count shopin products list number for buy */
    const handlerAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='mainStyle'>
            <div className="products-card-container">
                {
                    products.map(product => <Product key={product.id} product={product} handlerAddToCart={handlerAddToCart}></Product>)
                }

            </div>
            <div className="card-samarye-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;