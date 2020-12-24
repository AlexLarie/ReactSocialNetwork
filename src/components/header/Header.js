import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
   return(
      <header className="header">
      <NavLink to='/profile'><img src="https://via.placeholder.com/50" alt = "logo"/></NavLink>
      </header>
   )
}

export default Header;