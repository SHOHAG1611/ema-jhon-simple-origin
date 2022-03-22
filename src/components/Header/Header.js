import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='headerStyle'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/card">Card</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;