import React, { Component } from "react";

import "./index.css";

export default class tabItem extends Component {
  render() {
    return (
      <div
        className={`tab-item ${this.props.tabClass}`}
        onClick={this.props.tabEvent}
      >
        <div className="tab-item-icon">
          <img src={this.props.tabUrl} />
        </div>
        <div className="tab-item-name">{this.props.tabName}</div>
      </div>
    );
  }
}
