import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Our Mission</h2>
          <p>
          At BooksStore, our mission is to ignite a passion for reading by providing an extensive and diverse collection of books for all ages and interests. We strive to create a vibrant community where book lovers can discover, share, and engage with stories that inspire, educate, and entertain. Our commitment is to make literature accessible, ensuring every reader finds their next favorite book with ease.</p>
        </div>
        <div className="footer-section links" style={{paddingLeft:180}}>
          <h2>Quick Links</h2>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: bookstore@gmail.com</p>
          <p>Phone: +91 85820 33220</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
