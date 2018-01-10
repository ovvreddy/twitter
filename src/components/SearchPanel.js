import React, { Component } from 'react';
import './css/SearchPanel.css';

export class SearchBar extends Component {
  render() {
    return (
      <form className="search-form">
        <input type="text" className="text-field" placeholder={this.props.placeholder} />
        <span className="submit-btn">
          <i className={"fa " + this.props.icon} aria-hidden="true"></i>
        </span>
      </form>
    )
  }
}

export class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      backgroundImage: "url(" + this.props.image + ")",
      height: this.props.size, width: this.props.size
    }
  }

  render() {
    return (
      <div className="profile-pic" style={this.styles}></div>
    )
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      padding: this.props.padtb + " " + this.props.padlr,
      fontSize: this.props.size
    }

    this.klass = (this.props.filled === false ? "btn-unfilled" : "btn-filled");
  }

  render() {
    return (
      <button className={"generic-btn " + this.klass} style={this.styles}>
        {this.props.text}
      </button>
    )
  }
}

class SearchPanel extends Component {
  render() {
    return(
      <div className="search-panel">
        <SearchBar icon="fa-search" placeholder="Search Tweeter" />
        <ProfilePic image="static/images/dp.jpg" size="1.9em" />
        <Button text="Tweet" size="0.9em" padtb="0.66em" padlr="1.2em" />
      </div>
    )
  }
}

export default SearchPanel;
