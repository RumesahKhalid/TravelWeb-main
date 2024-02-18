import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'react-feather';
import Logo  from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };
  return (
    <nav className='NavbarItem'>
         <img src={Logo} alt='logo' className='navbar-logo'/>        
          <div className='toggleNavbar' onClick={toggleNav}>
           {active ? <X className='icon' /> : <Menu className='icon' />}
          </div> 
        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Home/>
            <Link to='/' className='nav-links'>Home</Link>
          </li>
          <div class="dropdown">
            <span>Service &#9662;</span>
            <div class="dropdown-content">
              <a href="./service">Choose Tour</a>
              <a href="./service2">Hotels</a>
              <a href="./service">Activities</a>
              <a href="./service3">Flight</a>
            </div>
          </div>
          <li>
            <Link to='/destination' className='nav-links'>Destination</Link>
          </li>
          <li>
            <Link to='/blog' className='nav-links'>Blog</Link>
          </li>
          <li>
            <Link to='/dashboard' className='nav-links'>Dashboard</Link>
          </li>
          <li>
            <Link to='/about' className='nav-links'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-links'>Contact</Link>
          </li>
          <button className='nav-links-mobile'>Sign Up</button>
       </ul>
       
    </nav>
  )
}

export default Navbar;