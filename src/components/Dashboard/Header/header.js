import React from 'react';
import {BsFillBellFill, BsFillEnveloperFill, BsPersonCircle, BsSearch,BsJustify} from 'react-icons/bs';
import './header.css';

const Header = ({OpenSidebar}) => {
  return (
    <div className='header'>
       <div className='menu-icon'>
         <BsJustify className='icon' onClick={OpenSidebar}/>
       </div>
       <div className='header-left'>
        <BsSearch className='icon'/>
       </div>
       <div className='header-right'>
         <BsFillBellFill className='icon'/>
         <BsPersonCircle className='icon'/>
       </div>
    </div>
  )
}

export default Header;