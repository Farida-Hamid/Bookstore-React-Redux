import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="font1">
    <h1>Library</h1>
    <nav>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  </header>
);

export default Header;
