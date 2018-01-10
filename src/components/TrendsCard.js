import React, { Component } from 'react';
import './css/TrendsCard.css';

export class CardOptions extends Component {
  render() {
    return (
      <div className="card-options">
        <span className="title">{this.props.title}</span>
        {
          this.props.options.map((value, idx) => (
            <a href="#" className="link-small option color-accent-dark"
               key={"trend-options-" + idx}>{value}</a>
          ))
        }
      </div>
    )
  }
}

class TrendItem extends Component {
  render() {
    return (
      <li className="trend-item">
        <span className="trend-title color-accent-dark">{this.props.title}</span>
        <span className="trend-stats color-gray">{this.props.stats}</span>
      </li>
    )
  }
}

class TrendsList extends Component {
  render() {
    return (
      <ul className="trends-list">
      {
        this.props.list.map((value, idx) => (
          <TrendItem title={value[0]} stats={value[1]} key={"trend-items-" + idx} />
        ))
      }
      </ul>
    )
  }
}

class TrendsCard extends Component {
  render() {
    return (
      <div className="trends-card page-card">
        <CardOptions title="Trends For You" options={["Change"]} />
        <TrendsList list={this.props.list} />
      </div>
    )
  }
}

export default TrendsCard;
