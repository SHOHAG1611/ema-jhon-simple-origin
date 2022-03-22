import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>This is card Sumary</h1>
            <p>Add Product For Buy:{props.cart.length}</p>
        </div>
    );
};

export default Cart;