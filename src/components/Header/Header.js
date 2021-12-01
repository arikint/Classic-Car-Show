import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

/* --------------------------------------------
 -----Header function------------
 ---------------------------------------------*/
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <h2>Classic Car Show</h2>
            <h1>Target Horsepower: 100 thousand</h1>
        </div>
    );
};

export default Header;