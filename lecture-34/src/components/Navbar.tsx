import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
          <div className="container">
            <h1>My Website</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      );
    };
    
    export default Navbar;