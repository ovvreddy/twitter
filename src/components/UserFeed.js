import React, { Component } from 'react';
import { ProfilePic } from './SearchPanel';
import { UserLabel } from './FollowCard';

import './css/UserFeed.css';

class TweetButtonItem extends Component {
  render() {
    let klass = "tweet-btn-panel-item color-gray";
    if (this.props.customCls)
      klass += " " + this.props.customCls;

    return (
      <div className={klass}>
        <span className="icon">
          <i className={"fa " + this.props.icon} aria-hidden="true"></i>
        </span>
        <span className="value">{this.props.value}</span>
      </div>
    )
  }
}

class TweetButtons extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.tweetStats;
  }

  render() {
    return (
      <div className="tweet-btn-panel">
        <TweetButtonItem icon="fa-comment-o" value={this.data.comments} />
        <TweetButtonItem icon="fa-retweet" value={this.data.retweets} customCls="btn-retweet" />
        <TweetButtonItem icon="fa-heart-o" value={this.data.likes} customCls="btn-like" />
        <TweetButtonItem icon="fa-envelope-o" value="" />
      </div>
    )
  }
}

class TweetCard extends Component {
  constructor(props) {
    super(props);
    this.tweet = this.props.tweetData;
  }

  render() {
    return (
      <div className="tweet-card">
        <div className="retweet-panel text-small color-gray">
          <span className="icon">
            <i className="fa fa-retweet" aria-hidden="true"></i>
          </span>
          <span className="text">{this.tweet.retweet + " Retweeted"}</span>
        </div>
        <div className="tweet-panel">
          <div className="user-pic-pane">
            <ProfilePic image={this.tweet.dp} size="3.125em" />
          </div>
          <div className="tweet-details-pane">
            <UserLabel name={this.tweet.uname} handle={this.tweet.uhandle}
                       elapsed={this.tweet.elapsed} />
            <div className="tweet-text-pane">{this.tweet.text}</div>
            <div className="tweet-image-pane">
              <img className="tweet-image" src={this.tweet.image} />
            </div>
            <TweetButtons tweetStats={this.tweet.stats} />
            <span className="opt-btn">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

class UserFeed extends Component {
  render() {
    let tweets = [];
    this.props.feedData.forEach((value, idx) => {
      const tweet = <TweetCard tweetData={value} key={"tweet-card-" + idx} />
      tweets.push(tweet);
    });

    return (
      <div className="user-feed">{tweets}</div>
    )
  }
}

export default UserFeed;
