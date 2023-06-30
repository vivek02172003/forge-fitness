import React from 'react';
import './NavBar.css';
import logo from './Images/logo.png';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
      <nav>
        <div className="logo">
          <Link to="./HomePage.js"><img src={logo} alt="Logo" className="logo-image" /></Link>
          
        </div>
        <ul className="nav-links">
          <li>
            <Link to="classes"><button className="nav-button">Classes</button></Link>
          </li>
          <li>
            <Link to="membership"><button className="nav-button">Membership</button></Link>
          </li>
          <li>
            <Link to="nutrition"><button className="nav-button">Nutrition</button></Link>
          </li>
          <li>
            <Link to="train"><button className="nav-button">Training Help</button></Link>
          </li>
          <li>
            <Link to="fitness"><button className="nav-button">Fitness Plan</button></Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;