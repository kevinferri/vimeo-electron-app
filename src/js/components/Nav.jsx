import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/components/Nav.css';

import Logo from './Logo';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Logo />
          <aside className="Nav__links">
            <NavLink exact activeClassName="Nav__link--active" className="Nav__link" to="/">Home</NavLink>
            <NavLink activeClassName="Nav__link--active" className="Nav__link" to="/watch">Watch</NavLink>
            <NavLink exact activeClassName="Nav__link--active" className="Nav__link" to="/upload">Upload</NavLink>
          </aside>
        </div>
      </nav>
    );
  }
}

export default Nav;
