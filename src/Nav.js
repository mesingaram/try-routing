import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
      <h3>Home(Logo)</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/therapy'>
          <li>Therapy Services</li>
        </Link>
        <Link style={navStyle} to='/new'>
          <li>New Patient Information</li>
        </Link>
        <Link style={navStyle} to='/business'>
          <li>Business Solutions</li>
        </Link>
        <Link style={navStyle} to='/careers'>
          <li>Careers</li>
        </Link>
        <Link style={navStyle} to='/blog'>
          <li>Blog</li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
