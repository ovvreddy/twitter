import React, { Component } from 'react';
import { CardOptions } from './TrendsCard';
import { ProfilePic, Button } from './SearchPanel';

import './css/FollowCard.css';

export class UserLabel extends Component {
  render() {
    return (
      <div className="user-label">
        <span className="name">{this.props.name}</span>
        <span className="handle color-gray">{this.props.handle}</span>
        {
          ((this.props.elapsed) ?
            (<span className="elapsed color-gray">{this.props.elapsed}</span>) : ""
          )
        }
      </div>
    )
  }
}

class FollowItem extends Component {
  render() {
    let dt = this.props.userData;

    return (
      <div className="follow-item">
        <ProfilePic image={dt.image} size="3.125em" />
        <div className="follow-section">
          <UserLabel name={dt.name} handle={dt.handle} />
          <div className="btn-wrapper">
          <Button text="Follow" filled={false} size="0.8em" padtb="0.4em" padlr="1.8em" />
          </div>
        </div>
      </div>
    )
  }
}

export class CardFooter extends Component {
  render() {
    return (
      <div className="card-footer">
        <span className="icon color-accent-dark">
          <i className={"fa " + this.props.icon} aria-hidden="true"></i>
        </span>
        <a href="#" className="text link-small color-accent-dark">{this.props.text}</a>
      </div>
    )
  }
}

class FollowCard extends Component {
  render() {
    return (
      <div className="follow-card page-card">
        <div className="follow-content-wrapper">
          <CardOptions title="Who to follow" options={["Refresh", "View all"]} />
          <div className="follow-list">
            {
              this.props.list.map((value, idx) => (
                <FollowItem userData={value} key={"follow-item-" + idx} />
              ))
            }
          </div>
        </div>
        <CardFooter icon="fa-users" text="Find people you know" />
      </div>
    )
  }
}

export default FollowCard;
