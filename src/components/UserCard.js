import React, { Component } from 'react';
import { ProfilePic } from './SearchPanel';

import './css/UserCard.css';

class UserStatItem extends Component {
  render() {
    return (
      <div className="user-stat-item">
        <span className="stat-type color-gray">{this.props.type}</span>
        <span className="stat-value color-accent-dark">{this.props.value}</span>
      </div>
    )
  }
}

class UserStatList extends Component {
  render() {
    return (
      <div className="user-stat-list">
        <UserStatItem type="Tweets" value={this.props.tweets} />
        <UserStatItem type="Following" value={this.props.following} />
        <UserStatItem type="Followers" value={this.props.followers} />
      </div>
    )
  }
}

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.userData;

    this.coverStyles = {
      backgroundImage: "url(" + this.data.cover + ")"
    }
  }

  render() {
    return (
      <div className="user-card page-card">
        <div className="user-cover" style={this.coverStyles}></div>
        <div className="user-info">
          <ProfilePic image={this.data.profileImage} size="4.4em" />
          <div className="user-handle">
            <span className="name">{this.data.name}</span>
            <span className="handle color-gray">{this.data.handle}</span>
          </div>
          <UserStatList tweets={this.data.tweets} following={this.data.following}
                        followers={this.data.followers} />
        </div>
      </div>
    )
  }
}

export default UserCard;
