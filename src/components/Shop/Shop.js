import React, { useEffect, useState } from 'react';
import { addToDb, getStorageCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        console.log('Local Storage first line', products)
        const storeCart = getStorageCart()
        const sevedCart = [];
        for (const id in storeCart) {
            // console.log(id)
            const AddedProducts = products.find(product => product.id === id)
            if (AddedProducts) {
                const quantity = storeCart[id]
                AddedProducts.quantity = quantity;
                sevedCart.push(AddedProducts);
            }
        }
        setCart(sevedCart);
    }, [products])
    /* btn add for count shopin products list number for buy */
    const handlerAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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