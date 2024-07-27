
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BooksStore</div>
      <ul className="navbar-links">
        <li><Link to={'/home'}>Home</Link></li>       
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link to={'/add'}><FontAwesomeIcon icon={faPlus} /></Link></li>
        <li><Link to={'/'}><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
