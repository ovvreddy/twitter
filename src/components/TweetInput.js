import React, { Component } from 'react';
import { ProfilePic, SearchBar } from './SearchPanel';
import './css/TweetInput.css';

class TweetInput extends Component {
  render() {
    return (
      <div className="tweet-input-wrapper">
        <ProfilePic image={this.props.image} size="2em" />
        <SearchBar icon="fa-picture-o" placeholder="What's happening?" />
      </div>
    )
  }
}

export default TweetInput;
