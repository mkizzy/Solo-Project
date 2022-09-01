import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/Navbar.scss';
//import Popup from './components/Popup';

function Navbar() {
    // console.log('dsfsdfdsfsd')
    return (
     <div className='navbar'>
        <a href ='/favorites' className='navbaritems'>Favorites</a>
        <a href ='/login' className='navbaritems'>Login</a>
     </div>
    )
}
export default Navbar;