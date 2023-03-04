import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date ();
    const year = today.getFullYear();
    return (
        <footer className='footer-container'>
           <p><small>copywrite  © {year}</small></p> 
        </footer>
    );
};

export default Footer;