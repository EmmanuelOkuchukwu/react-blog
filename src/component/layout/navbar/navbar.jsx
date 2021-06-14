import React from 'react';
import './navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
           <div className="nav">
            <h1>React-blog</h1>
              <ul className="links-wrapper">
                  <li><a href="">Home</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="">Register</a></li>
              </ul> 
           </div> 
        </div>
    )
}
