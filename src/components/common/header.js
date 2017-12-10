import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => {
  return (
    <nav className="primary_navigation">
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
