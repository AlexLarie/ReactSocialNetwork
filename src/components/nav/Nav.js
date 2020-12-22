import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to = '/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to = '/dialogs'>Messages</NavLink>
      </div>
      <div>
        <NavLink to = '/news'>News</NavLink>
      </div>
      <div>
        <NavLink to = '/musick'>Musick</NavLink>
      </div>
      <div>
        <NavLink to = '/settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav;