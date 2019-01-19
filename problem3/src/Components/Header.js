import React, { Component } from 'react';
import Logo from '../Images/logo.jpg';
import  './Header.scss';

class Header extends Component {

    render() { 
        return (
            <header className="header"> 
                <div className="header__main">
            <img className="header__logo" src={Logo} alt="logo"/>
            <nav className="header__links">
                <a href="">Link1</a>
                <a href="">Link2</a>
                <a href="">Link3</a>
            </nav>
            </div>
            <div className="header__buttons">
                <button className="button">button</button>
                <button className="button">button</button>
            </div>
            </header>
         );
    }
}
 
export default Header;