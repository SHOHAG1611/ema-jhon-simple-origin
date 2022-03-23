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
        const storeCart = getStorageCart();
        const savedCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }

        }
        setCart(savedCart);
    }, [products])

    /* btn add for count shopin products list number for buy */
    const handlerAddToCart = (selactedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selactedProduct.id);
        if (!exists) {
            selactedProduct.quantity = 1;
            newCart = [...cart, selactedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selactedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selactedProduct.id)
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