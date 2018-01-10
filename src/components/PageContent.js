import React, { Component } from 'react';
import UserCard from './UserCard';
import TrendsCard from './TrendsCard';
import FollowCard, { CardFooter } from './FollowCard';

import TweetInput from './TweetInput';
import UserFeed from './UserFeed';

import './css/PageContent.css';

class LinksCard extends Component {
  constructor(props) {
    super(props);

    this.links = [
      "About", "Help Center", "Terms", "Privacy policy",
      "Cookies", "Ads info", "Brand" , "Blog", "Status",
      "Apps", "Jobs", "Marketing", "Businesses", "Developers"
    ]
  }

  render() {
    return (
      <div className="links-card page-card">
        <div className="links-content-wrapper">
          <span className="link-item text-small color-gray">© 2017 Twitter</span>
          {
            this.links.map((value, idx) => (
              <a href="#" className="link-item link-small color-gray" key={"link-item-" + idx}>
                {value}
              </a>
            ))
          }
        </div>
        <CardFooter icon="fa-external-link" text="Advertise with Twitter" />
      </div>
    )
  }
}

class PageContent extends Component {
  constructor(props) {
    super(props);

    this.userData = {
      cover: "static/images/cover.jpg",
      profileImage: "static/images/dp.jpg",
      name: "Vishnu",
      handle: "@vishnu15442524",
      tweets: 200, following: 100, followers: 45
    }

    this.trendsList = [
      [ "#Tripura", "" ],
      [ "#Tribune", "30.5K Tweets" ],
      [ "#UIDAI", "3,930 Tweets" ],
      [ "#FascinoCalendar2018", "2,615 Tweets" ],
      [ "#BENKOL", "@TheMeth is Tweeting about this" ],
      [ "#KGFTeaser", "13.4K Tweets" ]
    ]

    this.feedData = [
      {
        retweet: "Sundar Pichai",
        dp: "static/images/udacitylogo.jpg",
        uname: "Udacity", uhandle: "@udacity", elapsed: "56m",
        text: "Meet your peers by sharing your good news and clicking the hashtags!",
        image: "static/images/udacity.jpg",
        stats: { comments: 21, retweets: 50, likes: 97 }
      },
      {
        retweet: "TEDx",
        dp: "static/images/tedtalks.jpg",
        uname: "TED Talks", uhandle: "@TEDTalks", elapsed: "1h",
        text: "Glow-in-the-dark bike paths and other magical city designs.",
        image: "static/images/bikepath.jpg",
        stats: { comments: 122, retweets: 230, likes: 560 }
      },
      {
        retweet: "Google VM",
        dp: "static/images/googlecloudlogo.jpg",
        uname: "Google Cloud", uhandle: "@googlecloud", elapsed: "1d",
        text: "Start your first VM for free with Google Compute Engine.",
        image: "static/images/googlecloud.jpg",
        stats: { comments: 12, retweets: 70, likes: 110 }
      }
    ]

    this.followList = [
      { image: "static/images/bcci.jpg", name: "BCCI", handle: "@BCCI" },
      { image: "static/images/billgates.jpg", name: "Bill Gates", handle: "@BillGates" },
      { image: "static/images/andhra.jpg", name: "Andhra Pradesh CM", handle: "@andhrapradesh" },
      { image: "static/images/fb.png", name: "Facebook", handle: "@facebook" }
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="page-content">
          <div className="page-col col-left">
            <UserCard userData={this.userData} />
            <TrendsCard list={this.trendsList} />
          </div>
          <div className="page-col col-center">
            <div className="col-wrapper page-card">
              <TweetInput image={this.userData.profileImage} />
              <UserFeed feedData={this.feedData} />
            </div>
          </div>
          <div className="page-col col-right">
            <FollowCard list={this.followList} /> <LinksCard />
          </div>
        </div>
      </div>
    )
  }
}

export default PageContent;
