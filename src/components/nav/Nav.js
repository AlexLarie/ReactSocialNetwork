import React from "react";
import './nav.css';

const Nav = () => {
   return (
      <nav className="nav">
        <div>
          <a href = '#'>Profile</a>
        </div>
        <div>
          <a href = '#'>Messages</a>
        </div>
        <div>
          <a href = '#'>News</a>
        </div>
        <div>
          <a href = '#'>Musick</a>
        </div>
        <div>
          <a href = '#'>Settings</a>
        </div>
      </nav>
   )
}

export default Nav;