import React from 'react';
import './navbar.scss';
import { AuthService } from '../../../service/authService';
import { useHistory } from 'react-router-dom';

export default function Navbar({ currentUser }) {
    const history = useHistory();
    const handleLogout = (evt) => {
        evt.preventDefault();
        AuthService.onLogout();
    }
    return (
        <div className="navbar">
           <div className="nav">
            <h1>Reactive Blog</h1>
              <ul className="links-wrapper">
                  <li><a href="/">Home</a></li>
                  {currentUser ? (
                      <li><a href="" onClick={handleLogout}>logout</a></li>
                  ) : (
                      <li><a href="/login">Login</a></li>
                  )}
                  {/*<li><a href="">Register</a></li>*/}
              </ul>
           </div>
        </div>
    )
}
