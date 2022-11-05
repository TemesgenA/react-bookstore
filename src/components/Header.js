import React from 'react';
import IconButton from './IconButton';

const Header = () => (
  <div className="Header">
    <div className="logo">
      <h1>Bookstore CMS</h1>
    </div>
    <nav className="nav">
      <ul className="nav-links">
        <li className="books">BOOKS</li>
        <li className="catagories">CATEGORIES</li>
      </ul>
      {/* <div className="Oval"></div> */}
      {/* <div className="Mask"></div> */}
    </nav>
    <IconButton />
  </div>
);

export default Header;
