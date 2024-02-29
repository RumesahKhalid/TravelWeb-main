import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import Logo  from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Homenav = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const navigate = useNavigate();

  return (
    <nav className='NavbarItem'>
         <img src={Logo} alt='logo' className='navbar-logo'/>        
          <div className='toggleNavbar' onClick={toggleNav}>
           {active ? <X className='icon' /> : <Menu className='icon' />}
          </div> 
        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/' className='nav-links'>Home</Link>
          </li>
          <li>
            <Link to='/destination' className='nav-links'>Destination</Link>
          </li>
          <li>
            <Link to='/blog' className='nav-links'>Blog</Link>
          </li>
          <li>
            <Link to='/about' className='nav-links'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-links'>Contact</Link>
          </li>
          <button className='nav-links-mobile' onClick={() => navigate("./signup")}>Signup</button>
          <button className='nav-links-mobile' onClick={() => navigate("./login")}>LogIn</button>
       </ul>
       
    </nav>
  )
}

export default Homenav;