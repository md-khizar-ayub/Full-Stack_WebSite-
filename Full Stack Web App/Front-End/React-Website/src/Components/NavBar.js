import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar()
{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handlescroll = () => {window.scrollTo({top: 0, behavior:'smooth'});};

  const showButton = () =>
  {
    if (window.innerWidth <= 960)
    {
      setButton(false);
    } else
    {
      setButton(true);
    }
  };

  useEffect(() =>
  {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          COMPANY <i class="fa-solid fa-user-tie" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/service'
                className='nav-links'
                onClick={() => {closeMobileMenu();handlescroll()}}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={() => {closeMobileMenu();handlescroll()}}
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={() => {closeMobileMenu();handlescroll()}}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={() => {closeMobileMenu();handlescroll()}}>CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
