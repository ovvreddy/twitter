import React, { Component } from 'react';
import SearchPanel from './SearchPanel';

import './css/Header.css';

class NavLinkItem extends Component {
  render() {
    let klass = "nav-link-item";
    klass += (this.props.active === true) ? " nav-link-active" : "";
    
    return (
      <li className={klass}>
        <span className="icon">
          <i className={ "fa " + this.props.icon } aria-hidden="true"></i>
        </span>
        <span className="text">{ this.props.text }</span>
      </li>
    )
  }
}

export class NavLinks extends Component {
  render() {
    return(
      <ul className="nav-links color-gray">
        <NavLinkItem icon="fa-home" text="Home" active={true} />
        <NavLinkItem icon="fa-heart-o" text="Moments" />
        <NavLinkItem icon="fa-bell-o" text="Notifications" />
        <NavLinkItem icon="fa-envelope-o" text="Messages" />
      </ul>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="container">
          <NavLinks />
          <div className="twitter-logo color-accent-light">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <SearchPanel />
        </div>
      </div>
    )
  }
}

export default Header;
