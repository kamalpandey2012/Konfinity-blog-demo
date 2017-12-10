import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Konfinity Blog</h1>
        <p>Lets see the magic of react and redux</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}
