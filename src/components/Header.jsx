import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1>ElixaPlus</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;