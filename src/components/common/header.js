import './header.css';
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => {
  return (
    <nav className="primary_navigation">
      <IndexLink activeClassName="active" to="/">Home</IndexLink>
      {" | "}
      <Link activeClassName="active" to="/posts">Posts</Link>
      {" | "}
      <Link activeClassName="active" to="/add-post">Add Post</Link>
      {" | "}
      <Link activeClassName="active" to="/about">About</Link>
    </nav>
  );
};

export default Header;
