import React, { useState } from 'react';
import { Button } from './Button';
import { Link, Route } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Search from '../pages/Search';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          B.O.M
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
            <Link to='/Material' className='nav-links' onClick={closeMobileMenu}>
              Material
            </Link>
          </li> */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

         <li className='nav-item'>
          <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
            Search <i className='fas fa-search' />
            
          </Link>
          
          
         </li>
          
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
        
      </nav>
    </>
  );
}

export default Navbar;